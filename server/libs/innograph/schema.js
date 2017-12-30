// schema.js //
import { makeExecutableSchema } from 'graphql-tools';
import bit from 'bit-js';

const Profile = `
type test {
	id: String
}
`;

//const Profile = bit('profile/schema');
//const Resolver = bit('profile/resolver');

const Resolver = {

};



// const Post = bit('post/schema'); -- modify the code
const Post = `
  type Post {
    title: String
    body: String
    authorId: Int    
    picAddr: String
    category: String
    rating: Int
    source: String
    createdAt: String    
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
