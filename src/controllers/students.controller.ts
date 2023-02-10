import { Request, Response } from "express";
import httpStatus from "http-status";
import { StudentPostRequest } from "protocols";
import { studentsService } from "services/students.service";

export async function getStudents(req: Request, res: Response) {
  try {
    const students = await studentsService.getStudents();
    return res.status(httpStatus.OK).send(students);
  } catch (err) {
    return res.status(httpStatus.NOT_FOUND).send(err.message);
  }
}

export async function getFirstStudent(req: Request, res: Response) {
  try {
    const student = await studentsService.getFirstStudent();
    return res.status(httpStatus.OK).send(student);
  } catch (err) {
    return res.status(httpStatus.NOT_FOUND).send(err.message);
  }
}

export async function postStudent(req: Request, res: Response) {
  const studentData = req.body as StudentPostRequest;

  try {
    const createdStudent = await studentsService.postStudent(studentData);
    return res.status(httpStatus.CREATED).send(createdStudent);
  } catch (err) {
    return res.status(httpStatus.CONFLICT).send(err.message);
  }
}
