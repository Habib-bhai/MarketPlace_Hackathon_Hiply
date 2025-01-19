// Migration script to add tags field and populate random tags
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: "5yjkku7l",
  dataset: 'production',
  apiVersion: '2024-01-19', 
  token:"skvliusnofQj5AMook4j4FYocwDfO1DY3Zy4NTXN8w7mjusWkN54cIa3VOnyBZQ0LoQoUyq3sX22itGyUdaJYugjLtpbEwRc4DpcbUMuNgXaIWuOHc6fjN92hAFKp5UPBsGNqVgK33x1hasiOHNbZIEifRrzzYHbmHfukC1XU3eMkiOGXcRb", // needs write access
  useCdn: false
})

// Predefined tags for products
const productTags = [
  'new arrival',
  'popular',
  'best seller',
  'men',
  'women',
  'kids',
  'trending',
  'limited edition',
  'sale',
  'seasonal',
  'eco-friendly',
  'premium',
  'casual',
  'formal',
  'sports',
  'designer',
  "old"
]

// Function to get random tags (1-3 tags per product)
function getRandomTags() {
  const numberOfTags = Math.floor(Math.random() * 3) + 1 // 1 to 3 tags
  const shuffled = [...productTags].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, numberOfTags)
}

// Main migration function
async function migrateTags() {
  try {
    // 1. Fetch all products
    const products = await client.fetch('*[_type == "products"]')
    
    console.log(`Found ${products.length} products to update`)

    // 2. Update each product with random tags
    for (const product of products) {
      const randomTags = getRandomTags()
      
      await client
        .patch(product._id)
        .set({ tags: randomTags })
        .commit()
        
      console.log(`Updated product ${product.name} with tags:`, randomTags)
    }

    console.log('Migration completed successfully')
  } catch (error) {
    console.error('Migration failed:', error)
  }
}

// Run the migration
migrateTags()