import { GraphQLFloat, GraphQLID, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql"

const availabilityType = new GraphQLObjectType({
  name: 'Availability',
  fields: {
    brand: { type: GraphQLString },
    price: { type: GraphQLFloat },
    company: { type: GraphQLString }
  }
})

export const productType = new GraphQLObjectType({
  name: 'Product',
  fields: {
    id: { type: GraphQLID },
    ref: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    availability: { type: new GraphQLList(availabilityType) }
  }
})
