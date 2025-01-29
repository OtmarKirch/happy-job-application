-- CreateTable
CREATE TABLE "application" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "company" TEXT NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "jobDescription" TEXT,
    "mainContact" TEXT,
    "mainContactEmail" TEXT,
    "dateOfApplicationSent" DATETIME,
    "dateOfFollowUp" DATETIME,
    "statusOfApplication" TEXT NOT NULL
);
