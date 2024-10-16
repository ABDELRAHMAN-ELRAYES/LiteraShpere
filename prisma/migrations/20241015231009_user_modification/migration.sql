/*
  Warnings:

  - You are about to drop the column `confirmPassword` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `resetPassword` on the `User` table. All the data in the column will be lost.
  - Added the required column `resetPasswordUpdatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "confirmPassword",
DROP COLUMN "resetPassword",
ADD COLUMN     "resetPasswordUpdatedAt" TIMESTAMP(3) NOT NULL;
