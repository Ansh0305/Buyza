import Fastify from "fastify";

const fastify = Fastify();  

const start = async () => {
    const port = Number(process.env.PORT) || 8001;
    try {
      await fastify.listen({ port});
      console.log(`Listening on port ${port}!`);
    } catch (err) {
      fastify.log.error(err);
      process.exit(1);
    }
}
start();