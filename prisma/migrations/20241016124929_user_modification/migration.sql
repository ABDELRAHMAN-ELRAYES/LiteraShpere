/*
  Warnings:

  - You are about to drop the column `dealingRate` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `followers` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `following` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `ratingsQuantity` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `readBooks` on the `User` table. All the data in the column will be lost.
  - Added the required column `birthDate` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "dealingRate",
DROP COLUMN "followers",
DROP COLUMN "following",
DROP COLUMN "ratingsQuantity",
DROP COLUMN "readBooks",
ADD COLUMN     "birthDate" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "resetPasswordToken" SET DEFAULT '';
