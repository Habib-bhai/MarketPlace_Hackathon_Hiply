import { createClient } from "next-sanity"

// Configure Sanity client
const client = createClient({
  projectId: "5yjkku7l",
  dataset: "production",
  token: "skvliusnofQj5AMook4j4FYocwDfO1DY3Zy4NTXN8w7mjusWkN54cIa3VOnyBZQ0LoQoUyq3sX22itGyUdaJYugjLtpbEwRc4DpcbUMuNgXaIWuOHc6fjN92hAFKp5UPBsGNqVgK33x1hasiOHNbZIEifRrzzYHbmHfukC1XU3eMkiOGXcRb", // Create this in Sanity Manage
  apiVersion: '2025-01-18',
  useCdn: false
})




function getRandomReviews() {
    return Math.floor(Math.random() * 301);
  }
  
  // Fetch all products and update their reviews field
  async function updateProductsWithReviews() {
    try {
      // Fetch all products
      const query = '*[_type == "products"]';
      const products = await client.fetch(query);
  
      // Loop through each product and update the reviews field
      for (const product of products) {
        const randomReviews = getRandomReviews();
        await client
          .patch(product._id)
          .set({ reviews: randomReviews })
          .commit();
        console.log(`Updated product ${product.name} with ${randomReviews} reviews.`);
      }
  
      console.log('All products have been updated with random reviews.');
    } catch (error) {
      console.error('Error updating products:', error);
    }
  }
  
  // Run the script
  updateProductsWithReviews();