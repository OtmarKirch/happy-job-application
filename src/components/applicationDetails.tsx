import * as actions from "@/actions"

interface applicationDetailProps {
    id: number,
}


export default async function ApplicationDetails(props: applicationDetailProps) {
    const { id } = props
    const application = await actions.getApplicationById(id)
    console.log(application)
    const {
        company,
        jobTitle,
        jobDescription,
        mainContact,
        mainContactEmail,
        applicationDate,
        followupDate,
        applicationStatus
    } = application

    return (
        <div>
            {application ? (
                <div>
                <div>Application details of {id}</div>
                <div className="content-center">
                    <div className="grid grid-cols-3 gap-2">
                        <h2 className="col-span-1 text-right">Company:</h2>
                        <h2 className="col-span-2">{company}</h2>
                    </div> 
                    <div className="grid grid-cols-3 gap-2">
                        <p className="col-span-1 text-right">Job Title: </p>
                        <p className="col-span-2">{jobTitle}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <p className="col-span-1 text-right">Description:</p>
                        <p className="col-span-2">{jobDescription}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <p className="col-span-1 text-right">Main contact:</p>
                        <p className="col-span-2">{mainContact}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <p className="col-span-1 text-right">Email:</p>
                        <p className="col-span-2">{mainContactEmail}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <p className="col-span-1 text-right">Applied at:</p>
                        <p className="col-span-2">{applicationDate?.toString()}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <p className="col-span-1 text-right">Follow up:</p>
                        <p className="col-span-2">{followupDate?.toString()}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <p className="col-span-1 text-right">Status:</p>
                        <p className="col-span-2">{applicationStatus}</p>
                    </div>
                   
                </div>
                </div>
            ) : (
                <div>No such id</div>
            )}
        </div>
    )
}