-- CreateTable
CREATE TABLE "Prints" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "gcodePath" TEXT NOT NULL,
    "stlPath" TEXT NOT NULL,
    "info" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Prints_title_key" ON "Prints"("title");
