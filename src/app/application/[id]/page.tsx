import * as actions from "@/actions"

interface singleApplicationProps {
    params: {
        id: string;
    }
}

export default async function SingleApplication (props: singleApplicationProps){

    const application = await actions.getApplicationById(parseInt(props.params.id))

    if (!application) {
        return(
            <div ></div>
        )
    }

    return (
        <div>
        <h1>{props.params.id}</h1>
        { application ? (
            <div>{application.company}</div>
        ) : (
            <div>There is no application with that id number</div>
        )
        
    }
        </div>
    )
}
