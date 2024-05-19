/*
  Warnings:

  - Added the required column `diaSemana` to the `exercicios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `exercicios` ADD COLUMN `diaSemana` VARCHAR(191) NOT NULL;
