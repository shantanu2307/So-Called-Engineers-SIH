import fastify from 'fastify';
import mercurius from 'mercurius';
const Port = process.env.PORT || 3000;
const app = fastify({ logger: true });
import schema from './graphql/schema';
import resolvers from './graphql/resolvers';

app.register(mercurius, {
  schema,
  resolvers,
  graphiql: true
});

const start = async () => {
  try {
    await app.listen(Port);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
start();