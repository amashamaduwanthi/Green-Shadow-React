import { Trash2 } from "react-feather";
import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import {deleteField, getFields, saveField} from "../redux/slices/fieldReducer.ts";
import {AppDispatch} from "../redux/store.ts";
import {Field} from "../model/Field.ts";

function AddNewField() {
    const fields = useSelector((state: any) => state.field);
    const dispatch = useDispatch<AppDispatch>();

    const [fieldCode, setFieldCode] = useState("");
    const [fieldName, setFieldName] = useState("");
    const [location, setLocation] = useState("");
    const [extentSize, setExtentSize] = useState("");
    const [fieldImage, setFieldImage] = useState("");

    const [isEditing, setIsEditing] = useState(false);
    useEffect(() => {
        dispatch(getFields());
    }, [dispatch]);


    const handleAdd = () => {
        if (!fieldCode || !fieldName || !location || !extentSize || !fieldImage) {
            alert("All fields are required!");
            return;
        }
        const newField=new Field(fieldCode, fieldName, location, extentSize, fieldImage);
        dispatch(saveField(newField));
        resetForm();
    };

    const handleEdit = (field: any) => {
        setFieldCode(field.fieldCode);
        setFieldName(field.fieldName);
        setLocation(field.location);
        setExtentSize(field.extentSize);
        setFieldImage(field.fieldImage);
        setIsEditing(true);
    };

    const handleUpdate = () => {
        if (!fieldCode || !fieldName || !location || !extentSize || !fieldImage) {
            alert("All fields are required!");
            return;
        }
        // Update logic can be implemented later.
        resetForm();
    };

    const handleDelete = (fieldCode: string) => {
        if (window.confirm("Are you sure you want to delete this field?")) {
            dispatch(deleteField(fieldCode));
            dispatch(getFields())
        }
    };

    const resetForm = () => {
        setFieldCode("");
        setFieldName("");
        setLocation("");
        setExtentSize("");
        setFieldImage("");
        setIsEditing(false);
    };

    return (
        <div className="p-6">
            <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                    type="text"
                    placeholder="Field Code"
                    value={fieldCode}
                    onChange={(e) => setFieldCode(e.target.value)}
                    className="border p-2 rounded"
                />
                <input
                    type="text"
                    placeholder="Field Name"
                    value={fieldName}
                    onChange={(e) => setFieldName(e.target.value)}
                    className="border p-2 rounded"
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="border p-2 rounded"
                />
                <input
                    type="text"
                    placeholder="Extent Size"
                    value={extentSize}
                    onChange={(e) => setExtentSize(e.target.value)}
                    className="border p-2 rounded"
                />
                <input
                    type="text"
                    placeholder="Field Image URL"
                    value={fieldImage}
                    onChange={(e) => setFieldImage(e.target.value)}
                    className="border p-2 rounded"
                />
            </div>
            <div className="flex justify-end">
                {isEditing ? (
                    <button onClick={handleUpdate} className="bg-blue-500 text-white p-2 rounded mr-2">
                        Update
                    </button>
                ) : (
                    <button onClick={handleAdd} className="bg-green-500 text-white p-2 rounded mr-2">
                        Add
                    </button>
                )}
                {isEditing && (
                    <button onClick={resetForm} className="bg-gray-500 text-white p-2 rounded">
                        Cancel
                    </button>
                )}
            </div>

            <table className="min-w-full table-auto border-collapse mt-6">
                <thead>
                <tr className="bg-teal-600 text-white">
                    <th className="border px-4 py-2">Field Code</th>
                    <th className="border px-4 py-2">Field Name</th>
                    <th className="border px-4 py-2">Location</th>
                    <th className="border px-4 py-2">Extent Size</th>
                    <th className="border px-4 py-2">Field Image</th>
                    <th className="border px-4 py-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {fields.map((field: any, index: number) => (
                    <tr
                        key={index}
                        onClick={() => handleEdit(field)}
                        className="hover:cursor-pointer hover:bg-slate-600 hover:text-white"
                    >
                        <td className="border px-4 py-2">{field.fieldCode}</td>
                        <td className="border px-4 py-2">{field.fieldName}</td>
                        <td className="border px-4 py-2">{field.location}</td>
                        <td className="border px-4 py-2">{field.extentSize}</td>
                        <td className="border px-4 py-2">{field.fieldImage}</td>
                        <td className="border px-4 py-2 text-center">
                            <button onClick={() => handleDelete(field.fieldName)} className="bg-red-500 text-white p-2 rounded-lg">
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

export default AddNewField;
