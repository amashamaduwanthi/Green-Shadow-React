import {Link} from "react-router";

export function Log(){
    return (
        <>
            <br/>
            <div className="bg-white shadow-md rounded-lg p-6 m-4">
                <h1 className="text-2xl font-bold text-gray-500 mb-6">MonitoringLog</h1>
                <Link to='/log/Add'>
                    <button>Add Vehicle</button>
                </Link>
            </div>
            </>
            )
            }