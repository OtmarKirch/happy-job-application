'use client'

import { useActionState } from 'react';
import * as actions from '@/actions'

export default function CreateApplication() {
    const [formState, action] = useActionState(actions.testMessage, {message: ''})

    /* async function createApplication(formData: FormData) {
        
        const company = formData.get("company") as string;
        const jobTitle = formData.get("jobTitle") as string;
        const jobDescription = formData.get("jobDescription") as string;
        const mainContact = formData.get("mainContact") as string;
        const mainContactEmail = formData.get("mainContactEmail") as string;
        const applicationDate = formData.get("applicationDate") as string;
        const followupDate = formData.get("followupDate") as string;
        const applicationStatus = formData.get("applicationStatus") as string;

        const applicationProps = {
            company,
            jobTitle,
            applicationStatus
        }
    
        // actions.createApplicationEntry(applicationProps)
        // .then(()=> console.log("Successfully created application"))
        // .catch((e)=> console.log('Application could not be saved: ' + e))
        

    } */

    return (
        <div className="page-container">
            <div className="section-container">
                <h2 className="font-bold text-4xl">Create Application</h2>
                
                <form
                    action={action}
                    className="flex flex-col gap-4 md:gap-3 border-2 border-slate-500 p-3"
                >
                    <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-3">
                        <label htmlFor="company" className="text-right col-span-1">Company</label>
                        <input
                            name="company"
                            type="text"
                            className="col-span-1 col-span-1 p-2 focus:outline-none caret-slate-700 bg-slate-400 border-2 border-slate-500 hover:border-slate-700"
                        />
                    </div>
                    <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-3">
                        <label htmlFor="jobTitle" className="text-right col-span-1">Job title</label>
                        <input
                            name="jobTitle"
                            id="jobTitle"
                            type="text"
                            className="col-span-1 p-2 focus:outline-none caret-slate-700 bg-slate-400 border-2 border-slate-500 hover:border-slate-700"
                        />
                    </div>
                    <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-3">
                        <label htmlFor="jobDescription" className="text-right col-span-1">Job description</label>
                        <textarea
                            name="jobDescription"
                            id="jobDescription"
                            className="col-span-1 p-2 focus:outline-none caret-slate-700 bg-slate-400 border-2 border-slate-500 hover:border-slate-700"
                        />
                    </div>
                    <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-3">
                        <label htmlFor="mainContact" className="text-right col-span-1">Main contact</label>
                        <input
                            name="mainContact"
                            id="mainContact"
                            type="text"
                            className="col-span-1 p-2 focus:outline-none caret-slate-700 bg-slate-400 border-2 border-slate-500 hover:border-slate-700"
                        />
                    </div>
                    <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-3">
                        <label htmlFor="mainContactEmail" className="text-right col-span-1">Main contact email</label>
                        <input
                            name="mainContactEmail"
                            id="mainContactEmail"
                            type="email"
                            className="col-span-1 p-2 focus:outline-none caret-slate-700 bg-slate-400 border-2 border-slate-500 hover:border-slate-700"
                        />
                    </div>
                    <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-3">
                        <label htmlFor="applicationDate" className="text-right col-span-1">Date of application sent</label>
                        <input
                            name="applicationDate"
                            id="applicationDate"
                            type="date"
                            className="col-span-1 p-2 focus:outline-none caret-slate-700 bg-slate-400 border-2 border-slate-500 hover:border-slate-700"
                        />
                    </div>
                    <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-3">
                        <label htmlFor="followupDate" className="text-right col-span-1">Date of follow up</label>
                        <input
                            name="followupDate"
                            id="followupDate"
                            type="date"
                            className="col-span-1 p-2 focus:outline-none caret-slate-700 bg-slate-400 border-2 border-slate-500 hover:border-slate-700"
                        />
                    </div>
                    <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-3">
                        <label htmlFor="applicationStatus" className="text-right col-span-1">Status of application</label>
                        <input
                            name="applicationStatus"
                            id="applicationStatus"
                            type="text"
                            className="col-span-1 p-2 focus:outline-none caret-slate-700 bg-slate-400 border-2 border-slate-500 hover:border-slate-700"
                        />
                    </div>

                    <div>{formState.message}</div>

                    <button 
                    type="submit"
                    className="m-3 border-2 border-slate-500 p-3 bg-gradient-to-br from-slate-500 to-slate-700 hover:outline outline-4 outline-offset-4 outline-slate-800 "
                    >Create application</button>
                </form>
            </div>
        </div>
    )
}