import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addNewVehicle} from "../redux/slices/vehicleSlice.ts";

export function AddNewVehicle (){
    const vehicle = useSelector((state: any) => state.vehicle);
    const dispatch = useDispatch();
    const [VehicleCode,setVehicleCode] = useState('');
    const [LicensePlateNumber,setLicensePlateNumber] = useState('');
    const [category,setCategory] = useState('');
    const [FuelType,setFuelType] =useState('');
    const [Status, setStatus] = useState('');
    const [staffId, setStaffId] = useState('');
    const [Remarks,setRemarks] = useState('');

    function handleSubmitVehicle(event: React.FormEvent) {
        event.preventDefault();
        dispatch(addNewVehicle({VehicleCode,LicensePlateNumber,category,FuelType,Status,staffId,Remarks}))
        setVehicleCode('');
        setLicensePlateNumber('')
        setCategory('')
        setFuelType('')
        setStatus('')
        setStaffId('')
        setRemarks('')
    }
    return(
        <>
            <br/><br/><br/>
            <div className="bg-white shadow-md rounded-lg p-6 m-4">
                <h1 className="text-2xl font-bold text-gray-500 mb-6">Add Vehicle</h1>
                <form>
                    <label>Vehicle Code: <input type="text" name="VehicleCode" value={VehicleCode}
                                                onChange={(e) => setVehicleCode(e.target.value)}/></label><br/>
                    <label> License plate number: <input type="text" name="Licenseplatenumber"
                                                         value={LicensePlateNumber}
                                                         onChange={(e) => setLicensePlateNumber(e.target.value)}/></label><br/>
                    <label>category: <input type="text" name="category" value={category}
                                            onChange={(e) => setCategory(e.target.value)}/></label><br/>
                    <label>Fuel type: <input type="text" name="Fueltype" value={FuelType}
                                             onChange={(e) => setFuelType(e.target.value)}/></label><br/>
                    <label>Status: <input type="text" name="status" value={Status}
                                          onChange={(e) => setStatus(e.target.value)}/></label><br/>
                    <label>Staff Id: <input type="text" name="staff_id" value={staffId}
                                            onChange={(e) => setStaffId(e.target.value)}/></label><br/>
                    <label>Remarks: <input type="text" name="Remarks" value={Remarks}
                                           onChange={(e) => setRemarks(e.target.value)}/></label><br/>

                    <button type="submit" onClick={handleSubmitVehicle}>Add Vehicle</button>
                </form>
            </div>
            <ul>
                {vehicle.map((vehicleDetails: any, index: number) => (
                    <li key={index}>
                        {vehicleDetails.VehicleCode}, {vehicleDetails.LicensePlateNumber},{vehicleDetails.category},{vehicleDetails.FuelType},{vehicleDetails.Status},{vehicleDetails.staffId},{vehicleDetails.Remarks}
                    </li>
                ))}
            </ul>
        </>

    )
}