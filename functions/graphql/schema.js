import { GraphQLSchema } from "graphql"
import { getProductsQuery } from "./queries.js"

export const schema = new GraphQLSchema({
  query: getProductsQuery
})
