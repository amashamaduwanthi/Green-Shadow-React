import {Link} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {deleteVehicle} from "../redux/slices/vehicleSlice.ts";


export function Vehicle() {
    const vehicle = useSelector((state:any) => state.vehicle);
    const dispatch = useDispatch();
    const [deleteVehicleId, setDeleteVehicleId] = useState('');

    function handleDeleteVehicle(event:React.FormEvent){
        event.preventDefault();
        if(!deleteVehicleId){
            alert("Vehicle not found.");
        }
        dispatch(deleteVehicle(deleteVehicleId));
        alert("Vehicle deleted successfully.");
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
                    <button
                        onClick={handleDeleteVehicle}
                        className="bg-red-600 text-white px-6 py-2 rounded-lg  transition duration-300 mb-4"
                    >
                        Delete Vehicle
                    </button>
                </div>

                <br/>
                <ul>
                    {vehicle.map((vehicleDetails: any, index: number) => (
                        <li key={index}>
                            {vehicleDetails.VehicleCode}, {vehicleDetails.LicensePlateNumber},{vehicleDetails.category},{vehicleDetails.FuelType},{vehicleDetails.Status},{vehicleDetails.staffId},{vehicleDetails.Remarks}
                        </li>
                    ))}
                </ul>
            </div>
        </>

    )
}