import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addNewLog} from "../redux/slices/logSlice.ts";

export function AddNewMonitoringLog(){
   const log= useSelector((state:any) => state.Log)
    const dispatch = useDispatch();
    const[LogCode, setLogCode] = useState('');
    const[date, setDate] = useState('');
    const[LogDetails, setLogDetails] = useState('');
    const[ObservedImage, setObservedImage] = useState('');
    const [fieldCode, setFieldCode] = useState('');
    const [cropId, setCropId] = useState('');
    const [staffId, setStaffId] = useState('');

    function handleSubmitLog(event: React.FormEvent) {
        event.preventDefault();
        dispatch(addNewLog({LogCode,Date,LogDetails,ObservedImage,fieldCode,cropId,staffId}))
        setLogCode('');
        setDate('')
        setLogDetails('');
        setObservedImage('');
        setFieldCode('');
        setCropId('');
        setStaffId('');
    }

    return (
        <>
            <br/>
            <div className="flex flex-row justify-between items-start gap-2 pl-40">
                {/* Form Section - Left Side */}
                <div className="bg-white shadow-xl rounded-lg p-6 max-w-lg w-full">
                    <h2 className="text-2xl font-semibold text-teal-900 mb-6">Add New Monitoring Log</h2>
                    <form className="space-y-4 text-left">
                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium">Log Code:</label>
                            <input
                                type="text"
                                name="LogCode"
                                value={LogCode}
                                onChange={(e) => setLogCode(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label> Date:
                                <input
                                    type="date"
                                    name="date"
                                    value={date}
                                    onChange={(e) => setDate(new Date(e.target.value).toISOString())}
                                />
                            </label>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium">Log Details:</label>
                            <input
                                type="text"
                                name="LogDetails"
                                value={LogDetails}
                                onChange={(e) => setLogDetails(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium">Observed Image URL:</label>
                            <input
                                type="text"
                                name="ObservedImage"
                                value={ObservedImage}
                                onChange={(e) => setObservedImage(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none"
                            />
                        </div>

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

                        <div className="mt-4">
                            <button
                                type="submit"
                                onClick={handleSubmitLog}
                                className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-500 transition duration-300"
                            >
                                Add Log
                            </button>
                        </div>
                    </form>
                </div>

                {/* Table Section - Right Side */}
                <div className="bg-white shadow-xl rounded-lg p-6 max-w-7xl w-full">
                    <h2 className="text-2xl font-semibold text-teal-900 mb-6">Monitoring Log Details</h2>
                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                        <thead>
                        <tr className="bg-gray-100 border-b">
                            <th className="px-4 py-2 text-left text-gray-700">Log Code</th>
                            <th className="px-4 py-2 text-left text-gray-700">Date</th>
                            <th className="px-4 py-2 text-left text-gray-700">Log Details</th>
                            <th className="px-4 py-2 text-left text-gray-700">Observed Image</th>
                            <th className="px-4 py-2 text-left text-gray-700">Field Code</th>
                            <th className="px-4 py-2 text-left text-gray-700">Crop ID</th>
                            <th className="px-4 py-2 text-left text-gray-700">Staff ID</th>
                        </tr>
                        </thead>
                        <tbody>
                        {log.map((logDetails: any, index: number) => (
                            <tr key={index} className="border-b">
                                <td className="px-4 py-2">{logDetails.LogCode}</td>
                                <td className="px-4 py-2">{logDetails.date}</td>
                                <td className="px-4 py-2">{logDetails.LogDetails}</td>
                                <td className="px-4 py-2">{logDetails.ObservedImage}</td>
                                <td className="px-4 py-2">{logDetails.fieldCode}</td>
                                <td className="px-4 py-2">{logDetails.cropId}</td>
                                <td className="px-4 py-2">{logDetails.staffId}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}