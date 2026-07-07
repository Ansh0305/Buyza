import express, {Request, Response} from "express";
import cors from "cors";

const app = express();

app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
}))

app.get("/health", (req: Request, res: Response) =>{
    return res.status(200).json({
      status: "ok",
      uptime: process.uptime(),
      timestamp: Date.now(),
    });
})


const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
})