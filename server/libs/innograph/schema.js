// schema.js //
import { makeExecutableSchema } from 'graphql-tools';
import bit from 'bit-js';

const Profile = bit('profile/schema');
const Resolver = bit('profile/resolver');


// const Post = bit('post/schema'); -- modify the code
const Post = `
  type Post {
    title: String
    body: String
    authorId: Number    
    picAddr: String
    category: String
    rating: Number
    source: String
    createdAt: Date    
  }
`;

module.exports = Post;
//export default () => [Post, Profile];


const RootQuery = `
  type Query {
    posts: [Post]
  }
`;

const SchemaDefinition = `
  schema {
    query: Query
  }
`;

export default makeExecutableSchema({
  typeDefs: [SchemaDefinition, RootQuery, Post, Profile],
  resolvers: Resolver,
  allowUndefinedInResolve: false
})
