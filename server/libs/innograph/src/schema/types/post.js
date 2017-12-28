import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLInt,
  GraphQLFloat
} from 'graphql';

var GraphQLDate = require('graphql-date')


/**
 * GraphQL type definition for post
 */
export default new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    title: {
      type: new GraphQLNonNull(GraphQLString)
    },
    content: {
      type: GraphQLString
    },
    authorId: {
      type: GraphQLInt
    },
    picAddr: {
      type: GraphQLString
    },
    category: {
      type: GraphQLString
    },
    rating: {
      type: GraphQLFloat
    },
    source: {
      type: GraphQLString
    },
    createdAt: {
      type: GraphQLDate
    }
  })
});

