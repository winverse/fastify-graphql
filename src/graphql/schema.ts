/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import * as fs from 'fs';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { IResolvers } from '@graphql-tools/utils';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { merge } from 'lodash';
import { shield } from 'graphql-shield';

const types: string[] = [];
const resolvers: IResolvers[] = [];
const rules: any[] = [];

async function moduleResolver(file: string) {
  const {
    typeDef: typeDefinition,
    resolvers: resolver,
    permission,
  } = require(`./${file}`);
  types.push(typeDefinition);
  resolvers.push(resolver);
  rules.push(permission);
}

fs.readdirSync(__dirname)
  .filter(filename => filename !== 'schema.ts')
  .map(moduleResolver);

export const schema = makeExecutableSchema({
  typeDefs: mergeTypeDefs(types),
  resolvers: mergeResolvers(resolvers),
});

export const permissions = shield(
  rules.filter(Boolean).reduce((acc, cur) => merge(acc, cur), {}),
);
