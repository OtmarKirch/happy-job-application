/*
  Warnings:

  - You are about to drop the `application` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "application";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Application" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "company" TEXT NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "jobDescription" TEXT,
    "mainContact" TEXT,
    "mainContactEmail" TEXT,
    "applicationDate" DATETIME,
    "followupDate" DATETIME,
    "applicationStatus" TEXT NOT NULL
);
