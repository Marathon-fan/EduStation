import gql from 'graphql-tag';

export const GetPostDetailQuery= gql`
     query GetPostDetailQuery($id: ID!) {
        post(id: $id) {
            id
            title
            content
            createdAt
            authorId
            source
            rating
            category
            picAddr        
        }
    }
`;

export const GetPostsQuery = gql`
  query Posts {
    posts {
        id
        title
        content        
        createdAt
        authorId
        source
        rating
        category
        picAddr
    }
  }
`;



