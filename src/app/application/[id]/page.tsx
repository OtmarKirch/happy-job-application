
import ApplicationDetails from "@/components/applicationDetails";

interface singleApplicationProps {
    params: {
        id: string;
    }
}

export default function SingleApplication(props: singleApplicationProps) {
    const id = parseInt(props.params.id)


    return (
        <div className="page-container">
            <div className="section-container">
                <h1>{id}</h1>
                
                    <ApplicationDetails
                    key={id}
                    id={id}
                    />
                
            </div>
        </div>
    )
}
