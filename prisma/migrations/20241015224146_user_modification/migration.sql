/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resetPassword` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resetPasswordToken` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "resetPassword" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "resetPasswordToken" TEXT NOT NULL,
ALTER COLUMN "followers" SET DEFAULT 0,
ALTER COLUMN "following" SET DEFAULT 0,
ALTER COLUMN "dealingRate" SET DEFAULT 5,
ALTER COLUMN "ratingsQuantity" SET DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
