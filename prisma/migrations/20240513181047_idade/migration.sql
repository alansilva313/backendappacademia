/*
  Warnings:

  - Added the required column `nascimento` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `nascimento` VARCHAR(191) NOT NULL;
