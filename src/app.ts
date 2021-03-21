import fastify, { FastifyRequest } from 'fastify';
import mercurius from 'mercurius';
import { applyMiddleware } from 'graphql-middleware';

import routes from './routes';
import { schema, permissions } from './graphql/schema';

export default class app {
  app = fastify({ logger: true });

  constructor() {
    this.setup();
    this.mercurius();
  }

  setup() {
    this.app.register(routes, { prefix: '/api' });
  }

  mercurius() {
    const schemaMiddleware = applyMiddleware(schema, permissions);
    this.app.register(mercurius, {
      schema: schemaMiddleware,
      graphiql: 'playground',
      context: (request: FastifyRequest) => {
        return {
          ...request,
        };
      },
    });
  }

  start(PORT: string) {
    try {
      this.app.listen(PORT, (err, address) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(`server is running, Address: ${address}`);
      });
    } catch (err) {
      this.app.log.error(err);
    }
  }
}
