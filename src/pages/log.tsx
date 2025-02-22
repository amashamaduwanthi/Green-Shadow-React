import {Link} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {deleteLogs,  getLogs} from "../redux/slices/logReducer.ts";
import {AppDispatch} from "../redux/store.ts";
import Swal from "sweetalert2";


export function Log(){
    const log = useSelector((state: any) => state.log);

    const dispatch = useDispatch<AppDispatch>();
    const [deleteLogCode,setDeleteLogCode] = useState('');
    const [searchLogCode,setSearchLogCode] = useState('');
    const [foundLog,setFoundLog] = useState<any | null>(null);

    const[NewDate, setNewDate] = useState('');
    const[NewLogDetails, setNewLogDetails] = useState('');
    const[NewObservedImage, setNewObservedImage] = useState('');
    const [NewfieldCode, setNewFieldCode] = useState('');
    const [NewcropId, setNewCropId] = useState('');
    const [NewstaffId, setNewStaffId] = useState('');

    useEffect(() => {
        dispatch(getLogs());
    }, [dispatch]);

    function handleDeleteLog(event:React.FormEvent){
        event.preventDefault();
        if(!deleteLogCode){
            Swal.fire({
                icon: "Not Found",
                title: "Not Found!",
                text: "Not Found!",
                confirmButtonColor: "#3085d6",
            })

        }
        dispatch(deleteLogs(deleteLogCode));
        Swal.fire({
            icon: "success",
            title: "Delete Successful!",
            text: "Delete Successfully!",
            confirmButtonColor: "#3085d6",
        })
    }
    function handleSearchLog(event:React.FormEvent){
        event.preventDefault();
        const found = log.find((s: any) => s.LogCode === searchLogCode);
        if (found) {
           setFoundLog(found);
            setNewDate(found.date);
            setNewLogDetails(found.observation);
            setNewObservedImage(found.LogImage);


        } else {
            Swal.fire({
                icon: "Not Found",
                title: "Not Found!",
                text: "Not Found!",
                confirmButtonColor: "#3085d6",
            })
            setFoundLog(null);
        }
    }


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
                                <h3 className="text-3xl font-bold text-gray-900 mb-6"> Log:</h3>


                                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                                    <h4 className="text-xl font-semibold text-gray-700 mb-4">Current Log
                                        Details</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <p>
                                            <strong className="text-gray-600">Current Date:</strong>
                                            <span className="text-gray-900">{foundLog.date}</span>
                                        </p>

                                        <p>
                                            <strong className="text-gray-600">Current Log Details:</strong>
                                            <span className="text-gray-900">{foundLog.observation}</span>
                                        </p>

                                        <p>
                                            <strong className="text-gray-600">Current Observed Image:</strong>
                                            <span className="text-gray-900">{foundLog.LogImage}</span>
                                        </p>

                                    </div>
                                </div>

                            </div>
                        )}
                    </div>
                </div>

                <br/>
                <ul className="space-y-6">
                    {log.map((logDetails: any, index: number) => (
                        <li
                            key={index}
                            className={`flex items-center justify-between p-6 rounded-lg shadow-md ${
                                index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                            } hover:bg-teal-50 transition duration-200`}
                        >
                            <div className="flex items-center space-x-8">
                <span className="text-teal-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </span>
                                <div className="text-left">
                                    <p className="text-lg font-bold text-gray-800">
                                        {logDetails.LogCode} - {logDetails.observation}
                                    </p>
                                    <p className="text-base text-gray-700">
                                        <span className="font-semibold text-teal-800">Date:</span> {logDetails.date}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-10">
                                {/*<p className="text-base text-gray-700">*/}
                                {/*    <span*/}
                                {/*        className="font-semibold text-teal-800">Field Code:</span> {logDetails.fieldCode}*/}
                                {/*</p>*/}
                                {/*<p className="text-base text-gray-700">*/}
                                {/*    <span className="font-semibold text-teal-800">Crop ID:</span> {logDetails.cropId}*/}
                                {/*</p>*/}
                                {/*<p className="text-base text-gray-700">*/}
                                {/*    <span className="font-semibold text-teal-800">Staff ID:</span> {logDetails.staffId}*/}
                                {/*</p>*/}
                                <div className="flex space-x-4">
                                    <p className="text-base text-gray-700">
                                        <span
                                            className="font-semibold text-teal-800">Observed Image:</span> {logDetails.LogImage}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

            </div>
        </>
    )
}