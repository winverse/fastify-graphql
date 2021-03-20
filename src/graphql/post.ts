import { gql } from 'mercurius-codegen';
import { IResolvers } from '@graphql-tools/utils';

export const typeDef = gql`
  type Post {
    id: ID!
    title: String
    body: String
    thumbnail: String
    userId: Int
    user: User
  }
  extend type Query {
    post(id: ID): Post
    posts: [Post]
  }

  extend type Mutation {
    write(title: String, thumbnail: String, body: String): Post
    update(title: String, thumbanil: String, body: String): Post
    delete(id: ID): Boolean
  }
`;

export const resolvers: IResolvers = {};
