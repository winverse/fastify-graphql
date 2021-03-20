import { gql } from 'mercurius-codegen';

export const typeDef = gql`
  type Post {
    id: ID!
    title: String
    body: String
    thumbnail: String
    userId: Number
    user: User
  }
  extend type Query {
    post(id: Number): Post
    posts: [Post]
  }
  extend type Mutation {
    write(
      title: String
      thumbnail: String
      body: String
    )
    update(
      title: String
      thumbanil: String
      body: String
    )
    delete(id: ID): Boolean
  }
`;
