import { getFirstStudent, getStudents, postStudent } from "controllers/students.controller";
import { Router } from "express";
import { validateBody } from "middlewares/bodyValidation.middleware";
import { studentSchema } from "schemas/student.schema";

const studentsRouter = Router();

studentsRouter
    .get("/", getStudents)
    .get("/pick", getFirstStudent)
    .post("/", validateBody(studentSchema), postStudent);

export default studentsRouter;
