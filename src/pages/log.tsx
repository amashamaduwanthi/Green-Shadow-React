import {Link} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {deleteLog} from "../redux/slices/logSlice.ts";


export function Log(){
    const log = useSelector((state: any) => state.Log);
    const dispatch = useDispatch();
    const [deleteLogCode,setDeleteLogCode] = useState('');
    const [searchLogCode,setSearchLogCode] = useState('');
    const [foundLog,setFoundLog] = useState<any | null>(null);

    const[NewDate, setNewDate] = useState('');
    const[NewLogDetails, setNewLogDetails] = useState('');
    const[NewObservedImage, setNewObservedImage] = useState('');
    const [NewfieldCode, setNewFieldCode] = useState('');
    const [NewcropId, setNewCropId] = useState('');
    const [NewstaffId, setNewStaffId] = useState('');

    function handleDeleteLog(event:React.FormEvent){
        event.preventDefault();
        if(!deleteLogCode){
            alert("Log Not Found");

        }
        dispatch(deleteLog(deleteLogCode));
        alert("Deleted Successfully.");
    }
    function handleSearchLog(event:React.FormEvent){
        event.preventDefault();
        const found = log.find((s: any) => s.LogCode === searchLogCode);
        if (found) {
           setFoundLog(found);
            setNewDate(found.Date);
            setNewLogDetails(found.LogDetails);
            setNewObservedImage(found.ObservedImage);
            setNewFieldCode(found.fieldCode);
            setNewCropId(found.cropId);
            setNewStaffId(found.staffId);

        } else {
            alert('log not found.');
            setFoundLog(null);
        }
    }
    function handleUpdateLog(){}

    return (
        <>
            <br/>
            <div className="bg-white shadow-md rounded-lg p-6 m-4">
                <h1 className="text-2xl font-bold text-teal-900 mb-6 flex items-center gap-2">
                    <i className="fas fa-clipboard-list text-green-500 text-3xl"></i>
                    Monitoring Log
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
                    <div className="flex gap-4">
                        <button
                            onClick={handleDeleteLog}
                            className="bg-red-600 text-white px-6 py-2 rounded-lg  transition duration-300 mb-4"
                        >
                            Delete Log
                        </button>
                        <input type="text" placeholder="Log Code tosearch" value={searchLogCode}
                               onChange={(e) => setSearchLogCode(e.target.value)}
                               className="w-60 h-10 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>

                        <button onClick={handleSearchLog}
                                className="bg-blue-300 text-gray-800 font-medium py-2 px-4 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400">Search
                           Log
                        </button>
                    </div>
                </div>
                <div className="max-w-8xl mx-auto px-4 py-8">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">

                        {foundLog && (

                            <div className="lg:w-1/3 bg-gray-100 p-8 rounded-lg shadow-lg text-left">
                                <h3 className="text-3xl font-bold text-gray-900 mb-6">Update Log:</h3>


                                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                                    <h4 className="text-xl font-semibold text-gray-700 mb-4">Current Log
                                        Details</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <p>
                                            <strong className="text-gray-600">Current Date:</strong>
                                            <span className="text-gray-900">{foundLog.Date}</span>
                                        </p>

                                        <p>
                                            <strong className="text-gray-600">Current Log Details:</strong>
                                            <span className="text-gray-900">{foundLog.LogDetails}</span>
                                        </p>

                                        <p>
                                            <strong className="text-gray-600">Current Observed Image:</strong>
                                            <span className="text-gray-900">{foundLog.ObservedImage}</span>
                                        </p>

                                        <p>
                                            <strong className="text-gray-600">Current Field Code:</strong>
                                            <span className="text-gray-900">{foundLog.fieldCode}</span>
                                        </p>
                                        <p>
                                            <strong className="text-gray-600">Current Crop Id:</strong>
                                            <span className="text-gray-900">{foundLog.cropId}</span>
                                        </p>

                                        <p>
                                            <strong className="text-gray-600">Current staff id</strong>
                                            <span className="text-gray-900">{foundLog.staffId}</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-sm">
                                    <h4 className="text-xl font-semibold text-gray-700 mb-4">Update Log Details</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        <input type="text" placeholder="New log Date" value={NewDate}
                                               onChange={(e) => setNewDate(e.target.value)}/>
                                        <input type="text" placeholder="New Log Details" value={NewLogDetails}
                                               onChange={(e) => setNewLogDetails(e.target.value)}/>
                                        <input type="text" placeholder="New observed Image" value={NewObservedImage}
                                               onChange={(e) => setNewObservedImage(e.target.value)}/>
                                        <input type="text" placeholder="New Filed code" value={NewfieldCode}
                                               onChange={(e) => setNewFieldCode(e.target.value)}/>
                                        <input type="text" placeholder="New crop Id" value={NewcropId}
                                               onChange={(e) => setNewCropId(e.target.value)}/>

                                        <input type="text" placeholder="New staff id" value={NewstaffId}
                                               onChange={(e) => setNewStaffId(e.target.value)}/>
                                        <button onClick={handleUpdateLog}
                                                className="w-full bg-indigo-600 text-white py-3 px-4 mt-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400">Update
                                            vehicle
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
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