import { FastifyInstance } from "fastify";

export const orderRoute = async (fastify:FastifyInstance) => {
    fastify.get("/user-order",
         {preHandler: shouldBeUser},
         async(request, reply) => {
                const order = await Order
    })
}