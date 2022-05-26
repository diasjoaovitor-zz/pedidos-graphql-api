import { GraphQLFloat, GraphQLID, GraphQLInputObjectType, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql"

const availabilityType = new GraphQLObjectType({
  name: 'Availability',
  fields: {
    av_id: { type: GraphQLString },
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

const availabilityInputType = new GraphQLInputObjectType({
  name: 'AvailabilityInput',
  fields: () => ({
    av_id: { type: new GraphQLNonNull (GraphQLString) },
    brand: { type: new GraphQLNonNull(GraphQLString) },
    price: { type: new GraphQLNonNull(GraphQLFloat) },
    company: { type: new GraphQLNonNull(GraphQLString) }
  })
})

export const productInputType = new GraphQLInputObjectType({
  name: 'ProductInput',
  fields: () => ({
    id: { type: GraphQLID },
    ref: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLString },
    availability: { type: new GraphQLList(availabilityInputType) }
  })
})
