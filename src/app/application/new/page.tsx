'use client'

import * as actions from '@/actions'

export default function CreateApplication() {

    async function createApplication(formData: FormData) {
        
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
    

        actions.createApplicationEntry(applicationProps)
        .then(()=> console.log("Successfully created application"))
        .catch((e)=> console.log('Application could not be saved: ' + e))
        

    }

    return (
        <div className="page-container">
            <div className="section-container">
                <h2 className="font-bold text-xl">Create Application</h2>
                
                <form
                    action={createApplication}
                    className="flex flex-col gap-4 md:gap-3"
                >
                    <div className="flex flex-col md:flex-row md:items-center gap-3">
                        <label htmlFor="company">Company</label>
                        <input
                            name="company"
                            type="text"
                            className="p-2 focus:outline-none caret-slate-800 bg-slate-300 border-2 border-slate-500 hover:border-slate-800"
                        />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-3">
                        <label htmlFor="jobTitle">Job title</label>
                        <input
                            name="jobTitle"
                            id="jobTitle"
                            type="text"
                            className="p-2 focus:outline-none caret-slate-800 bg-slate-300 border-2 border-slate-500 hover:border-slate-800"
                        />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-3">
                        <label htmlFor="jobDescription">Job description</label>
                        <textarea
                            name="jobDescription"
                            id="jobDescription"
                            className="p-2 focus:outline-none caret-slate-800 bg-slate-300 border-2 border-slate-500 hover:border-slate-800"
                        />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-3">
                        <label htmlFor="mainContact">Main contact</label>
                        <input
                            name="mainContact"
                            id="mainContact"
                            type="text"
                            className="p-2 focus:outline-none caret-slate-800 bg-slate-300 border-2 border-slate-500 hover:border-slate-800"
                        />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-3">
                        <label htmlFor="mainContactEmail">Main contact email</label>
                        <input
                            name="mainContactEmail"
                            id="mainContactEmail"
                            type="email"
                            className="p-2 focus:outline-none caret-slate-800 bg-slate-300 border-2 border-slate-500 hover:border-slate-800"
                        />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-3">
                        <label htmlFor="applicationDate">Date of application sent</label>
                        <input
                            name="applicationDate"
                            id="applicationDate"
                            type="date"
                            className="p-2 focus:outline-none caret-slate-800 bg-slate-300 border-2 border-slate-500 hover:border-slate-800"
                        />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-3">
                        <label htmlFor="followupDate">Date of follow up</label>
                        <input
                            name="followupDate"
                            id="followupDate"
                            type="date"
                            className="p-2 focus:outline-none caret-slate-800 bg-slate-300 border-2 border-slate-500 hover:border-slate-800"
                        />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-3">
                        <label htmlFor="applicationStatus">Status of application</label>
                        <input
                            name="applicationStatus"
                            id="applicationStatus"
                            type="text"
                            className="p-2 focus:outline-none caret-slate-800 bg-slate-300 border-2 border-slate-500 hover:border-slate-800"
                        />
                    </div>
                    <button type="submit">Create application</button>
                </form>
            </div>
        </div>
    )
}