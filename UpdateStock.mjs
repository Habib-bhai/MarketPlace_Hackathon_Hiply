import { createClient } from "next-sanity"

// Configure Sanity client
const client = createClient({
  projectId: "5yjkku7l",
  dataset: "production",
  token: "skvliusnofQj5AMook4j4FYocwDfO1DY3Zy4NTXN8w7mjusWkN54cIa3VOnyBZQ0LoQoUyq3sX22itGyUdaJYugjLtpbEwRc4DpcbUMuNgXaIWuOHc6fjN92hAFKp5UPBsGNqVgK33x1hasiOHNbZIEifRrzzYHbmHfukC1XU3eMkiOGXcRb", // Create this in Sanity Manage
  apiVersion: '2025-01-18',
  useCdn: false
})

// Generate random stock between min and max (inclusive)
function getRandomStock(min = 10, max = 1000) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

async function updateProductStocks() {
  try {
    // Fetch all product documents
    const products = await client.fetch('*[_type == "products"]')

    if (!products.length) {
      console.log('No products found')
      return
    }

    // Create patch operations
    const patches = products.map(product => ({
      id: product._id,
      patch: {
        set: { stock: getRandomStock() },
        unset: []
      }
    }))

    // Process in batches to avoid rate limits
    const BATCH_SIZE = 100
    for (let i = 0; i < patches.length; i += BATCH_SIZE) {
      const batch = patches.slice(i, i + BATCH_SIZE)
      const transaction = client.transaction()
      
      batch.forEach(({ id, patch }) => {
        transaction.patch(id, patch)
      })

      await transaction.commit()
      console.log(`Updated batch ${i / BATCH_SIZE + 1} of ${Math.ceil(patches.length / BATCH_SIZE)}`)
    }

    console.log('Successfully updated all product stocks!')
  } catch (error) {
    console.error('Error updating stocks:', error)
  }
}

updateProductStocks()