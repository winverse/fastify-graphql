import { IRule, rule } from 'graphql-shield';
import { RuleNot } from 'graphql-shield/dist/rules';

interface IPermissionObject {
  [key: string]: IRule | RuleNot;
}

export interface IPermission {
  Query?: IPermissionObject;
  Mutation?: IPermissionObject;
}

export const isAuthenticated = rule({
  cache: 'contextual',
})(async (parent, args, ctx) => {
  return ctx.user !== null;
});
