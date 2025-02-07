import * as actions from "@/actions"

interface applicationDetailProps {
    id: number,
}

export default async function ApplicationDetails(props: applicationDetailProps) {
    const { id } = props
    const application = await actions.getApplicationById(id)
    return (
        <div>
            {application ? (
                <div>Application details of {id}</div>
            ) : (
                <div>No such id</div>
            )}
        </div>
    )
}