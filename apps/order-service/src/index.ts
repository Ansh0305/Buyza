import Fastify from "fastify";
import Clerk from "@clerk/fastify";

const fastify = Fastify();  
fastify.register(Clerk.clerkPlugin);

fastify.get("/health", (request, reply) => {
  return reply.status(200).send({
    status: "ok",
    uptime: process.uptime(),
    timestamp: Date.now(),
  });
});

fastify.get("/test", (request, reply) => {
  const { userId } = Clerk.getAuth(request);

  if (!userId) {
    return reply.status(401).send({ message: "You are not logged in." });
  }
  reply.send({ message: "Order Service auth!" });

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