import express, {Request, Response} from "express";
import cors from "cors";
import { clerkMiddleware, getAuth } from "@clerk/express";

const app = express();

app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
}))
app.use(clerkMiddleware());

app.get("/health", (req: Request, res: Response) =>{
    return res.status(200).json({
      status: "ok",
      uptime: process.uptime(),
      timestamp: Date.now(),
    });
})

app.get("/test", (req:Request, res:Response) => {
    const auth = getAuth(req);
    const userId = auth.userId;

    if(!userId){
        return res.status(401).json({message: "You are not logged in."})
    }
    res.json({message: "Product Servive auth!"})
})


const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
})