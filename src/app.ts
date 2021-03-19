import fastify from 'fastify';
import mercurius from 'mercurius';

import routes from './routes';
import schema from './graphql/schema';

const app = fastify({ logger: true });

app.register(routes, { prefix: '/api' });
app.register(mercurius, {
  schema,
  graphiql: 'playground',
});

export default app;
