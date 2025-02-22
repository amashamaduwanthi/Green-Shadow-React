import {Link} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {deleteStaffMember, getStaffMembers} from "../redux/slices/staffReducer.ts";
import {AppDispatch} from "../redux/store.ts";
import Swal from "sweetalert2";


export function Staff() {
    const staff = useSelector((state: any) => state.staff);
    const dispatch = useDispatch<AppDispatch>();
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
    useEffect(() => {
        dispatch(getStaffMembers());
    }, [dispatch]);

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
            Swal.fire({
                icon: "Not Found",
                title: "Not Found!",
                text: "Not Found!",
                confirmButtonColor: "#3085d6",
            })
        }
    }

    function handleDeleteStaffMember(event:React.FormEvent) {
        event.preventDefault();
        if(!deleteStaffId) {
            Swal.fire({
                icon: "Not Found",
                title: "Not Found!",
                text: "Not Found!",
                confirmButtonColor: "#3085d6",
            })

        }
        dispatch(deleteStaffMember(deleteStaffId));
        Swal.fire({
            icon: "success",
            title: "Delete Successful!",
            text: "Delete Successfully!",
            confirmButtonColor: "#3085d6",
        })

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
                                        {staffDetails.firstName} {staffDetails.lastName}
                                    </p>
                                    <p className="text-base text-gray-700">
                                        <span
                                            className="font-semibold text-teal-800">Staff ID:</span> {staffDetails.staffId}
                                    </p>
                                    <p className="text-base text-gray-700">
                                        <span
                                            className="font-semibold text-teal-800">Gender:</span> {staffDetails.gender}
                                    </p>

                                    <p className="text-base text-gray-700">
                                        <span className="font-semibold text-teal-800">DOB:</span> {staffDetails.dob}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-10">
                                <p className="text-base text-gray-700">
                                    <span className="font-semibold text-teal-800">Address:</span> {staffDetails.address}
                                </p>
                                <p className="text-base text-gray-700">
                                    <span className="font-semibold text-teal-800">Contact:</span> {staffDetails.contactNo}
                                </p>
                                <p className="text-base text-gray-700">
                                    <span className="font-semibold text-teal-800">Email:</span> {staffDetails.email}
                                </p>
                                <p className="text-base text-gray-700">
                                    <span className="font-semibold text-teal-800">Role:</span> {staffDetails.role}
                                </p>
                                <p className="text-base text-gray-700">
                                    <span
                                        className="font-semibold text-teal-800">Field Code:</span> {staffDetails.fieldCode}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>

                {foundStaff && (
                    <div className="max-w-4xl mx-auto bg-gray-100 p-8 rounded-lg shadow-lg mt-8 text-left">
                        <h3 className="text-3xl font-bold text-gray-900 mb-6"> Staff</h3>

                        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                            <h4 className="text-xl font-semibold text-gray-700 mb-4">Current Staff Details</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <p>
                                    <strong className="text-gray-600">First Name:</strong>{" "}
                                    <span className="text-gray-900">{foundStaff.firstName}</span>
                                </p>
                                <p>
                                    <strong className="text-gray-600">Last Name:</strong>{" "}
                                    <span className="text-gray-900">{foundStaff.lastName}</span>
                                </p>
                                <p>
                                    <strong className="text-gray-600">Gender:</strong>{" "}
                                    <span className="text-gray-900">{foundStaff.gender}</span>
                                </p>
                                <p>
                                    <strong className="text-gray-600">DOB:</strong>{" "}
                                    <span className="text-gray-900">{foundStaff.dob}</span>
                                </p>
                                <p>
                                    <strong className="text-gray-600">Address:</strong>{" "}
                                    <span className="text-gray-900">{foundStaff.address}</span>
                                </p>
                                <p>
                                    <strong className="text-gray-600">Email:</strong>{" "}
                                    <span className="text-gray-900">{foundStaff.email}</span>
                                </p>
                                <p>
                                    <strong className="text-gray-600">Contact:</strong>{" "}
                                    <span className="text-gray-900">{foundStaff.contactNo}</span>
                                </p>
                                <p>
                                    <strong className="text-gray-600">Role:</strong>{" "}
                                    <span className="text-gray-900">{foundStaff.role}</span>
                                </p>
                                <p>
                                    <strong className="text-gray-600">Field Code:</strong>{" "}
                                    <span className="text-gray-900">{foundStaff.fieldCode}</span>
                                </p>
                            </div>
                        </div>



                    </div>
                )}
            </div>
        </>
    )
}