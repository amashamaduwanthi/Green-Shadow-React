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
            <div className="flex flex-row justify-between items-start gap-2 pl-40">
                {/* Form Section - Left Side */}
                <div className="bg-white shadow-xl rounded-lg p-6 max-w-lg w-full">
                    <h2 className="text-2xl font-semibold text-teal-900 mb-6">Add New Vehicle</h2>
                    <form className="space-y-4 text-left">
                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium">Vehicle Code:</label>
                            <input
                                type="text"
                                name="VehicleCode"
                                value={VehicleCode}
                                onChange={(e) => setVehicleCode(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium">License Plate Number:</label>
                            <input
                                type="text"
                                name="LicensePlateNumber"
                                value={LicensePlateNumber}
                                onChange={(e) => setLicensePlateNumber(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium">Category:</label>
                            <input
                                type="text"
                                name="category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium">Fuel Type:</label>
                            <input
                                type="text"
                                name="FuelType"
                                value={FuelType}
                                onChange={(e) => setFuelType(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none"
                            />
                        </div>

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
                            <label className="text-gray-700 font-medium">Remarks:</label>
                            <input
                                type="text"
                                name="Remarks"
                                value={Remarks}
                                onChange={(e) => setRemarks(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none"
                            />
                        </div>

                        <div className="mt-4">
                            <button
                                type="submit"
                                onClick={handleSubmitVehicle}
                                className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-500 transition duration-300"
                            >
                                Add Vehicle
                            </button>
                        </div>
                    </form>
                </div>

                {/* Table Section - Right Side */}
                <div className="bg-white shadow-xl rounded-lg p-6 max-w-7xl w-full">
                    <h2 className="text-2xl font-semibold text-teal-900 mb-6">Vehicle Details</h2>
                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                        <thead>
                        <tr className="bg-gray-100 border-b">
                            <th className="px-4 py-2 text-left text-gray-700">Vehicle Code</th>
                            <th className="px-4 py-2 text-left text-gray-700">License Plate Number</th>
                            <th className="px-4 py-2 text-left text-gray-700">Category</th>
                            <th className="px-4 py-2 text-left text-gray-700">Fuel Type</th>
                            <th className="px-4 py-2 text-left text-gray-700">Status</th>
                            <th className="px-4 py-2 text-left text-gray-700">Staff ID</th>
                            <th className="px-4 py-2 text-left text-gray-700">Remarks</th>
                        </tr>
                        </thead>
                        <tbody>
                        {vehicle.map((vehicleDetails: any, index: number) => (
                            <tr key={index} className="border-b">
                                <td className="px-4 py-2">{vehicleDetails.VehicleCode}</td>
                                <td className="px-4 py-2">{vehicleDetails.LicensePlateNumber}</td>
                                <td className="px-4 py-2">{vehicleDetails.category}</td>
                                <td className="px-4 py-2">{vehicleDetails.FuelType}</td>
                                <td className="px-4 py-2">{vehicleDetails.Status}</td>
                                <td className="px-4 py-2">{vehicleDetails.staffId}</td>
                                <td className="px-4 py-2">{vehicleDetails.Remarks}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>

    )
}