import { getFirstStudent, getStudents } from "controllers/students.controller";
import { Router } from "express";

const studentsRouter = Router();

studentsRouter
    .get("/", getStudents)
    .get("/pick", getFirstStudent)
    

export default studentsRouter;
