import { GraphQLID, GraphQLNonNull, GraphQLObjectType } from "graphql"
import { create, destroy, update } from "./resolvers.js"
import { productInputType, productType } from "./types.js"

export const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    create: {
      type: productType,
      args: { 
        input: { type: new GraphQLNonNull(productInputType) }
      },
      resolve: create
    },
    update: {
      type: productType,
      args: { 
        input: { type: new GraphQLNonNull(productInputType) },
        id: { type: GraphQLID }
      },
      resolve: update
    },
    destroy: {
      type: productType,
      args: { 
        id: { type: GraphQLID }
      },
      resolve: destroy
    }
  })
})
