/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Mamifero" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "description" TEXT,
    "mediaFilhotes" INTEGER NOT NULL,
    "mamifero" BOOLEAN NOT NULL,

    CONSTRAINT "Mamifero_pkey" PRIMARY KEY ("id")
);
