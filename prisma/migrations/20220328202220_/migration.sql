/*
  Warnings:

  - You are about to drop the column `userId` on the `Scheme` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "UserSchema" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "schemeId" INTEGER NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Scheme" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
INSERT INTO "new_Scheme" ("id", "name") SELECT "id", "name" FROM "Scheme";
DROP TABLE "Scheme";
ALTER TABLE "new_Scheme" RENAME TO "Scheme";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
