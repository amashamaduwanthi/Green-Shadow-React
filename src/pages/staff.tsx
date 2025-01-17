import {Link} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {deleteStaff} from "../redux/slices/staffSlice.ts";


export function Staff() {
    const staff = useSelector((state: any) => state.staff);
    const dispatch = useDispatch();
    const [deleteStaffId,setDeleteStaffId] = useState('');

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
                    <button
                        onClick={handleDeleteStaffMember}
                        className="bg-red-600 text-white px-6 py-2 rounded-lg  transition duration-300 mb-4"
                    >
                        Delete Staff
                    </button>
                </div>

                <br/>
                <ul>
                    {staff.map((staffDetails: any, index: number) => (
                        <li key={index}>
                            {staffDetails.staffId}, {staffDetails.FirstName},{staffDetails.LastName},{staffDetails.Designation},{staffDetails.Gender},{staffDetails.JoinedDate},{staffDetails.DOB},{staffDetails.Address},{staffDetails.Contact},{staffDetails.Email},{staffDetails.Role},{staffDetails.VehicleCode}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}