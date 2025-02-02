// import { NextResponse, type NextRequest } from "next/server";
// import jwt from "jsonwebtoken";
// import { createClient } from "next-sanity";
// import FormData from "form-data";
// import { Readable } from "stream";

// const customFetch = (url: string, options: any) => {
//     return fetch(url, {
//       ...options,
//       duplex: 'half',
//     })
//   }
  
//   // Initialize the Sanity client with the custom fetch
//   const client = createClient({
//     projectId: 'your-project-id',
//     dataset: 'your-dataset',
//     apiVersion: '2024-02-02',
//     token: 'your-token',
//     useCdn: false,
//     // Add the custom fetch to the client config
//   })
  
//   // Then your upload function becomes:
//   async function uploadImageToSanity(base64Response: string) {
//     try {
//       const [mimeTypeData, base64Data] = base64Response.split(",");
//       const mimeType = mimeTypeData.match(/data:(.*?);/)?.[1];
  
//       if (!mimeType || !base64Data) {
//         throw new Error("Invalid base64 image format");
//       }
  
//       const buffer = Buffer.from(base64Data, "base64");
      
//       // Create a more robust readable stream
//       const stream = new Readable({
//         read() {
//           this.push(buffer);
//           this.push(null);
//         }
//       });
  
//       const asset = await client.assets.upload("image", stream, {
//         filename: "image.jpg",
//         contentType: mimeType,
//       });
  
//       return {
//         _type: "image",
//         asset: {
//           _type: "reference",
//           _ref: asset._id,
//         },
//       };
//     } catch (error) {
//       console.error("Error uploading image to Sanity:", error);
//       throw error;
//     }
//   }



// export async function POST(req: NextRequest) {
//     try {
//         // 1. First verify authentication
//         const token = req.cookies.get("token")?.value;
//         if (!token) {
//             return NextResponse.json(
//                 { message: "Authentication required" },
//                 { status: 401 }
//             );
//         }

//         // 2. Verify JWT token
//         const verifiedTokenValues = jwt.verify(
//             token,
//             String(process.env.JWT_SECRET)
//         ) as jwt.JwtPayload;

//         console.log(verifiedTokenValues)

//         // 3. Get request data
//         const data = await req.json();

//         // 4. Upload image if provided
//         let imageReference = null;
//         if (data.image) {
//             try {
//                 imageReference = await uploadImageToSanity(data.image);
//             } catch (imageError) {
//                 console.error('Image upload failed:', imageError);
//                 return NextResponse.json(
//                     { message: "Failed to upload image" },
//                     { status: 500 }
//                 );
//             }
//         }

//         console.log("REFEREnCe", imageReference)

//         // 5. Update profile
//         const updateData = {
//             name: data.data.name,
//             email: data.data.email,
//             phone: Number(data.data.phone),
//             address: data.data.address,
//             state: data.data.state,
//             city: data.data.city,
//             zipCode: Number(data.data.zipCode),
//             ...(imageReference && { image: imageReference })
//         };

//         const response = await client.patch(verifiedTokenValues._id)
//             .set(updateData)
//             .commit();

//         if (!response) {
//             throw new Error("Failed to update profile");
//         }

//         return NextResponse.json({
//             message: "Profile updated successfully"
//         });

//     } catch (error) {
//         console.error('Profile update failed:', error);
//         return NextResponse.json(
//             { message: "Failed to update profile" },
//             { status: 500 }
//         );
//     }
// }



// import { NextResponse, type NextRequest } from "next/server";
// import jwt from "jsonwebtoken";
// import { createClient } from "next-sanity";
// import FormData from "form-data";
// import { Readable } from "stream";

// // Create the Sanity client with the proper token
// const client = createClient({
//     projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//     dataset: "production",
//     token: process.env.SANITY_TOKEN, // Use Sanity token, not JWT_SECRET
//     apiVersion: "2025-01-18",
//     useCdn: false
// });

// async function uploadImageToSanity(base64Response: string) {
//     try {
//         const [mimeTypeData, base64Data] = base64Response.split(",");
//         const mimeType = mimeTypeData.match(/data:(.*?);/)?.[1];

//         if (!mimeType || !base64Data) {
//             throw new Error("Invalid base64 image format");
//         }

//         // Convert base64 to Buffer
//         const buffer = Buffer.from(base64Data, "base64");

//         // Convert buffer to readable stream
//         const stream = Readable.from(buffer);

//         // Create form-data
//         const form = new FormData();
//         form.append("file", stream, { filename: "image.jpg", contentType: mimeType });

//         // Upload the image
//         const asset = await client.assets.upload("image", stream, {
//             filename: "image.jpg",
//             contentType: mimeType
//         });

//         return {
//             _type: "image",
//             asset: {
//                 _type: "reference",
//                 _ref: asset._id
//             }
//         };
//     } catch (error) {
//         console.error("Error uploading image to Sanity:", error);
//         throw error;
//     }
// }

// export async function POST(req: NextRequest) {
//     try {
//         // 1. Check for authentication token in cookies or headers
//         const token = req.cookies.get("token")?.value || req.headers.get("authorization")?.split(" ")[1];

//         if (!token) {
//             return NextResponse.json({ message: "Authentication required" }, { status: 401 });
//         }

//         // 2. Verify JWT token safely
//         if (!process.env.JWT_SECRET) {
//             console.error("JWT_SECRET is not defined");
//             return NextResponse.json({ message: "Server error" }, { status: 500 });
//         }

//         let verifiedTokenValues;
//         try {
//             verifiedTokenValues = jwt.verify(token, process.env.JWT_SECRET) as jwt.JwtPayload;
//         } catch (err) {
//             console.error("JWT verification failed:", err);
//             return NextResponse.json({ message: "Invalid token" }, { status: 401 });
//         }

//         if (!verifiedTokenValues._id) {
//             console.error("JWT does not contain _id");
//             return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
//         }

//         // 3. Get request data
//         const data = await req.json();
//         if (!data?.data) {
//             return NextResponse.json({ message: "Invalid request data" }, { status: 400 });
//         }

//         // 4. Upload image if provided
//         let imageReference = null;
//         if (data.image) {
//             try {
//                 imageReference = await uploadImageToSanity(data.image);
//             } catch (imageError) {
//                 console.error("Image upload failed:", imageError);
//                 return NextResponse.json({ message: "Failed to upload image" }, { status: 500 });
//             }
//         }

//         console.log("Image Reference:", imageReference);

//         // 5. Prepare update data
//         const updateData = {
//             name: data.data.name,
//             email: data.data.email,
//             phone: data.data.phone ? Number(data.data.phone) : undefined,
//             address: data.data.address,
//             state: data.data.state,
//             city: data.data.city,
//             zipCode: data.data.zipCode ? Number(data.data.zipCode) : undefined,
//             ...(imageReference && { image: imageReference })
//         };

//         // 6. Update user profile in Sanity
//         const response = await client.patch(verifiedTokenValues._id)
//             .set(updateData)
//             .commit();

//         if (!response) {
//             throw new Error("Failed to update profile");
//         }

//         return NextResponse.json({ message: "Profile updated successfully" });

//     } catch (error) {
//         console.error("Profile update failed:", error);
//         return NextResponse.json({ message: "Failed to update profile" }, { status: 500 });
//     }
// }




import { NextResponse, type NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { createClient } from "next-sanity";

// Initialize Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  token: process.env.SANITY_TOKEN,
  apiVersion: "2024-02-02",
  useCdn: false,
});

async function uploadImageToSanity(base64Response: string) {
  try {
    const [mimeTypeData, base64Data] = base64Response.split(",");
    const mimeType = mimeTypeData.match(/data:(.*?);/)?.[1];

    if (!mimeType || !base64Data) {
      throw new Error("Invalid base64 image format");
    }

    // Convert base64 to Buffer
    const buffer = Buffer.from(base64Data, "base64");

    // Upload image to Sanity
    const asset = await client.assets.upload('image', buffer, {
      filename: `image-${Date.now()}.${mimeType.split('/')[1]}`,
      contentType: mimeType,
    });

    // Return the correct Sanity image reference format
    return {
      _type: "image",
      asset: {
        _type: "reference",
        _ref: asset._id // This will be in the correct format like "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg"
      }
    };
  } catch (error) {
    console.error("Error uploading image to Sanity:", error);
    throw error;
  }
}

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json(
        { message: "Authentication required" },
        { status: 401 }
      );
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not configured");
    }
    
    const verifiedTokenValues = jwt.verify(
      token,
      process.env.JWT_SECRET
    ) as jwt.JwtPayload;

    const data = await req.json();

    // Handle image upload if image is provided
    let imageReference = null;
    if (data.image) {
      try {
        // Make sure we're not getting an already processed image reference
        if (typeof data.image === 'string' && data.image.startsWith('data:image')) {
          imageReference = await uploadImageToSanity(data.image);
        } else {
          // If it's already a Sanity image reference, use it as is
          imageReference = data.image;
        }
      } catch (imageError) {
        console.error('Image upload failed:', imageError);
        return NextResponse.json(
          { message: "Failed to upload image" },
          { status: 500 }
        );
      }
    }

    // Prepare the update data
    const updateData = {
      name: data.data.name,
      email: data.data.email,
      phone: data.data.phone ? Number(data.data.phone) : undefined,
      address: data.data.address,
      state: data.data.state,
      city: data.data.city,
      zipCode: data.data.zipCode ? Number(data.data.zipCode) : undefined,
      ...(imageReference && { image: imageReference }) // Only include image if we have a reference
    };

    // Update the document in Sanity
    const response = await client
      .patch(verifiedTokenValues._id)
      .set(updateData)
      .commit();

    if (!response) {
      throw new Error("Failed to update profile");
    }

    return NextResponse.json({
      message: "Profile updated successfully",
      data: response
    });

  } catch (error) {
    console.error('Profile update failed:', error);
    return NextResponse.json(
      { 
        message: "Failed to update profile",
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}