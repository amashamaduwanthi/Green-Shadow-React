import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addNewField} from "../redux/slices/fieldSlice.ts";

export  function AddNewField() {

    const field=useSelector((state:any)=>state.field);
    const dispatch = useDispatch();

    const [fieldCode, setFieldCode] = useState('');
    const [fieldName, setFieldName] = useState('');
    const [fieldLocation,setLocation] = useState('');
    const [ExtentSize, setFExtentSize] = useState('');
    const [cropId, setCropId] = useState('');
    const [staffId, setStaffId] = useState('');
    const [FieldImage1, setFieldImage1] = useState('');
    const [FieldImage2, setFieldImage2] = useState('');

function handleSubmitField(event: React.FormEvent) {
    event.preventDefault();
    dispatch(addNewField({fieldCode,fieldName,fieldLocation,ExtentSize,cropId,staffId,FieldImage1,FieldImage2}))
    setFieldCode('');
    setFieldName('');
    setLocation('');
    setFExtentSize('')
    setCropId('')
    setStaffId('')
    setFieldImage1('')
    setFieldImage2('')


}
    return (
        <>
            <br/>
            <div className="flex flex-row justify-between items-start gap-2 pl-40">
                {/* Form Section - Left Side */}
                <div className="bg-white shadow-xl rounded-lg p-6 max-w-lg w-full">
                    <h2 className="text-2xl font-semibold text-teal-900 mb-6">Add New Field</h2>
                    <form className="space-y-4 text-left">
                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium">Field Code:</label>
                            <input
                                type="text"
                                name="fieldCode"
                                value={fieldCode}
                                onChange={(e) => setFieldCode(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium">Field Name:</label>
                            <input
                                type="text"
                                name="fieldName"
                                value={fieldName}
                                onChange={(e) => setFieldName(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium">Location:</label>
                            <input
                                type="text"
                                name="location"
                                value={fieldLocation}
                                onChange={(e) => setLocation(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium">Extent Size:</label>
                            <input
                                type="text"
                                name="ExtentSize"
                                value={ExtentSize}
                                onChange={(e) => setFExtentSize(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium">Crop ID:</label>
                            <input
                                type="text"
                                name="crop_id"
                                value={cropId}
                                onChange={(e) => setCropId(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium">Staff ID:</label>
                            <input
                                type="text"
                                name="staff_id"
                                value={staffId}
                                onChange={(e) => setStaffId(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium">Field Image 1:</label>
                            <input
                                type="text"
                                name="FieldImage1"
                                value={FieldImage1}
                                onChange={(e) => setFieldImage1(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium">Field Image 2:</label>
                            <input
                                type="text"
                                name="FieldImage2"
                                value={FieldImage2}
                                onChange={(e) => setFieldImage2(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none"
                            />
                        </div>

                        <div className="mt-4">
                            <button
                                type="submit"
                                onClick={handleSubmitField}
                                className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-500 transition duration-300"
                            >
                                Add Field
                            </button>
                        </div>
                    </form>
                </div>

                {/* Table Section - Right Side */}
                <div className="bg-white shadow-xl rounded-lg p-6 max-w-7xl w-full">
                    <h2 className="text-2xl font-semibold text-teal-900 mb-6">Field Details</h2>
                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                        <thead>
                        <tr  className="bg-teal-600 text-white">
                            <th className="px-4 py-2 text-left text-gray-700">Field Code</th>
                            <th className="px-4 py-2 text-left text-gray-700">Field Name</th>
                            <th className="px-4 py-2 text-left text-gray-700">Location</th>
                            <th className="px-4 py-2 text-left text-gray-700">Extent Size</th>
                            <th className="px-4 py-2 text-left text-gray-700">Crop ID</th>
                            <th className="px-4 py-2 text-left text-gray-700">Staff ID</th>
                            <th className="px-4 py-2 text-left text-gray-700">Field Image 1</th>
                            <th className="px-4 py-2 text-left text-gray-700">Field Image 2</th>
                        </tr>
                        </thead>
                        <tbody>
                        {field.map((fieldDetails: any, index: number) => (
                            <tr key={index} className="border-b">
                                <td className="px-4 py-2">{fieldDetails.fieldCode}</td>
                                <td className="px-4 py-2">{fieldDetails.fieldName}</td>
                                <td className="px-4 py-2">{fieldDetails.fieldLocation}</td>
                                <td className="px-4 py-2">{fieldDetails.ExtentSize}</td>
                                <td className="px-4 py-2">{fieldDetails.cropId}</td>
                                <td className="px-4 py-2">{fieldDetails.staffId}</td>
                                <td className="px-4 py-2">{fieldDetails.FieldImage1}</td>
                                <td className="px-4 py-2">{fieldDetails.FieldImage2}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

            );
        </>
    )
}