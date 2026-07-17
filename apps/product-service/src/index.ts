import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { clerkMiddleware, getAuth } from "@clerk/express";
import { shouldBeUser } from "./middleware/authMiddleware.js";
import productRouter from "./routes/product.route.js";
import categoryRouter from "./routes/category.route.js";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  }),
);

app.use(express.json);
app.use(clerkMiddleware());

app.get("/health", (req: Request, res: Response) => {
  return res.status(200).json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: Date.now(),
  });
});

app.get("/test", shouldBeUser, (req: Request, res: Response) => {
  res.json({
    message: "Product Servive auth!",
    userId: req.userId,
  });
});

app.use("/products", productRouter);
app.use("/categories", categoryRouter);

app.use(
  async (err: any, req: Request, res: Response, next: NextFunction) => {
    console.log(err);
    return res.status(err.status || 500).json({message: err.message || "Internal Server Error!"})
  },
);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
