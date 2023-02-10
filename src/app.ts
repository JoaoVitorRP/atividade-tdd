import express from "express";
import "express-async-errors";
import studentsRouter from "routes/students.router";
import cors from "cors";

const app = express();
app
    .use(cors())
    .use(express.json())
    .use("/students", studentsRouter)
    
export default app;
