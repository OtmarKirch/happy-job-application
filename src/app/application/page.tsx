'use client'

import { useState, useEffect } from "react"
import { getAllApplicationIds } from '@/actions'
import ApplicationItem from '@/components/applicationItem'

export default function Application() {
    const [applicationIds, setApplicationIds] = useState<number[] | null>(null)

    useEffect(() => {
        async function fetchData() {
            try {
                const ids = await getAllApplicationIds()
                setApplicationIds(ids)

            } catch (error) {
                console.error('Failed to fetch ids: ', error)
            }
        }

        fetchData();
    }, [])


    return (
        <div className="page-container">
            <div className="section-container">
                {applicationIds ? (
                    applicationIds.map(id => (
                        <ApplicationItem key={id} id={id} />
                    ))
                ) : (
                    <p>Loading...</p>
                )

                }
            </div>
        </div>
    )
}