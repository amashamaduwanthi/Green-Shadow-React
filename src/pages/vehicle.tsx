import {Link} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import { deleteVehicles, getVehicles, updateVehicles} from "../redux/slices/vehicleReducer.ts";
import {AppDispatch} from "../redux/store.ts";


export function Vehicle() {
    const vehicle = useSelector((state:any) => state.vehicle);
    const dispatch = useDispatch<AppDispatch>();
    const [deleteVehicleId, setDeleteVehicleId] = useState('');


    const [searchLicenseNumber,setSearchLicenseNumber] = useState('');
    const [foundVehicle,setFoundVehicle] = useState<any | null>(null);

    const [NewVehicleCode,setNewVehicleCode] = useState('');
    const [Newcategory,setNewCategory] = useState('');
    const [NewFuelType,setNewFuelType] =useState('');
    const [NewStatus, setNewStatus] = useState('');
    const [NewstaffId, setNewStaffId] = useState('');
    const [NewRemarks,setNewRemarks] = useState('');

    useEffect(() => {
        dispatch(getVehicles());
    }, [dispatch]);


    function handleDeleteVehicle(event:React.FormEvent){
        event.preventDefault();
        if(!deleteVehicleId){
            alert("Vehicle not found.");
        }
        dispatch(deleteVehicles(deleteVehicleId));
        alert("Vehicle deleted successfully.");
    }
    function handleSearchVehicle(event:React.FormEvent){
        event.preventDefault();
        const found = vehicle.find((v: any) => v.licensePlateNo === searchLicenseNumber);
        if (found) {
            setFoundVehicle(found);
           setNewVehicleCode(found.vehicleCode);
           setNewCategory(found.category);
           setNewFuelType(found.fuelType);
           setNewStatus(found.status);
           setNewStaffId(found.staffId);
           setNewRemarks(found.remarks);

        } else {

            alert('vehicle not found.');
            setFoundVehicle(null);
        }
    }
    function handleUpdateVehicle(event:React.FormEvent){
        event.preventDefault();
        if(foundVehicle){
            dispatch(updateVehicles({licensePlateNumber:foundVehicle.licensePlateNumber,NewVehicleCode,Newcategory,NewStatus,NewFuelType,NewstaffId,NewRemarks}));

            alert("vehicle updated successfully.");
            setNewVehicleCode('');
            setNewCategory('');
            setNewStatus('');
            setNewFuelType('');
            setNewStaffId('')
            setNewRemarks('');
        }else{
            alert("vehicle not found.");
            setFoundVehicle(null);
        }
    }

    return (
        <>
            <br/>
            <div className="bg-white shadow-md rounded-lg p-6 m-4">
                <h1 className="text-2xl font-bold text-teal-900 mb-6 flex items-center gap-2">
                    <i className="fas fa-truck text-green-500 text-3xl"></i>
                    Vehicle
                </h1>


                <Link to="/vehicle/Add">
                    <button
                        className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-500 transition duration-300 mb-4">
                        Add Vehicle
                    </button>
                </Link>

                <br/>
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Enter the License plate number"
                        value={deleteVehicleId}
                        onChange={(e) => setDeleteVehicleId(e.target.value)}
                        className="w-2000 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none mb-2"
                    />
                    <br/>
                    <div className="flex gap-4">
                        <button
                            onClick={handleDeleteVehicle}
                            className="bg-red-600 text-white px-6 py-2 rounded-lg  transition duration-300 mb-4"
                        >
                            Delete Vehicle
                        </button>
                        <input type="text" placeholder="License No to search" value={searchLicenseNumber}
                               onChange={(e) => setSearchLicenseNumber(e.target.value)}
                               className="w-60 h-10 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>

                        <button onClick={handleSearchVehicle}
                                className="bg-blue-300 text-gray-800 font-medium py-2 px-4 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400">Search
                            Vehicle
                        </button>
                    </div>
                </div>

                <div className="max-w-8xl mx-auto px-4 py-8">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">

                        {foundVehicle && (

                            <div className="lg:w-1/3 bg-gray-100 p-8 rounded-lg shadow-lg text-left">
                                <h3 className="text-3xl font-bold text-gray-900 mb-6"> Vehicle:</h3>


                                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                                    <h4 className="text-xl font-semibold text-gray-700 mb-4">Current Vehicle
                                        Details</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <p>
                                            <strong className="text-gray-600">Current Vehicle No:</strong>
                                            <span className="text-gray-900">{foundVehicle.vehicleCode}</span>
                                        </p>

                                        <p>
                                            <strong className="text-gray-600">Current Category:</strong>
                                            <span className="text-gray-900">{foundVehicle.category}</span>
                                        </p>

                                        <p>
                                            <strong className="text-gray-600">Current Status:</strong>
                                            <span className="text-gray-900">{foundVehicle.status}</span>
                                        </p>

                                        <p>
                                            <strong className="text-gray-600">Current Fuel type:</strong>
                                            <span className="text-gray-900">{foundVehicle.fuelType}</span>
                                        </p>
                                        <p>
                                            <strong className="text-gray-600">Current Staff Id:</strong>
                                            <span className="text-gray-900">{foundVehicle.staffId}</span>
                                        </p>

                                        <p>
                                            <strong className="text-gray-600">Current Remark:</strong>
                                            <span className="text-gray-900">{foundVehicle.remarks}</span>
                                        </p>
                                    </div>
                                </div>


                            </div>
                        )}
                    </div>
                </div>
                <br/>
                <ul className="space-y-6">
                    {vehicle.map((vehicleDetails: any, index: number) => (
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
                                        {vehicleDetails.vehicleCode} - {vehicleDetails.licensePlateNumber}
                                    </p>
                                    <p className="text-base text-gray-700">
                                        <span
                                            className="font-semibold text-teal-800">Category:</span> {vehicleDetails.category}
                                    </p>
                                    <p className="text-base text-gray-700">
                                        <span
                                            className="font-semibold text-teal-800">Fuel Type:</span> {vehicleDetails.fuelType}
                                    </p>
                                    <p className="text-base text-gray-700">
                                        <span
                                            className="font-semibold text-teal-800">Status:</span> {vehicleDetails.status}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-10">
                                <p className="text-base text-gray-700">
                                    <span
                                        className="font-semibold text-teal-800">Staff ID:</span> {vehicleDetails.staffId}
                                </p>
                                <p className="text-base text-gray-700">
                                    <span
                                        className="font-semibold text-teal-800">Remarks:</span> {vehicleDetails.remarks}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>

            </div>
        </>

    )
}