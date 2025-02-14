import { Trash2 } from "react-feather";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {deleteCrops, getCrops, saveCrop} from "../redux/slices/cropReducer.ts";
import { AppDispatch } from "../redux/store.ts";
import { Crop } from "../model/Crop.ts";

function AddNewCrop() {
    const crops = useSelector((state: any) => state.crop);
    const dispatch = useDispatch<AppDispatch>();

    const [cropId, setCropId] = useState("");
    const [cropName, setCropName] = useState("");
    const [cropImage, setCropImage] = useState("");
    const [category, setCategory] = useState("");
    const [season, setSeason] = useState("");
    const [fieldCode, setFieldCode] = useState("");

    const [isEditing, setIsEditing] = useState(false);
    useEffect(() => {
        dispatch(getCrops());
    }, [dispatch]);

    const handleAdd = () => {
        if (!cropId || !cropName || !cropImage || !category || !season || !fieldCode) {
            alert("All fields are required!");
            return;
        }
        const newCrop = new Crop(cropId, cropName, cropImage, category, season, fieldCode);
        dispatch(saveCrop(newCrop));
        resetForm();
    };

    const handleEdit = (crop: any) => {
        setCropId(crop.cropId);
        setCropName(crop.cropName);
        setCropImage(crop.cropImage);
        setCategory(crop.category);
        setSeason(crop.season);
        setFieldCode(crop.fieldCode);
        setIsEditing(true);
    };

    const handleUpdate = () => {
        if (!cropId || !cropName || !cropImage || !category || !season || !fieldCode) {
            alert("All fields are required!");
            return;
        }
        // Update logic can be implemented later.
        resetForm();
    };

    const handleDelete = (cropId: string) => {
        if (window.confirm("Are you sure you want to delete this crop?")) {
            dispatch(deleteCrops(cropId));
            dispatch(getCrops())
        }
    };

    const resetForm = () => {
        setCropId("");
        setCropName("");
        setCropImage("");
        setCategory("");
        setSeason("");
        setFieldCode("");
        setIsEditing(false);
    };

    return (
        <div className="p-6">
            <div className="grid grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="Crop ID" value={cropId} onChange={(e) => setCropId(e.target.value)} className="border p-2 rounded" />
                <input type="text" placeholder="Crop Name" value={cropName} onChange={(e) => setCropName(e.target.value)} className="border p-2 rounded" />
                <input type="text" placeholder="Image URL" value={cropImage} onChange={(e) => setCropImage(e.target.value)} className="border p-2 rounded" />
                <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} className="border p-2 rounded" />
                <input type="text" placeholder="Season" value={season} onChange={(e) => setSeason(e.target.value)} className="border p-2 rounded" />
                <input type="text" placeholder="Field Code" value={fieldCode} onChange={(e) => setFieldCode(e.target.value)} className="border p-2 rounded" />
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
                <tr   className="bg-teal-600 text-white">
                    <th className="border px-4 py-2">Crop ID</th>
                    <th className="border px-4 py-2">Crop Name</th>
                    <th className="border px-4 py-2">Image</th>
                    <th className="border px-4 py-2">Category</th>
                    <th className="border px-4 py-2">Season</th>
                    <th className="border px-4 py-2">Field Code</th>
                    <th className="border px-4 py-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {crops.map((crop: any, index: number) => (
                    <tr key={index} onClick={() => handleEdit(crop)} className="hover:cursor-pointer hover:bg-slate-600 hover:text-white">
                        <td className="border px-4 py-2">{crop.cropId}</td>
                        <td className="border px-4 py-2">{crop.cropName}</td>
                        <td className="border px-4 py-2">{crop.cropImage}</td>
                        <td className="border px-4 py-2">{crop.category}</td>
                        <td className="border px-4 py-2">{crop.season}</td>
                        <td className="border px-4 py-2">{crop.fieldCode}</td>
                        <td className="border px-4 py-2 text-center">
                            <button onClick={() => handleDelete(crop.cropId)} className="bg-red-500 text-white p-2 rounded-lg">
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

export default AddNewCrop;
