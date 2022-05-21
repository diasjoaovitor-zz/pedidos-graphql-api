import { GraphQLList, GraphQLObjectType } from "graphql"
import { getProducts } from "./resolvers.js"
import { productType } from "./types.js"

export const getProductsQuery = new GraphQLObjectType({
  name: 'Query',
  fields: {
    products: {
      type: new GraphQLList(productType),
      resolve: getProducts
    }
  }
})
