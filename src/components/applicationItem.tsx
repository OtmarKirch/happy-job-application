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
        <div className="section-container">
            {applicationData ? (
                <div>
                    <h2>{applicationData.company}</h2>
                    <p>{applicationData.jobTitle}</p>
                    <p>{applicationData.jobDescription}</p>
                    <p>{applicationData.mainContact}</p>
                    <p>{applicationData.mainContactEmail}</p>
                    <p>{applicationData.applicationDate?.toString()}</p>
                    <p>{applicationData.followupDate?.toString()}</p>
                    <p>{applicationData.applicationStatus}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}