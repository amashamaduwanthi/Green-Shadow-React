import {Link} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {deleteLog} from "../redux/slices/logSlice.ts";
import {GiPlantRoots} from "react-icons/gi";

export function Log(){
    const log = useSelector((state: any) => state.Log);
    const dispatch = useDispatch();
    const [deleteLogCode,setDeleteLogCode] = useState('');

    function handleDeleteLog(event:React.FormEvent){
        event.preventDefault();
        if(!deleteLogCode){
            alert("Log Not Found");

        }
        dispatch(deleteLog(deleteLogCode));
    }

    return (
        <>
            <br/>
            <div className="bg-white shadow-md rounded-lg p-6 m-4">
                <h1 className="text-2xl font-bold text-teal-900 mb-6 flex items-center gap-2">
                    <GiPlantRoots className="text-teal-900"/> Monitoring Log
                </h1>


                <Link to="/log/Add">
                    <button
                        className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-500 transition duration-300 mb-4">
                        Add Log
                    </button>
                </Link>

                <br/>
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Enter the Log Code"
                        value={deleteLogCode}
                        onChange={(e) => setDeleteLogCode(e.target.value)}
                        className="w-2000 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none mb-2"
                    />
                    <br/>
                    <button
                        onClick={handleDeleteLog}
                        className="bg-red-600 text-white px-6 py-2 rounded-lg  transition duration-300 mb-4"
                    >
                        Delete Log
                    </button>
                </div>

                <br/>
                <ul>
                    {log.map((logDetails: any, index: number) => (
                        <li key={index}>
                            {logDetails.LogCode}, {logDetails.Date},{logDetails.LogDetails},{logDetails.ObservedImage},{logDetails.fieldCode},{logDetails.cropId},{logDetails.staffId}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}