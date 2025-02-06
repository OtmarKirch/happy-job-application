'use server'

import { db } from '@/db'

interface applicationData {
    company: string,
    jobTitle: string,
    applicationStatus: string
}

export async function createApplicationEntry(data: applicationData) {

    //form data validation
    if (typeof data.company !== "string" || !/^[a-zA-Z\s]+$/.test(data.company) || data.company.length < 3){
        return { message: "Company name must be longer"}
    }

    if (typeof data.jobTitle !== "string" || !/^[a-zA-Z\s]+$/.test(data.jobTitle) || data.jobTitle.length < 3){
        return { message: "Job title must be longer"}
    }

    if (typeof data.applicationStatus !== "string" || !/^[a-zA-Z\s]+$/.test(data.applicationStatus) || data.applicationStatus.length < 3){
        return { message: "Application status must be longer"}
    }
  
    await db.application.create({
        data: {
            company: data.company,
            jobTitle: data.jobTitle,
            applicationStatus: data.applicationStatus
        }
    })
    .then(()=> {console.log("Successfully created application");})
    .catch((e)=> console.log('Application could not be saved: ' + e))

    return { message: "Successfully created application!"}
}

export async function getAllApplicationEntries(){

    try {
        const applications = await db.application.findMany();
        return applications
    } catch (e) {
        console.log("Could not find applications: " + e)
        throw e
    }  
}

export async function getApplicationById(id: number){

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
    return { message: "This is a test message!"}
}