import prisma from "config/database";

function findStudents() {
  return prisma.student.findMany();
}

function findFirstStudent() {
  return prisma.student.findFirst();
}

export const studentsRepository = {
  findStudents,
  findFirstStudent,
};
