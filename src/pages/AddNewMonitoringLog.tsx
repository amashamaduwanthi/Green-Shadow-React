import { Trash2 } from "react-feather";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {deleteLogs, getLogs, saveLog, updateLog} from "../redux/slices/logReducer.ts";
import { AppDispatch } from "../redux/store.ts";
import MonitoringLog from "../model/Log.ts";
import Swal from "sweetalert2";

function AddNewMonitoringLog() {
    const logs = useSelector((state: any) => state.log);
    const dispatch = useDispatch<AppDispatch>();

    const [LogCode, setLogCode] = useState("");
    const [date, setDate] = useState("");
    const [observation, setObservation] = useState("");
    const [LogImage, setLogImage] = useState("");

    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        dispatch(getLogs());
    }, [dispatch]);

    const handleAdd = () => {
        if (!LogCode || !date || !observation || !LogImage) {
            alert("All fields are required!");
            return;
        }
        const newLog = new MonitoringLog(LogCode, date, observation, LogImage);
        dispatch(saveLog(newLog));
        Swal.fire({
            icon: "success",
            title: "Adding Successful!",
            text: "Log Added Successfully!",
            confirmButtonColor: "#3085d6",
        })
        resetForm();
    };

    const handleEdit = (log: any) => {
        setLogCode(log.LogCode);
        setDate(log.date);
        setObservation(log.observation);
        setLogImage(log.LogImage);
        setIsEditing(true);
    };

    const handleUpdate = () => {
        if (!LogCode || !date || !observation || !LogImage) {
            alert("All fields are required!");
            return;
        }
        const updatedLog = {
            LogCode,
            date,
            observation,
            LogImage,
        };
        dispatch(updateLog(updatedLog));
        Swal.fire({
            icon: "success",
            title: "Update Successful!",
            text: "Log Update Successfully!",
            confirmButtonColor: "#3085d6",
        })
        dispatch(getLogs());
        resetForm();
    };


    const handleDelete = (code: string) => {
        if (window.confirm("Are you sure you want to delete this log?")) {
            dispatch(deleteLogs(code));
            Swal.fire({
                icon: "success",
                title: "Delete Successful!",
                text: "Log Delete Successfully!",
                confirmButtonColor: "#3085d6",
            })
            dispatch(getLogs());
        }
    };

    const resetForm = () => {
        setLogCode("");
        setDate("");
        setObservation("");
        setLogImage("");
        setIsEditing(false);
    };

    return (
        <div className="p-6">
            <div className="grid grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="Log Code" value={LogCode} onChange={(e) => setLogCode(e.target.value)} className="border p-2 rounded" />
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="border p-2 rounded" />
                <input type="text" placeholder="Observation" value={observation} onChange={(e) => setObservation(e.target.value)} className="border p-2 rounded" />
                <input type="text" placeholder="Image URL" value={LogImage} onChange={(e) => setLogImage(e.target.value)} className="border p-2 rounded" />
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
                    <th className="border px-4 py-2">Log Code</th>
                    <th className="border px-4 py-2">Date</th>
                    <th className="border px-4 py-2">Observation</th>
                    <th className="border px-4 py-2">Image</th>
                    <th className="border px-4 py-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {logs.map((log: any, index: number) => (
                    <tr key={index} onClick={() => handleEdit(log)} className="hover:cursor-pointer hover:bg-slate-600 hover:text-white">
                        <td className="border px-4 py-2">{log.LogCode}</td>
                        <td className="border px-4 py-2">{log.date}</td>
                        <td className="border px-4 py-2">{log.observation}</td>
                        <td className="border px-4 py-2">{log.LogImage}</td>
                        <td className="border px-4 py-2 text-center">
                            <button onClick={() => handleDelete(log.LogCode)} className="bg-red-500 text-white p-2 rounded-lg">
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

export default AddNewMonitoringLog;
