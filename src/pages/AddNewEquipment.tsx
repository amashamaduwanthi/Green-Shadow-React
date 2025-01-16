import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addNewEquipment} from "../redux/slices/equipmentSlice.ts";

export function AddNewEquipment(){
    const equipment=useSelector((state:any)=>state.equipment);
    const dispatch = useDispatch();

    const [EquipmentId, setEquipmentId] = useState('');
    const [Name, setName] = useState('');
    const [Type, setType] = useState('');
    const [Status, setStatus] = useState('');
    const [fieldCode, setFieldCode] = useState('');
    const [staffId, setStaffId] = useState('');

    function handleSubmitEquipment(event: React.FormEvent) {
        event.preventDefault();
        dispatch(addNewEquipment({EquipmentId,Name,Type,Status,fieldCode,staffId}))
        setEquipmentId('');
        setName('');
        setType('');
        setStatus('');
        setFieldCode('');
        setStaffId('');
    }
    return(
        <>
            <br/>
            <div className="flex flex-row flex-wrap justify-between items-start gap-6 px-6">
                {/* Form Section - Left Side */}
                <div className="bg-white shadow-xl rounded-lg p-6 max-w-lg w-full">
                    <h2 className="text-2xl font-semibold text-gray-500 mb-6">Add Equipment</h2>
                    <form className="space-y-4">
                        {/* Equipment ID */}
                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium">Equipment Id:</label>
                            <input
                                type="text"
                                name="equipment_id"
                                value={EquipmentId}
                                onChange={(e) => setEquipmentId(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none"
                            />
                        </div>

                        {/* Name */}
                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium">Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={Name}
                                onChange={(e) => setName(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none"
                            />
                        </div>

                        {/* Type */}
                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium">Type:</label>
                            <input
                                type="text"
                                name="type"
                                value={Type}
                                onChange={(e) => setType(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none"
                            />
                        </div>

                        {/* Status */}
                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium">Status:</label>
                            <input
                                type="text"
                                name="status"
                                value={Status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none"
                            />
                        </div>

                        {/* Field Code */}
                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium">Field Code:</label>
                            <input
                                type="text"
                                name="field_code"
                                value={fieldCode}
                                onChange={(e) => setFieldCode(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none"
                            />
                        </div>

                        {/* Staff ID */}
                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium">Staff Id:</label>
                            <input
                                type="text"
                                name="staff_id"
                                value={staffId}
                                onChange={(e) => setStaffId(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="mt-4">
                            <button
                                type="submit"
                                onClick={handleSubmitEquipment}
                                className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-500 transition duration-300"
                            >
                                Add Equipment
                            </button>
                        </div>
                    </form>
                </div>

                {/* Equipment Details Table */}
                <div className="bg-white shadow-xl rounded-lg p-6 max-w-7xl w-full">
                    <h2 className="text-2xl font-semibold text-teal-900 mb-6">Equipment Details</h2>
                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                        <thead>
                        <tr className="bg-gray-100 border-b">
                            <th className="px-4 py-2 text-left text-gray-700">Equipment ID</th>
                            <th className="px-4 py-2 text-left text-gray-700">Name</th>
                            <th className="px-4 py-2 text-left text-gray-700">Type</th>
                            <th className="px-4 py-2 text-left text-gray-700">Status</th>
                            <th className="px-4 py-2 text-left text-gray-700">Field Code</th>
                            <th className="px-4 py-2 text-left text-gray-700">Staff ID</th>
                        </tr>
                        </thead>
                        <tbody>
                        {equipment.map((equipmentDetails: any, index: number) => (
                            <tr key={index} className="border-b">
                                <td className="px-4 py-2">{equipmentDetails.EquipmentId}</td>
                                <td className="px-4 py-2">{equipmentDetails.Name}</td>
                                <td className="px-4 py-2">{equipmentDetails.Type}</td>
                                <td className="px-4 py-2">{equipmentDetails.Status}</td>
                                <td className="px-4 py-2">{equipmentDetails.fieldCode}</td>
                                <td className="px-4 py-2">{equipmentDetails.staffId}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}