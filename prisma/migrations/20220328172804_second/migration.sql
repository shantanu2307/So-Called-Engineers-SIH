/*
  Warnings:

  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Category";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Product";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "fatherName" TEXT NOT NULL,
    "aadharNumber" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "dateOfBirth" TEXT NOT NULL,
    "pincode" INTEGER NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "gender" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_aadharNumber_key" ON "User"("aadharNumber");
