import { createClient } from '@sanity/client';

// Statistics tracker
const stats = {
  total: 0,
  successful: 0,
  failed: 0,
  failedProducts: [],
  imageUploadFailed: 0,
  documentUploadFailed: 0,
};

// Validation functions
function validateProductData(product) {
  const requiredFields = ['name', 'description', 'price', 'imageUrl', 'category'];
  const missingFields = requiredFields.filter(field => !product[field]);
  
  if (missingFields.length > 0) {
    throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
  }

  if (typeof product.price !== 'number') {
    throw new Error('Price must be a number');
  }

  return true;
}
const client = createClient({
  projectId: "5yjkku7l",
  dataset: "production",
  useCdn: false,
  apiVersion: '2025-01-18',
  token:"skvliusnofQj5AMook4j4FYocwDfO1DY3Zy4NTXN8w7mjusWkN54cIa3VOnyBZQ0LoQoUyq3sX22itGyUdaJYugjLtpbEwRc4DpcbUMuNgXaIWuOHc6fjN92hAFKp5UPBsGNqVgK33x1hasiOHNbZIEifRrzzYHbmHfukC1XU3eMkiOGXcRb",
});
async function validateSanityConnection() {
  try {
    await client.fetch('*[_type == "products"][0]');
    return true;
  } catch (error) {
    console.error('Sanity connection validation failed:', {
      error: error.message,
      details: error.details || {},
      statusCode: error.statusCode
    });
    return false;
  }
}

async function uploadImageToSanity(imageUrl, productName) {
  try {
    console.log(`📸 Uploading image for product "${productName}": ${imageUrl}`);

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.status} ${response.statusText}`);
    }

    const contentType = response.headers.get('content-type');
    if (!contentType.startsWith('image/')) {
      throw new Error(`Invalid content type: ${contentType}`);
    }

    const buffer = await response.arrayBuffer();
    const bufferImage = Buffer.from(buffer);

    const asset = await client.assets.upload('image', bufferImage, {
      filename: imageUrl.split('/').pop(),
      contentType: contentType,
    });

    console.log(`✅ Image uploaded successfully for "${productName}": ${asset._id}`);
    return asset._id;
  } catch (error) {
    stats.imageUploadFailed++;
    console.error('❌ Failed to upload image:', {
      productName,
      imageUrl,
      error: error.message,
      stack: error.stack
    });
    return null;
  }
}

async function uploadProduct(product) {
  try {
    stats.total++;
    console.log(`\n📦 Processing product ${stats.total}/${stats.total}: "${product.name}"`);

    // Validate product data
    validateProductData(product);

    const imageId = await uploadImageToSanity(product.imageUrl, product.name);
    if (!imageId) {
      throw new Error('Image upload failed');
    }

    const document = {
      _type: 'products',
      name: product.name,
      description: product.description,
      price: product.price,
      image: {
        _type: 'image',
        asset: {
          _ref: imageId,
        },
      },
      category: product.category,
      discountPercent: product.discountPercent || 0,
      new: Boolean(product.isNew),
      colors: Array.isArray(product.colors) ? product.colors : [],
      sizes: Array.isArray(product.sizes) ? product.sizes : [],
      _createdAt: new Date().toISOString()
    };

    const createdProduct = await client.create(document);
    console.log(`✅ Product "${product.name}" uploaded successfully`);
    stats.successful++;
    
    return createdProduct;

  } catch (error) {
    stats.failed++;
    stats.failedProducts.push({
      name: product.name,
      error: error.message
    });
    
    if (error.statusCode === 409) {
      console.error(`⚠️ Duplicate product detected: "${product.name}"`);
    } else {
      console.error('❌ Error uploading product:', {
        productName: product.name,
        error: error.message,
        statusCode: error.statusCode || 'N/A',
        details: error.details || {}
      });
    }
    
    return null;
  }
}

async function importProducts() {
  try {
    console.log('🔄 Validating Sanity connection...');
    if (!(await validateSanityConnection())) {
      throw new Error('Failed to validate Sanity connection');
    }
    console.log('✅ Sanity connection validated');

    console.log('🔄 Fetching products from API...');
    const response = await fetch('https://template1-neon-nu.vercel.app/api/products', {
      timeout: 30000 // 30 second timeout
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const products = await response.json();
    
    if (!Array.isArray(products)) {
      throw new Error('API did not return an array of products');
    }

    console.log(`📋 Found ${products.length} products to import\n`);

    for (const product of products) {
      await uploadProduct(product);
      
      // Add a small delay between uploads to prevent rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

  } catch (error) {
    console.error('❌ Import process failed:', error);
    throw error;
  } finally {
    // Print final statistics
    console.log('\n📊 Import Statistics:');
    console.log('====================');
    console.log(`Total products processed: ${stats.total}`);
    console.log(`Successfully uploaded: ${stats.successful}`);
    console.log(`Failed uploads: ${stats.failed}`);
    console.log(`Failed image uploads: ${stats.imageUploadFailed}`);
    
    if (stats.failedProducts.length > 0) {
      console.log('\n❌ Failed Products:');
      console.log('=================');
      stats.failedProducts.forEach(({name, error}) => {
        console.log(`- "${name}": ${error}`);
      });
    }
  }
}

// Execute with proper error handling
console.log('🚀 Starting product import process...\n');
importProducts()
  .then(() => {
    console.log('\n✅ Import process completed');
    process.exit(0);
  })
  .catch(error => {
    console.error('\n❌ Import process failed:', error);
    process.exit(1);
  });