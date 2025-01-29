/*
  Warnings:

  - You are about to drop the column `dateOfApplicationSent` on the `application` table. All the data in the column will be lost.
  - You are about to drop the column `dateOfFollowUp` on the `application` table. All the data in the column will be lost.
  - You are about to drop the column `statusOfApplication` on the `application` table. All the data in the column will be lost.
  - Added the required column `applicationStatus` to the `application` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_application" (
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
INSERT INTO "new_application" ("company", "id", "jobDescription", "jobTitle", "mainContact", "mainContactEmail") SELECT "company", "id", "jobDescription", "jobTitle", "mainContact", "mainContactEmail" FROM "application";
DROP TABLE "application";
ALTER TABLE "new_application" RENAME TO "application";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
