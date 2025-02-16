import { Trash2 } from "react-feather";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {

    deleteEquipments,
    getEquipments,
    saveEquipment
} from "../redux/slices/equipmentReducer.ts";
import { AppDispatch } from "../redux/store.ts";
import {Equipment} from "../model/Equipment.ts";

function AddNewEquipment() {
    const equipments = useSelector((state: any) => state.equipment);
    const dispatch = useDispatch<AppDispatch>();

    const [equipmentId, setEquipmentId] = useState("");
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [status, setStatus] = useState("");
    const [fieldCode, setFieldCode] = useState("");
    const [staffId, setStaffId] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        dispatch(getEquipments());
    }, [dispatch]);

    const handleAdd = () => {
        if (!equipmentId || !name || !type || !status || !fieldCode || !staffId) {
            alert("All fields are required!");
            return;
        }
        const newEquipment = new Equipment(equipmentId, name, type, status, fieldCode, staffId) ;
        dispatch(saveEquipment(newEquipment));
        resetForm();
    };

    const handleEdit = (item: any) => {
        setEquipmentId(item.equipmentId);
        setName(item.name);
        setType(item.type);
        setStatus(item.status);
        setFieldCode(item.fieldCode);
        setStaffId(item.staffId);
        setIsEditing(true);
    };

    const handleUpdate = () => {
        if (!equipmentId || !name || !type || !status || !fieldCode || !staffId) {
            alert("All fields are required!");
            return;
        }
        // Update logic can be implemented later.
        resetForm();
    };

    const handleDelete = (id: string) => {
        if (window.confirm("Are you sure you want to delete this equipment?")) {
            dispatch(deleteEquipments(id));
            dispatch(getEquipments());
        }
    };

    const resetForm = () => {
        setEquipmentId("");
        setName("");
        setType("");
        setStatus("");
        setFieldCode("");
        setStaffId("");
        setIsEditing(false);
    };

    return (
        <div className="p-6">
            <div className="grid grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="Equipment ID" value={equipmentId} onChange={(e) => setEquipmentId(e.target.value)} className="border p-2 rounded" />
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="border p-2 rounded" />
                <input type="text" placeholder="Type" value={type} onChange={(e) => setType(e.target.value)} className="border p-2 rounded" />
                <input type="text" placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} className="border p-2 rounded" />
                <input type="text" placeholder="Field Code" value={fieldCode} onChange={(e) => setFieldCode(e.target.value)} className="border p-2 rounded" />
                <input type="text" placeholder="Staff ID" value={staffId} onChange={(e) => setStaffId(e.target.value)} className="border p-2 rounded" />
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
                    <th className="border px-4 py-2">Equipment ID</th>
                    <th className="border px-4 py-2">Name</th>
                    <th className="border px-4 py-2">Type</th>
                    <th className="border px-4 py-2">Status</th>
                    <th className="border px-4 py-2">Field Code</th>
                    <th className="border px-4 py-2">Staff ID</th>
                    <th className="border px-4 py-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {equipments.map((item: any, index: number) => (
                    <tr key={index} onClick={() => handleEdit(item)} className="hover:cursor-pointer hover:bg-slate-600 hover:text-white">
                        <td className="border px-4 py-2">{item.equipmentId}</td>
                        <td className="border px-4 py-2">{item.name}</td>
                        <td className="border px-4 py-2">{item.type}</td>
                        <td className="border px-4 py-2">{item.status}</td>
                        <td className="border px-4 py-2">{item.fieldCode}</td>
                        <td className="border px-4 py-2">{item.staffId}</td>
                        <td className="border px-4 py-2 text-center">
                            <button onClick={() => handleDelete(item.equipmentId)} className="bg-red-500 text-white p-2 rounded-lg">
                                <Trash2 />
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default AddNewEquipment;
