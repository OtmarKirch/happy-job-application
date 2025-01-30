'use server'

import { db } from '@/db'

interface applicationProps {
    company: string,
    jobTitle: string,
    applicationStatus: string
}

export async function createApplicationEntry(props: applicationProps) {
    'use server'
    
  
    await db.application.create({
        data: {
            company: props.company,
            jobTitle: props.jobTitle,
            applicationStatus: props.applicationStatus
        }
    })
    .then(()=> console.log("Successfully created application"))
    .catch((e)=> console.log('Application could not be saved: ' + e))

}