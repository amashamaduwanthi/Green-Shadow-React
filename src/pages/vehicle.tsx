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
                <h1 className="text-2xl font-bold text-gray-500 mb-6">Vehicle</h1>
                <Link to='/vehicle/Add'>
                    <button>Add Vehicle</button>
                </Link>
                <input type="text" placeholder="enter the License Plate Number" value={deleteVehicleId}
                       onChange={(e) => setDeleteVehicleId(e.target.value)}/>

                <button onClick={handleDeleteVehicle}>Delete Vehicle</button>
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