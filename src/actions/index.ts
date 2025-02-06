'use server'

import { db } from '@/db'

export async function createApplicationEntry(formState: {message: string}, data: FormData) {

    const company = data.get("company") as string | null;
    const jobTitle = data.get("jobTitle") as string | null;
    const jobDescription = data.get("jobDescription") as string | null;
    const mainContact = data.get("mainContact") as string | null;
    const mainContactEmail = data.get("mainContactEmail") as string | null;
    const applicationDate = data.get("applicationDate") as string | null;
    const followupDate = data.get("followupDate") as string | null;
    const applicationStatus = data.get("applicationStatus") as string | null;

    let message = "";

    // Form data validation
    if (typeof company !== "string" || company.length < 3) {
        message += "Company name must be longer\n";
    }
    if (typeof jobTitle !== "string" || jobTitle.length < 3) {
        message += "Job title must be longer\n";
    }
    if (typeof jobDescription !== "string" || !/^$|^.{10,}|.{0}$/.test(jobDescription)) {
        message += "Job description must be longer\n";
    }
    if (typeof mainContact !== "string" || !/^$|^.{5,}|.{0}$/.test(mainContact)) {
        message += "Main contact name must be longer\n";
    }
    if (typeof mainContactEmail !== "string" || !/^$|^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(mainContactEmail)) {
        message += "Must be a correct email address\n";
    }
    if (typeof applicationDate !== "string" || !/^$|^\d{4}-\d{2}-\d{2}$/.test(applicationDate)) {
        message += "Application date must be a correct date\n";
    }
    if (typeof followupDate !== "string" || !/^$|^\d{4}-\d{2}-\d{2}$/.test(followupDate)) {
        message += "Followup date must be a correct date\n";
    }
    if (typeof applicationStatus !== "string" || !/^.{5,}/.test(applicationStatus)) {
        message += "Application status must be a correct\n";
    }

    if (message) {
        return { message: message };
    }

    try {
        await db.application.create({
            data: {
                company: company,
                jobTitle: jobTitle,
                applicationStatus: applicationStatus,
                jobDescription: jobDescription,
                mainContact: mainContact,
                mainContactEmail: mainContactEmail,
                applicationDate: applicationDate ? new Date(applicationDate) : null,
                followupDate: followupDate ? new Date(followupDate) : null,
            }
        });
        message = "Successfully created application";
    } catch (e) {
        console.log('Application could not be saved: ' + e);
        message = "Application could not be saved";
    }

    return { message };
}

export async function getAllApplicationEntries() {

    try {
        const applications = await db.application.findMany();
        return applications
    } catch (e) {
        console.log("Could not find applications: " + e)
        throw e
    }
}

export async function getApplicationById(id: number) {

    try {
        const application = await db.application.findFirst({
            where: {
                id: id
            }
        })
        return application
    } catch (e) {
        console.log("Could not find entry")
        throw e
    }
}

export async function getAllApplicationIds() {
    'use server'

    try {
        const applicationIds = await db.application.findMany({
            select: {
                id: true
            }
        });
        return applicationIds.map(app => app.id);
    } catch (e) {
        console.log("Could not find application IDs: " + e);
        throw e;
    }
}

export async function testMessage() {
    return "This is a test message!" 
}

export async function testMessageString(str: string) {
    return "This string was sent: " + str 
}