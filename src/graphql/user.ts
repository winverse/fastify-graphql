import { gql } from 'mercurius-codegen';
import { IResolvers } from '@graphql-tools/utils';
import { not } from 'graphql-shield';
import { isAuthenticated } from '../lib/rules';

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

export const permission = {
  Mutation: {
    login: not(isAuthenticated),
    register: not(isAuthenticated),
    logout: isAuthenticated,
  },
};

export const resolvers: IResolvers = {
  Mutation: {
    login: () => {
      return true;
    },
    register: () => {
      return true;
    },
    logout: () => {
      return true;
    },
  },
};
