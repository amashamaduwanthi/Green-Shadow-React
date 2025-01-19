import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addNewStaff} from "../redux/slices/staffSlice.ts";

export function AddStaffMember() {
    const staff = useSelector((state:any)=>state.staff);
    const dispatch = useDispatch();
    const [staffId, setStaffId] = useState('');
    const [FirstName,setFirstName] = useState('');
    const [LastName,setLastName] = useState('');
    const [Designation,setDesignation] = useState('');
    const [Gender,setGender] = useState('');
    const [JoinedDate,setJoinedDate] = useState('');
    const [DOB,setDOB] = useState('');
    const [Address,setAddress] = useState('');
    const [Contact,setContact] = useState('');
    const [Email,setEmail] = useState('');
    const [Role,setRole] = useState('');
    const [VehicleCode,setVehicleCode] = useState('');


    function handleSubmitStaff(event: React.FormEvent) {
        event.preventDefault();
        dispatch(addNewStaff({staffId,FirstName,LastName,Designation,Gender,JoinedDate,DOB,Address,Contact,Email,Role,VehicleCode}))
        setStaffId('');
        setFirstName('');
        setLastName('');
        setDesignation('');
        setGender('');
        setJoinedDate('');
        setDOB('');
        setAddress('');
        setContact('');
        setEmail('');
        setRole('');
        setVehicleCode('');

    }

    return (
        <>
            <div className="flex flex-row flex-wrap justify-between items-start gap-6 px-6">
                {/* Form Section - Left Side */}
                <div className="bg-white shadow-xl rounded-lg p-6 max-w-lg w-full">
                    <h2 className="text-2xl font-semibold text-teal-900 mb-6">Add Staff Member</h2>
                    <form className="space-y-4">
                        {/* Staff ID */}
                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium">Staff ID:</label>
                            <input
                                type="text"
                                name="staffId"
                                value={staffId}
                                onChange={(e) => setStaffId(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none"
                            />
                        </div>

                        {/* First Name */}
                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium">First Name:</label>
                            <input
                                type="text"
                                name="FirstName"
                                value={FirstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none"
                            />
                        </div>

                        {/* Last Name */}
                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium">Last Name:</label>
                            <input
                                type="text"
                                name="LastName"
                                value={LastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none"
                            />
                        </div>

                        {/* Designation */}
                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium">Designation:</label>
                            <input
                                type="text"
                                name="Designation"
                                value={Designation}
                                onChange={(e) => setDesignation(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none"
                            />
                        </div>

                        {/* Gender */}
                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium">Gender:</label>
                            <input
                                type="text"
                                name="Gender"
                                value={Gender}
                                onChange={(e) => setGender(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none"
                            />
                        </div>

                        {/* Joined Date */}
                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium">Joined Date:</label>
                            <input
                                type="text"
                                name="JoinedDate"
                                value={JoinedDate}
                                onChange={(e) => setJoinedDate(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none"
                            />
                        </div>

                        {/* DOB */}
                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium">DOB:</label>
                            <input
                                type="text"
                                name="DOB"
                                value={DOB}
                                onChange={(e) => setDOB(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none"
                            />
                        </div>

                        {/* Address */}
                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium">Address:</label>
                            <input
                                type="text"
                                name="Address"
                                value={Address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none"
                            />
                        </div>

                        {/* Contact */}
                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium">Contact No:</label>
                            <input
                                type="text"
                                name="Contact"
                                value={Contact}
                                onChange={(e) => setContact(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium">Email:</label>
                            <input
                                type="text"
                                name="Email"
                                value={Email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none"
                            />
                        </div>

                        {/* Role */}
                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium">Role:</label>
                            <input
                                type="text"
                                name="Role"
                                value={Role}
                                onChange={(e) => setRole(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none"
                            />
                        </div>

                        {/* Vehicle Code */}
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

                        <div className="mt-4">
                            <button
                                type="submit"
                                onClick={handleSubmitStaff}
                                className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-500 transition duration-300"
                            >
                                Add Staff Member
                            </button>
                        </div>
                    </form>
                </div>

                {/* Staff Details Table */}
                <div className="bg-white shadow-xl rounded-lg p-6 max-w-7xl w-full">
                    <h2 className="text-2xl font-semibold text-teal-900 mb-6">Staff Details</h2>
                    <table className="min-w-full table-auto border-collapse border border-gray-300">
                        <thead>
                        <tr  className="bg-teal-600 text-white">
                            <th className="px-4 py-2 text-left text-gray-700">Staff ID</th>
                            <th className="px-4 py-2 text-left text-gray-700">First Name</th>
                            <th className="px-4 py-2 text-left text-gray-700">Last Name</th>
                            <th className="px-4 py-2 text-left text-gray-700">Designation</th>
                            <th className="px-4 py-2 text-left text-gray-700">Gender</th>
                            <th className="px-4 py-2 text-left text-gray-700">Joined Date</th>
                            <th className="px-4 py-2 text-left text-gray-700">DOB</th>
                            <th className="px-4 py-2 text-left text-gray-700">Address</th>
                            <th className="px-4 py-2 text-left text-gray-700">Contact</th>
                            <th className="px-4 py-2 text-left text-gray-700">Email</th>
                            <th className="px-4 py-2 text-left text-gray-700">Role</th>
                            <th className="px-4 py-2 text-left text-gray-700">Vehicle Code</th>
                        </tr>
                        </thead>
                        <tbody>
                        {staff.map((staffDetails: any, index: number) => (
                            <tr key={index} className="border-b">
                                <td className="px-4 py-2">{staffDetails.staffId}</td>
                                <td className="px-4 py-2">{staffDetails.FirstName}</td>
                                <td className="px-4 py-2">{staffDetails.LastName}</td>
                                <td className="px-4 py-2">{staffDetails.Designation}</td>
                                <td className="px-4 py-2">{staffDetails.Gender}</td>
                                <td className="px-4 py-2">{staffDetails.JoinedDate}</td>
                                <td className="px-4 py-2">{staffDetails.DOB}</td>
                                <td className="px-4 py-2">{staffDetails.Address}</td>
                                <td className="px-4 py-2">{staffDetails.Contact}</td>
                                <td className="px-4 py-2">{staffDetails.Email}</td>
                                <td className="px-4 py-2">{staffDetails.Role}</td>
                                <td className="px-4 py-2">{staffDetails.VehicleCode}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}