'use server'

import { db } from '@/db'

interface applicationData {
    company: string,
    jobTitle: string,
    applicationStatus: string
}

export async function createApplicationEntry(data: applicationData) {
    'use server'
  
    await db.application.create({
        data: {
            company: data.company,
            jobTitle: data.jobTitle,
            applicationStatus: data.applicationStatus
        }
    })
    .then(()=> console.log("Successfully created application"))
    .catch((e)=> console.log('Application could not be saved: ' + e))

}

export async function getAllApplicationEntries(){
    'use server'

    try {
        const applications = await db.application.findMany();
        return applications
    } catch (e) {
        console.log("Could not find applications: " + e)
        throw e
    }  
}

export async function getApplicationById(id: number){
    'use server'

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