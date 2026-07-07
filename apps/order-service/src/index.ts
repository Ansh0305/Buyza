import Fastify from "fastify";

const fastify = Fastify();  

fastify.get("/health", (request, reply) => {
  return reply.status(200).send({
    status: "ok",
    uptime: process.uptime(),
    timestamp: Date.now(),
  });
});

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