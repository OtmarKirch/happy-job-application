import { useState } from "react"
import { getApplicationById } from '@/actions'

interface itemProps {
    id: number,
}

export default function ApplicationItem(props: itemProps){
    const [applicationData, setApplicationData] = useState()

    const dataRequest = getApplicationById(props.id)

    setApplicationData(dataRequest)

    return (
        <div className="section-container">
            Application Item
        </div>
    )
}