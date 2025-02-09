'use client'

import { useState, useEffect, useActionState, startTransition } from "react"
import * as actions from '@/actions'

interface editApplicationProps {
    id: number
}

export default function EditApplication({ id }: editApplicationProps) {
    const [applicationData, setApplicationData] = useState<null | {
        id: number;
        company: string;
        jobTitle: string;
        jobDescription: string | null;
        mainContact: string | null;
        mainContactEmail: string | null;
        applicationDate: Date | null;
        followupDate: Date | null;
        applicationStatus: string;
    }>(null);

    useEffect(() => {
        async function fetchData(dataId: number){
        actions.getApplicationById(dataId)
    }
        fetchData(id)
    }, [id])

    const [formState, action] = useActionState(actions.editApplicationById, {message: ''})
    
    
        function handleSubmit(event: React.FormEvent<HTMLFormElement>){
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
    
            startTransition(() => {
                action(id);
            });
        }

    return (
        <div className="page-container">
            <div className="section-container mt-3">
                <h2 className="font-bold text-4xl">Edit Application</h2>
                
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 md:gap-3 border-2 border-slate-500 p-3"
                >
                    <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-3">
                        <label htmlFor="company" className="text-right col-span-1">Company</label>
                        <input
                            name="company"
                            type="text"
                            value={applicationData.company}
                            className="col-span-1 p-2 focus:outline-none caret-slate-700 bg-slate-300 border-2 border-slate-500 hover:border-slate-700"
                        />
                    </div>
                    <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-3">
                        <label htmlFor="jobTitle" className="text-right col-span-1">Job title</label>
                        <input
                            name="jobTitle"
                            id="jobTitle"
                            type="text"
                            className="col-span-1 p-2 focus:outline-none caret-slate-700 bg-slate-300 border-2 border-slate-500 hover:border-slate-700"
                        />
                    </div>
                    <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-3">
                        <label htmlFor="jobDescription" className="text-right col-span-1">Job description</label>
                        <textarea
                            name="jobDescription"
                            id="jobDescription"
                            className="col-span-1 p-2 focus:outline-none caret-slate-700 bg-slate-300 border-2 border-slate-500 hover:border-slate-700"
                        />
                    </div>
                    <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-3">
                        <label htmlFor="mainContact" className="text-right col-span-1">Main contact</label>
                        <input
                            name="mainContact"
                            id="mainContact"
                            type="text"
                            className="col-span-1 p-2 focus:outline-none caret-slate-700 bg-slate-300 border-2 border-slate-500 hover:border-slate-700"
                        />
                    </div>
                    <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-3">
                        <label htmlFor="mainContactEmail" className="text-right col-span-1">Main contact email</label>
                        <input
                            name="mainContactEmail"
                            id="mainContactEmail"
                            type="email"
                            className="col-span-1 p-2 focus:outline-none caret-slate-700 bg-slate-300 border-2 border-slate-500 hover:border-slate-700"
                        />
                    </div>
                    <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-3">
                        <label htmlFor="applicationDate" className="text-right col-span-1">Date of application sent</label>
                        <input
                            name="applicationDate"
                            id="applicationDate"
                            type="date"
                            className="col-span-1 p-2 focus:outline-none caret-slate-700 bg-slate-300 border-2 border-slate-500 hover:border-slate-700"
                        />
                    </div>
                    <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-3">
                        <label htmlFor="followupDate" className="text-right col-span-1">Date of follow up</label>
                        <input
                            name="followupDate"
                            id="followupDate"
                            type="date"
                            className="col-span-1 p-2 focus:outline-none caret-slate-700 bg-slate-300 border-2 border-slate-500 hover:border-slate-700"
                        />
                    </div>
                    <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-3">
                        <label htmlFor="applicationStatus" className="text-right col-span-1">Status of application</label>
                        <input
                            name="applicationStatus"
                            id="applicationStatus"
                            type="text"
                            className="col-span-1 p-2 focus:outline-none caret-slate-700 bg-slate-300 border-2 border-slate-500 hover:border-slate-700"
                        />
                    </div>

                    <div className="self-center text-yellow-300 font-bold">
                    {formState.message && (
                    <p>
                        {formState.message.split('\n').map((line, index) => (
                            <span key={index}>
                                {line}
                                <br />
                            </span>
                        ))}
                    </p>
                )}
                    </div>

                    <button 
                    type="submit"
                    className="m-3 border-2 border-slate-500 p-3 bg-gradient-to-br from-slate-500 to-slate-700 hover:outline outline-4 outline-offset-4 outline-slate-800 "
                    >Create application</button>
                </form>
            </div>
        </div>
    )
}
