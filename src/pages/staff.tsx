import {Link} from "react-router";

export function Staff() {
    return (
        <>
            <br/>
            <div className="bg-white shadow-md rounded-lg p-6 m-4">
                <h1 className="text-2xl font-bold text-gray-500 mb-6">Staff</h1>

                <Link to="/staff/Add">
                    <button>Add Staff</button>
                </Link>
            </div>
            </>
            )
            }