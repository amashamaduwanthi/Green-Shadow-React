import {Link} from "react-router";

export function Field() {
    return (
        <>
            <br/>
            <div className="bg-white shadow-md rounded-lg p-6 m-4">
                <h1 className="text-2xl font-bold text-gray-500 mb-6"> Field</h1>

                <Link to="/field/Add">
                    <button>Add Filed</button>
                </Link>
            </div>
            </>
            )
            }