/*
  Warnings:

  - You are about to drop the column `gcodePath` on the `Prints` table. All the data in the column will be lost.
  - You are about to drop the column `stlPath` on the `Prints` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Prints" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "info" TEXT
);
INSERT INTO "new_Prints" ("description", "id", "info", "title") SELECT "description", "id", "info", "title" FROM "Prints";
DROP TABLE "Prints";
ALTER TABLE "new_Prints" RENAME TO "Prints";
CREATE UNIQUE INDEX "Prints_title_key" ON "Prints"("title");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
