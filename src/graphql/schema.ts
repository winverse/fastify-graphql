/* eslint-disable @typescript-eslint/no-var-requires */
import * as fs from 'fs';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { IResolvers } from '@graphql-tools/utils';
import { makeExecutableSchema } from '@graphql-tools/schema';

const types: string[] = [];
const resolvers: IResolvers[] = [];

async function moduleResolver(file: string) {
  const { typeDef: typeDefinition, resolvers: resolver } = require(`./${file}`);
  types.push(typeDefinition);
  resolvers.push(resolver);
}

fs.readdirSync(__dirname)
  .filter(filename => filename !== 'schema.ts')
  .map(moduleResolver);

const schema = makeExecutableSchema({
  typeDefs: mergeTypeDefs(types),
  resolvers: mergeResolvers(resolvers),
});

export default schema;
