import { conflictError, notFoundError } from "errors";
import { StudentPostRequest } from "protocols";
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

async function postStudent(studentData: StudentPostRequest) {
  const repeatedStudent = await studentsRepository.findStudentByName(studentData.name);

  if (repeatedStudent) throw conflictError();

  const createdStudent = await studentsRepository.createStudent(studentData);

  return createdStudent;
}

export const studentsService = {
  getStudents,
  getFirstStudent,
  postStudent,
};
