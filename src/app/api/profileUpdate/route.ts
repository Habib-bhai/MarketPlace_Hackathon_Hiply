import { NextResponse, type NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { createClient } from "next-sanity";

// Create the client with the proper Sanity token
const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    token: process.env.SANITY_TOKEN, // Use Sanity token, not JWT_SECRET
    apiVersion: "2025-01-18",
    useCdn: false
});

async function uploadImageToSanity(base64Response: string) {
    try {
        const [mimeTypeData, base64Data] = base64Response.split(',');
        const mimeType = mimeTypeData.match(/data:(.*?);/)?.[1];
        
        if (!mimeType || !base64Data) {
            throw new Error('Invalid base64 image format');
        }
    
        const buffer = Buffer.from(base64Data, 'base64');
        const imageFile = new File([buffer], 'image.jpg', { type: mimeType });
    
        const asset = await client.assets.upload('image', imageFile, {
            filename: 'image.jpg',
            contentType: mimeType
        });
    
        return {
            _type: 'image',
            asset: {
                _type: 'reference',
                _ref: asset._id
            }
        };
    } catch (error) {
        console.error('Error uploading image to Sanity:', error);
        throw error;
    }
}

export async function POST(req: NextRequest) {
    try {
        // 1. First verify authentication
        const token = req.cookies.get("token")?.value;
        if (!token) {
            return NextResponse.json(
                { message: "Authentication required" }, 
                { status: 401 }
            );
        }

        // 2. Verify JWT token
        const verifiedTokenValues = jwt.verify(
            token, 
            String(process.env.JWT_SECRET)
        ) as jwt.JwtPayload;

        console.log(verifiedTokenValues)

        // 3. Get request data
        const data = await req.json();

        // 4. Upload image if provided
        let imageReference = null;
        if (data.image) {
            try {
                imageReference = await uploadImageToSanity(data.image);
            } catch (imageError) {
                console.error('Image upload failed:', imageError);
                return NextResponse.json(
                    { message: "Failed to upload image" }, 
                    { status: 500 }
                );
            }
        }
        
        console.log("REFEREnCe", imageReference)

        // 5. Update profile
        const updateData = {
            name: data.data.name,
            email: data.data.email,
            phone: Number(data.data.phone),
            address: data.data.address,
            state: data.data.state,
            city: data.data.city,
            zipCode: Number(data.data.zipCode),
            ...(imageReference && { image: imageReference })
        };

        const response = await client.patch(verifiedTokenValues._id)
            .set(updateData)
            .commit();

        if (!response) {
            throw new Error("Failed to update profile");
        }

        return NextResponse.json({ 
            message: "Profile updated successfully" 
        });

    } catch (error) {
        console.error('Profile update failed:', error);
        return NextResponse.json(
            { message: "Failed to update profile" }, 
            { status: 500 }
        );
    }
}