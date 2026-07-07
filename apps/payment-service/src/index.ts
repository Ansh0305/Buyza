import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/health', (res) => {
  return res.json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: Date.now(),
  })
})

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
