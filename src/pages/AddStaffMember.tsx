import { Trash2 } from "react-feather";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewStaff, deleteStaffMember, getStaffMembers } from "../redux/slices/staffReducer.ts";
import { AppDispatch } from "../redux/store.ts";
import { Staff } from "../model/Staff.ts";

function AddStaffMember() {
    const staff = useSelector((state: any) => state.staff);
    const dispatch = useDispatch<AppDispatch>();

    const [staffId, setStaffId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [fieldCode, setFieldCode] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        dispatch(getStaffMembers());
    }, [dispatch]);

    const handleAdd = () => {
        if (!staffId || !firstName || !lastName || !gender || !dob || !address || !contact || !email || !role || !fieldCode) {
            alert("All fields are required!");
            return;
        }
        const newStaff = new Staff(staffId, firstName, lastName, gender, dob, address, contact, email, role, fieldCode);
        dispatch(addNewStaff(newStaff));
        resetForm();
    };

    const handleEdit = (staff: any) => {
        setStaffId(staff.staffId);
        setFirstName(staff.firstName);
        setLastName(staff.lastName);
        setGender(staff.gender);
        setDob(staff.dob);
        setAddress(staff.address);
        setContact(staff.contact);
        setEmail(staff.email);
        setRole(staff.role);
        setFieldCode(staff.fieldCode);
        setIsEditing(true);
    };

    const handleUpdate = () => {
        if (!staffId || !firstName || !lastName || !gender || !dob || !address || !contact || !email || !role || !fieldCode) {
            alert("All fields are required!");
            return;
        }
        resetForm();
    };

    const handleDelete = (staffId: string) => {
        if (window.confirm("Are you sure you want to delete this staff member?")) {
            dispatch(deleteStaffMember(staffId));
            dispatch(getStaffMembers());
        }
    };

    const resetForm = () => {
        setStaffId("");
        setFirstName("");
        setLastName("");
        setGender("");
        setDob("");
        setAddress("");
        setContact("");
        setEmail("");
        setRole("");
        setFieldCode("");
        setIsEditing(false);
    };

    return (
        <div className="p-6">
            <div className="grid grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="Staff ID" value={staffId} onChange={(e) => setStaffId(e.target.value)} className="border p-2 rounded" />
                <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="border p-2 rounded" />
                <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} className="border p-2 rounded" />
                <input type="text" placeholder="Gender" value={gender} onChange={(e) => setGender(e.target.value)} className="border p-2 rounded" />
                <input type="text" placeholder="DOB" value={dob} onChange={(e) => setDob(e.target.value)} className="border p-2 rounded" />
                <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} className="border p-2 rounded" />
                <input type="text" placeholder="Contact No" value={contact} onChange={(e) => setContact(e.target.value)} className="border p-2 rounded" />
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 rounded" />
                <input type="text" placeholder="Role" value={role} onChange={(e) => setRole(e.target.value)} className="border p-2 rounded" />
                <input type="text" placeholder="Field Code" value={fieldCode} onChange={(e) => setFieldCode(e.target.value)} className="border p-2 rounded" />
            </div>
            <div className="flex justify-end">
                {isEditing ? (
                    <button onClick={handleUpdate} className="bg-blue-500 text-white p-2 rounded mr-2">Update</button>
                ) : (
                    <button onClick={handleAdd} className="bg-green-500 text-white p-2 rounded mr-2">Add</button>
                )}
                {isEditing && (
                    <button onClick={resetForm} className="bg-gray-500 text-white p-2 rounded">Cancel</button>
                )}
            </div>

            <table className="min-w-full table-auto border-collapse mt-6">
                <thead>
                <tr className="bg-teal-600 text-white">
                    <th className="border px-4 py-2">Staff ID</th>
                    <th className="border px-4 py-2">First Name</th>
                    <th className="border px-4 py-2">Last Name</th>
                    <th className="border px-4 py-2">Gender</th>
                    <th className="border px-4 py-2">DOB</th>
                    <th className="border px-4 py-2">Address</th>
                    <th className="border px-4 py-2">Contact</th>
                    <th className="border px-4 py-2">Email</th>
                    <th className="border px-4 py-2">Role</th>
                    <th className="border px-4 py-2">Field Code</th>
                    <th className="border px-4 py-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {staff.map((staffDetails: any, index: number) => (
                    <tr key={index} onClick={() => handleEdit(staffDetails)} className="hover:cursor-pointer hover:bg-slate-600 hover:text-white">
                        <td className="border px-4 py-2">{staffDetails.staffId}</td>
                        <td className="border px-4 py-2">{staffDetails.firstName}</td>
                        <td className="border px-4 py-2">{staffDetails.lastName}</td>
                        <td className="border px-4 py-2">{staffDetails.gender}</td>
                        <td className="border px-4 py-2">{staffDetails.dob}</td>
                        <td className="border px-4 py-2">{staffDetails.address}</td>
                        <td className="border px-4 py-2">{staffDetails.contact}</td>
                        <td className="border px-4 py-2">{staffDetails.email}</td>
                        <td className="border px-4 py-2">{staffDetails.role}</td>
                        <td className="border px-4 py-2">{staffDetails.fieldCode}</td>
                        <td className="border px-4 py-2 text-center">
                            <button onClick={() => handleDelete(staffDetails.staffId)} className="bg-red-500 text-white p-2 rounded-lg">
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

export default AddStaffMember;