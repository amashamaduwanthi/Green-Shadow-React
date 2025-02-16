import { Trash2 } from "react-feather";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {deleteVehicles, getVehicles, saveVehicle, updateVehicles} from "../redux/slices/vehicleReducer.ts";
import { AppDispatch } from "../redux/store.ts";
import { Vehicle } from "../model/Vehicle.ts";

function AddNewVehicle() {
    const vehicles = useSelector((state: any) => state.vehicle);
    const dispatch = useDispatch<AppDispatch>();

    const [vehicleCode, setVehicleCode] = useState("");
    const [licensePlateNo, setLicensePlateNo] = useState("");
    const [category, setCategory] = useState("");
    const [fuelType, setFuelType] = useState("");
    const [status, setStatus] = useState("");
    const [staffId, setStaffId] = useState("");
    const [remarks, setRemarks] = useState("");
    const [deleteVehicleId, setDeleteVehicleId] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        dispatch(getVehicles());
    }, [dispatch]);

    const handleAdd = () => {
        if (!vehicleCode || !licensePlateNo || !category || !fuelType || !status || !staffId || !remarks) {
            alert("All fields are required!");
            return;
        }
        const newVehicle = new Vehicle(vehicleCode, licensePlateNo, category, fuelType, status, remarks, staffId);
        dispatch(saveVehicle(newVehicle));
        alert("Vehicle added successfully!");
        resetForm();
    };

    const handleEdit = (vehicle: any) => {
        setVehicleCode(vehicle.vehicleCode);
        setLicensePlateNo(vehicle.licensePlateNo);
        setCategory(vehicle.category);
        setFuelType(vehicle.fuelType);
        setStatus(vehicle.status);
        setStaffId(vehicle.staffId);
        setRemarks(vehicle.remarks);
        setIsEditing(true);
    };

    const handleUpdate = () => {
        if (!vehicleCode || !licensePlateNo || !category || !fuelType || !status || !staffId || !remarks) {
            alert("All fields are required!");
            return;
        }
        const updatedVehicle = {
            vehicleCode,
            licensePlateNo,
            category,
            fuelType,
            status,
            staffId,
            remarks,
        };
        dispatch(updateVehicles(updatedVehicle));
        alert("Vehicle updated successfully!");
        dispatch(getVehicles())

        resetForm();
    };


    const handleDelete = () => {
        event.preventDefault();
        if(!deleteVehicleId){
            alert("Vehicle not found.");
        }
        dispatch(deleteVehicles(deleteVehicleId));
        alert("Vehicle deleted successfully.");
    };

    const resetForm = () => {
        setVehicleCode("");
        setLicensePlateNo("");
        setCategory("");
        setFuelType("");
        setStatus("");
        setStaffId("");
        setRemarks("");
        setIsEditing(false);
    };

    return (
        <div className="p-6">
            <div className="grid grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="Vehicle Code" value={vehicleCode}
                       onChange={(e) => setVehicleCode(e.target.value)} className="border p-2 rounded"/>
                <input type="text" placeholder="License Plate Number" value={licensePlateNo}
                       onChange={(e) => setLicensePlateNo(e.target.value)} className="border p-2 rounded"/>
                <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)}
                       className="border p-2 rounded"/>
                <input type="text" placeholder="Fuel Type" value={fuelType}
                       onChange={(e) => setFuelType(e.target.value)} className="border p-2 rounded"/>
                <input type="text" placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)}
                       className="border p-2 rounded"/>
                <input type="text" placeholder="Remarks" value={remarks} onChange={(e) => setRemarks(e.target.value)}
                       className="border p-2 rounded"/>
                <input type="text" placeholder="Staff ID" value={staffId} onChange={(e) => setStaffId(e.target.value)}
                       className="border p-2 rounded"/>
            </div>
            <div className="flex justify-end">
                {isEditing ? (
                    <button onClick={handleUpdate} className="bg-blue-500 text-white p-2 rounded mr-2">Update</button>
                ) : (
                    <button onClick={handleAdd} className="bg-green-500 text-white p-2 rounded mr-2">Add</button>
                )}
                {isEditing && (
                    <button onClick={resetForm} className="bg-gray-500 text-white p-2 rounded">Cancel</button>
                )}
            </div>

            <table className="min-w-full table-auto border-collapse mt-6">
                <thead>
                <tr className="bg-teal-600 text-white">
                    <th className="border px-4 py-2">Vehicle Code</th>
                    <th className="border px-4 py-2">License Plate No</th>
                    <th className="border px-4 py-2">Category</th>
                    <th className="border px-4 py-2">Fuel Type</th>
                    <th className="border px-4 py-2">Status</th>
                    <th className="border px-4 py-2">Remarks</th>
                    <th className="border px-4 py-2">Staff ID</th>

                    <th className="border px-4 py-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {vehicles.map((vehicle: any, index: number) => (
                    <tr key={index} onClick={() => handleEdit(vehicle)}
                        className="hover:cursor-pointer hover:bg-slate-600 hover:text-white">
                        <td className="border px-4 py-2">{vehicle.vehicleCode}</td>
                        <td className="border px-4 py-2">{vehicle.licensePlateNo}</td>
                        <td className="border px-4 py-2">{vehicle.category}</td>
                        <td className="border px-4 py-2">{vehicle.fuelType}</td>
                        <td className="border px-4 py-2">{vehicle.status}</td>
                        <td className="border px-4 py-2">{vehicle.remarks}</td>
                        <td className="border px-4 py-2">{vehicle.staffId}</td>

                        <td className="border px-4 py-2 text-center">
                            <button onClick={() => handleDelete(vehicle.vehicleCode)}
                                    className="bg-red-500 text-white p-2 rounded-lg">
                                <Trash2/>
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default AddNewVehicle;
