import { FastifyPluginCallback } from 'fastify';
import { format } from 'date-fns';

const routes: FastifyPluginCallback = (fastify, options, done) => {
  fastify.get('/ping', async () => {
    const now = new Date();
    const formatted = format(now, 'yyyy-MM-dd HH:mm');
    return { now: formatted };
  });
  done();
};

export default routes;
