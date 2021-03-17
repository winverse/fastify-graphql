import fastify from 'fastify';

import routes from './routes';

export default class App {
  app = fastify({ logger: true });

  constructor() {
    this.setup();
  }

  setup() {
    this.app.register(routes, { prefix: '/api' });
  }

  listen(PORT: number) {
    try {
      this.app.listen(PORT);
    } catch (err) {
      this.app.log.error(err);
    }
  }
}
