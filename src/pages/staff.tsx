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
                <h1 className="text-2xl font-bold text-gray-500 mb-6">Staff</h1>

                <Link to="/staff/Add">
                    <button>Add Staff</button>
                </Link>
                <input type="text" placeholder="enter the Staff Id" value={deleteStaffId}
                       onChange={(e) => setDeleteStaffId(e.target.value)}/>

                <button onClick={handleDeleteStaffMember}>Delete Staff</button>
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