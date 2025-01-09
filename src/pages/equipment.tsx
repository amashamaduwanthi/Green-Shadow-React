import {Link} from "react-router";

export function Equipment(){
    return (
        <>
            <br/>
            <h1>Equipment</h1>
            <Link to='/equipment/Add'><button>Add Equipment</button></Link>
        </>
    )
}