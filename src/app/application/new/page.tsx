export default function CreateApplication() {
    async function createApplication(formData: FormData) {
        'use server'

        const company = formData.get("company") as string;
        const jobTitle = formData.get("jobTitle") as string;

        console.log(company + jobTitle)


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
                        <label htmlFor="contact">Contact</label>
                        <input
                            name="contact"
                            id="contact"
                            type="text"
                            className="p-2 focus:outline-none caret-slate-800 bg-slate-300 border-2 border-slate-500 hover:border-slate-800"
                        />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-3">
                        <label htmlFor="contactEmail">Contact email</label>
                        <input
                            name="contactEmail"
                            id="contactEmail"
                            type="email"
                            className="p-2 focus:outline-none caret-slate-800 bg-slate-300 border-2 border-slate-500 hover:border-slate-800"
                        />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-3">
                        <label htmlFor="dateApplied">Date of application sent</label>
                        <input
                            name="dateApplied"
                            id="dateApplied"
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
                        <label htmlFor="statusApplication">Status of application</label>
                        <input
                            name="statusApplication"
                            id="statusApplication"
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