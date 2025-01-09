import {Link} from "react-router";

export function Staff() {
    return (
        <>
            <br/>
            <h1>Staff</h1>

            <Link to="/staff/Add"><button>Add Staff</button></Link>
        </>
    )
}