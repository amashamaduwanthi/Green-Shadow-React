import {Link} from "react-router";

export function Vehicle() {
    return (
        <>
            <br/>
            <div className="bg-white shadow-md rounded-lg p-6 m-4">
                <h1 className="text-2xl font-bold text-gray-500 mb-6">Vehicle</h1>
                <Link to='/vehicle/Add'>
                    <button>Add Vehicle</button>
                </Link>
            </div>
            </>

            )
            }