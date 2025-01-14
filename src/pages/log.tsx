import {Link} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {deleteLog} from "../redux/slices/logSlice.ts";

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
                <h1 className="text-2xl font-bold text-gray-500 mb-6">MonitoringLog</h1>
                <Link to='/log/Add'>
                    <button>Add Log</button>
                </Link>
                <input type="text" placeholder="enter the Log Id" value={deleteLogCode}
                       onChange={(e) => setDeleteLogCode(e.target.value)}/>

                <button onClick={handleDeleteLog}>Delete Log</button>
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