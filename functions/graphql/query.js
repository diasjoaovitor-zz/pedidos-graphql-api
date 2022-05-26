import { GraphQLList, GraphQLObjectType, GraphQLString } from "graphql"
import { read } from "./resolvers.js"
import { productType } from "./types.js"

export const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    products: {
      type: new GraphQLList(productType),
      args: { ref: { type: GraphQLString } },
      resolve: read
    }
  }
})
