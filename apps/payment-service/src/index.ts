import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";

const app = new Hono()

app.use("*", clerkMiddleware());

app.get('/health', (context) => {
  return context.json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: Date.now(),
  })
})

app.get("/test", (context) => {
  const { userId } = getAuth(context);

  if (!userId) {
    return context.json({
      message: "You are not logged in.",
    });
  }

  return context.json({
    message: "Payment service is auth!",
  });
});

const start = async () => {
  try {
    serve({
      fetch: app.fetch,
      port: Number(process.env.PORT) || 8002
    }, (info) => {
      console.log(`Listening on port ${info.port}`)
    })
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
start();
