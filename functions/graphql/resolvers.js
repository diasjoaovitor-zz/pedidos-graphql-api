import { db } from "../firebase/index.js"

export const create = async (_, { input }) => {
   await db.collection("products").add(input)
}

export const read = async (_, { ref }) => {
   const { docs } = await db.collection('products').where('ref', '==', ref).get()
   const products = docs.map(doc => ({ id: doc.id, ...doc.data() }))
   return products
}

export const update = async (_, { input, id }) => {
   await db.collection("products").doc(id).update(input)
 }
 
 export const destroy = async (_, { id }) => {
   await db.collection("products").doc(id).delete()
 }
 