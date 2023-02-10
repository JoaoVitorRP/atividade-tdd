import prisma from "config/database";
import { StudentPostRequest } from "protocols";

function findStudents() {
  return prisma.student.findMany();
}

function findFirstStudent() {
  return prisma.student.findFirst();
}

function findStudentByName(name: string) {
  return prisma.student.findUnique({
    where: { name },
  });
}

function createStudent(studentData: StudentPostRequest) {
  return prisma.student.create({
    data: studentData,
  });
}

export const studentsRepository = {
  findStudents,
  findFirstStudent,
  findStudentByName,
  createStudent,
};
