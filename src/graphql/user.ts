import { gql } from 'mercurius-codegen';
import { IResolvers } from '@graphql-tools/utils';

export const typeDef = gql`
  type User {
    id: ID!
    username: String
    email: String
    password: String
  }
  extend type Mutation {
    login: Boolean
    register: User
    logout: User
  }
`;

export const resolvers: IResolvers = {};
