import { gql } from 'mercurius-codegen';
import { IResolvers, ITypeDefinitions } from '@graphql-tools/utils';

export const typeDef: ITypeDefinitions = gql`
  type Query {
    version: String
  }
  type Mutation {
    empty: String
  }
`;

export const resolvers: IResolvers = {
  Query: {
    version: () => '1.0',
  },
  Mutation: {},
};

export default { typeDef, resolvers };
