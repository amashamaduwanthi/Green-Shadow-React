import {Link} from "react-router";

export function Vehicle() {
    return (
        <>
            <br/>
            <h1>Vehicle</h1>
            <Link to='/vehicle/Add'><button>Add Vehicle</button></Link>
        </>

    )
}