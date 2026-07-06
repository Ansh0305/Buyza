import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
}))

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
})