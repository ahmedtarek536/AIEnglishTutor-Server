/*
  Warnings:

  - You are about to drop the column `hobbies` on the `User` table. All the data in the column will be lost.
  - Added the required column `age` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthdate` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `region` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "hobbies",
ADD COLUMN     "age" INTEGER NOT NULL,
ADD COLUMN     "bio" TEXT,
ADD COLUMN     "birthdate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "gender" TEXT NOT NULL,
ADD COLUMN     "isAdmin" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "profileImage" TEXT,
ADD COLUMN     "region" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
