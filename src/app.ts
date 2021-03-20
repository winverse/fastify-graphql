import fastify from 'fastify';
import mercurius from 'mercurius';

import routes from './routes';
import schema from './graphql/schema';
export default class app {
  app = fastify({ logger: true });

  constructor() {
    this.setup();
  }

  setup() {
    this.app.register(routes, { prefix: '/api' });
    this.app.register(mercurius, {
      schema,
      graphiql: 'playground',
    });
  }

  start(PORT: string) {
    try {
      this.app.listen(PORT);
    } catch (err) {
      this.app.log.error(err);
    }
  }
}
