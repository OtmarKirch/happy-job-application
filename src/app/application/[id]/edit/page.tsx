'use client'

import { useState, useEffect } from "react"
import { getApplicationById } from '@/actions'
import ApplicationItem from '@/components/applicationItem'

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
        getApplicationById(dataId)
    }
        fetchData(applicationId)
    }, [id])
}
