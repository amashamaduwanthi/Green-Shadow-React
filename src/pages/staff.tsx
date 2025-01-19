import {Link} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {deleteStaff, updateStaff} from "../redux/slices/staffSlice.ts";


export function Staff() {
    const staff = useSelector((state: any) => state.staff);
    const dispatch = useDispatch();
    const [deleteStaffId,setDeleteStaffId] = useState('');

    const [searchStaffId,setSearchStaffId] = useState('');
    const [foundStaff,setFoundStaff] = useState<any | null>(null);

    const [newStaffFirstname, setNewStaffFirstName] = useState('');
    const [newStaffSecondname, setNewStaffSecondName] = useState('');
    const [newPosition, setNewPosition] = useState('');
    const [newGender, setNewGender] = useState('');
    const [newJoined_date, setNewJoined_date] = useState('');
    const [newdob, setNewdob] = useState('');
    const [newContact_no, setNewContact_no] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newAddress, setNewAddress] = useState('');
    const [newRole,setNewRole] = useState('');
    const [newVehicleId, setNewVehicleId] = useState('');

    function handleSearchStaff(event:React.FormEvent){
        event.preventDefault();
        const found = staff.find((s: any) => s.staffId === searchStaffId);
        if (found) {
            setFoundStaff(found);
            setNewStaffFirstName(found.FirstName);
            setNewStaffSecondName(found.LastName);
            setNewPosition(found.Designation);
            setNewGender(found.Gender);
            setNewJoined_date(found.JoinedDate);
            setNewdob(found.DOB);
            setNewContact_no(found.Contact);
            setNewEmail(found.Email);
            setNewAddress(found.Address);
            setNewRole(found.Role);
            setNewVehicleId(found.VehicleCode);
        } else {
            alert('staff not found.');
            setFoundStaff(null);
        }
    }
    function handleUpdateStaff(event: React.FormEvent) {
        event.preventDefault();

        if (foundStaff) {
            // Dispatch the update action with the correct payload structure
            dispatch(
                updateStaff({
                    staffId: foundStaff.staffId,
                    firstname: newStaffFirstname,
                    secondname: newStaffSecondname,
                    position: newPosition,
                    gender: newGender,
                    joined_date: newJoined_date,
                    dob: newdob,
                    address: newAddress,
                    contact_no: newContact_no,
                    email: newEmail,
                    role: newRole,
                    vehicleId: newVehicleId,
                })
            );

            alert("Staff updated successfully.");

            // Clear form inputs
            setNewStaffFirstName("");
            setNewStaffSecondName("");
            setNewPosition("");
            setNewGender("");
            setNewJoined_date("");
            setNewdob("");
            setNewContact_no("");
            setNewEmail("");
            setNewAddress("");
            setNewRole("");
            setNewVehicleId("");
        } else {
            alert("Staff not found.");
            setFoundStaff(null); // Reset foundStaff
        }
    }

    function handleDeleteStaffMember(event:React.FormEvent) {
        event.preventDefault();
        if(!deleteStaffId) {
            alert("Staff Not Found!");

        }
        dispatch(deleteStaff(deleteStaffId));
        alert("Deleted Successfully");

    }


    return (
        <>
            <br/>
            <div className="bg-white shadow-md rounded-lg p-6 m-4">
                <h1 className="text-2xl font-bold text-teal-900 mb-6 flex items-center gap-2">
                    <i className="fas fa-user-tie text-blue-500 text-3xl"></i>
                    Staff
                </h1>


                <Link to="/staff/Add">
                    <button
                        className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-500 transition duration-300 mb-4">
                        Add Staff
                    </button>
                </Link>

                <br/>
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Enter the Staff id"
                        value={deleteStaffId}
                        onChange={(e) => setDeleteStaffId(e.target.value)}
                        className="w-2000 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none mb-2"
                    />
                    <br/>
                    <div className="flex gap-4">
                        <button
                            onClick={handleDeleteStaffMember}
                            className="bg-red-600 text-white px-6 py-2 rounded-lg  transition duration-300 mb-4"
                        >
                            Delete Staff
                        </button>


                        <input type="text" placeholder="Staff ID to search" value={searchStaffId}
                               onChange={(e) => setSearchStaffId(e.target.value)}
                               className="w-64 h-10 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>
                        <button onClick={handleSearchStaff}
                                className="bg-blue-300 text-gray-800 font-medium py-2 px-4 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400">Search
                            Staff
                        </button>
                    </div>
                </div>

                <br/>
                <ul className="space-y-6">
                    {staff.map((staffDetails: any, index: number) => (
                        <li
                            key={index}
                            className={`flex items-center justify-between p-6 rounded-lg shadow-md ${
                                index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                            } hover:bg-teal-50 transition duration-200`}
                        >
                            <div className="flex items-center space-x-8">
                <span className="text-teal-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </span>
                                <div className="text-left">
                                    <p className="text-lg font-bold text-gray-800">
                                        {staffDetails.FirstName} {staffDetails.LastName} - {staffDetails.Designation}
                                    </p>
                                    <p className="text-base text-gray-700">
                                        <span
                                            className="font-semibold text-teal-800">Staff ID:</span> {staffDetails.staffId}
                                    </p>
                                    <p className="text-base text-gray-700">
                                        <span
                                            className="font-semibold text-teal-800">Gender:</span> {staffDetails.Gender}
                                    </p>
                                    <p className="text-base text-gray-700">
                                        <span
                                            className="font-semibold text-teal-800">Joined Date:</span> {staffDetails.JoinedDate}
                                    </p>
                                    <p className="text-base text-gray-700">
                                        <span className="font-semibold text-teal-800">DOB:</span> {staffDetails.DOB}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-10">
                                <p className="text-base text-gray-700">
                                    <span className="font-semibold text-teal-800">Address:</span> {staffDetails.Address}
                                </p>
                                <p className="text-base text-gray-700">
                                    <span className="font-semibold text-teal-800">Contact:</span> {staffDetails.Contact}
                                </p>
                                <p className="text-base text-gray-700">
                                    <span className="font-semibold text-teal-800">Email:</span> {staffDetails.Email}
                                </p>
                                <p className="text-base text-gray-700">
                                    <span className="font-semibold text-teal-800">Role:</span> {staffDetails.Role}
                                </p>
                                <p className="text-base text-gray-700">
                                    <span
                                        className="font-semibold text-teal-800">Vehicle Code:</span> {staffDetails.VehicleCode}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>

                {foundStaff && (
                    <div className="max-w-4xl mx-auto bg-gray-100 p-8 rounded-lg shadow-lg mt-8 text-left">
                        <h3 className="text-3xl font-bold text-gray-900 mb-6">Update Staff</h3>

                        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                            <h4 className="text-xl font-semibold text-gray-700 mb-4">Current Staff Details</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <p>
                                    <strong className="text-gray-600">First Name:</strong>{" "}
                                    <span className="text-gray-900">{foundStaff.FirstName}</span>
                                </p>
                                <p>
                                    <strong className="text-gray-600">Last Name:</strong>{" "}
                                    <span className="text-gray-900">{foundStaff.LastName}</span>
                                </p>
                                <p>
                                    <strong className="text-gray-600">Designation:</strong>{" "}
                                    <span className="text-gray-900">{foundStaff.Designation}</span>
                                </p>
                                <p>
                                    <strong className="text-gray-600">Gender:</strong>{" "}
                                    <span className="text-gray-900">{foundStaff.Gender}</span>
                                </p>
                                <p>
                                    <strong className="text-gray-600">Joined Date:</strong>{" "}
                                    <span className="text-gray-900">{foundStaff.JoinedDate}</span>
                                </p>
                                <p>
                                    <strong className="text-gray-600">DOB:</strong>{" "}
                                    <span className="text-gray-900">{foundStaff.DOB}</span>
                                </p>
                                <p>
                                    <strong className="text-gray-600">Address:</strong>{" "}
                                    <span className="text-gray-900">{foundStaff.Address}</span>
                                </p>
                                <p>
                                    <strong className="text-gray-600">Email:</strong>{" "}
                                    <span className="text-gray-900">{foundStaff.Email}</span>
                                </p>
                                <p>
                                    <strong className="text-gray-600">Contact:</strong>{" "}
                                    <span className="text-gray-900">{foundStaff.Contact}</span>
                                </p>
                                <p>
                                    <strong className="text-gray-600">Role:</strong>{" "}
                                    <span className="text-gray-900">{foundStaff.Role}</span>
                                </p>
                                <p>
                                    <strong className="text-gray-600">Vehicle ID:</strong>{" "}
                                    <span className="text-gray-900">{foundStaff.VehicleCode}</span>
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h4 className="text-xl font-semibold text-gray-700 mb-4">Update Staff Details</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                <input
                                    type="text"
                                    value={newStaffFirstname}
                                    onChange={(e) => setNewStaffFirstName(e.target.value)}
                                    placeholder="New Staff first Name"
                                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                <input
                                    type="text"
                                    value={newStaffSecondname}
                                    onChange={(e) => setNewStaffSecondName(e.target.value)}
                                    placeholder="New Staff second Name"
                                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                <input
                                    type="text"
                                    value={newPosition}
                                    onChange={(e) => setNewPosition(e.target.value)}
                                    placeholder="New Position"
                                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                <input
                                    type="text"
                                    value={newGender}
                                    onChange={(e) => setNewGender(e.target.value)}
                                    placeholder="New Gender"
                                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                <input
                                    type="date"
                                    value={newJoined_date}
                                    onChange={(e) => setNewJoined_date(e.target.value)}
                                    placeholder="New Joined Date"
                                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                <input
                                    type="date"
                                    value={newdob}
                                    onChange={(e) => setNewdob(e.target.value)}
                                    placeholder="New Date of Birth"
                                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                <input
                                    type="text"
                                    value={newContact_no}
                                    onChange={(e) => setNewContact_no(e.target.value)}
                                    placeholder="New Contact No"
                                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                <input
                                    type="email"
                                    value={newEmail}
                                    onChange={(e) => setNewEmail(e.target.value)}
                                    placeholder="New Email"
                                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                <input
                                    type="text"
                                    value={newAddress}
                                    onChange={(e) => setNewAddress(e.target.value)}
                                    placeholder="New Address"
                                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                <input
                                    type="text"
                                    value={newRole}
                                    onChange={(e) => setNewRole(e.target.value)}
                                    placeholder="New Role"
                                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                <input
                                    type="text"
                                    value={newVehicleId}
                                    onChange={(e) => setNewVehicleId(e.target.value)}
                                    placeholder="New Vehicle ID"
                                    className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                        </div>

                        <button
                            onClick={handleUpdateStaff}
                            className="w-full bg-indigo-600 text-white py-3 px-4 mt-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        >
                            Update Staff
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}