import { db } from "../firebase/index.js"

export const getProducts = async () => {
   const { docs } = await db.collection('products').get()
   const products = docs.map(doc => ({ id: doc.id, ...doc.data() }))
   return products
}
