/*
  Warnings:

  - You are about to drop the column `email` on the `Merchant` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Merchant` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Merchant` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Merchant` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Merchant" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "balance" TEXT,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Merchant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Merchant" ("balance", "id", "userId") SELECT "balance", "id", "userId" FROM "Merchant";
DROP TABLE "Merchant";
ALTER TABLE "new_Merchant" RENAME TO "Merchant";
CREATE UNIQUE INDEX "Merchant_userId_key" ON "Merchant"("userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
