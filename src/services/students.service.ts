import { notFoundError } from "errors/notFoundError";
import { studentsRepository } from "repositories/students.repository";

async function getStudents() {
  const students = await studentsRepository.findStudents();

  if (students.length === 0) throw notFoundError();

  return students;
}

async function getFirstStudent() {
  const student = await studentsRepository.findFirstStudent();

  if (!student) throw notFoundError();

  return student;
}

export const studentsService = {
  getStudents,
  getFirstStudent,
};
