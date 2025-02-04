'use client'

import { useState, useEffect } from "react";
import { getApplicationById } from '@/actions';

interface ItemProps {
    id: number;
}

export default function ApplicationItem(props: ItemProps) {
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
        async function fetchData() {
            try {
                const data = await getApplicationById(props.id);
                setApplicationData(data);
            } catch (error) {
                console.error('Failed to fetch application data:', error);
            }
        }

        fetchData();
    }, [props.id]);

    return (
        <div className="border-slate-700 border-2 bg-slate-300 p-3 text-slate-700">
            {applicationData ? (
                <div className="content-center">
                    <div className="grid grid-cols-3 gap-2">
                        <h2 className="col-span-1 text-right">Company:</h2>
                        <h2 className="col-span-2">{applicationData.company}</h2>
                    </div> 
                    <div className="grid grid-cols-3 gap-2">
                        <p className="col-span-1 text-right">Job Title: </p>
                        <p className="col-span-2">{applicationData.jobTitle}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <p className="col-span-1 text-right">Description:</p>
                        <p className="col-span-2">{applicationData.jobDescription}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <p className="col-span-1 text-right">Main contact:</p>
                        <p className="col-span-2">{applicationData.mainContact}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <p className="col-span-1 text-right">Email:</p>
                        <p className="col-span-2">{applicationData.mainContactEmail}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <p className="col-span-1 text-right">Applied at:</p>
                        <p className="col-span-2">{applicationData.applicationDate?.toString()}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <p className="col-span-1 text-right">Follow up:</p>
                        <p className="col-span-2">{applicationData.followupDate?.toString()}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <p className="col-span-1 text-right">Status:</p>
                        <p className="col-span-2">{applicationData.applicationStatus}</p>
                    </div>
                   
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}