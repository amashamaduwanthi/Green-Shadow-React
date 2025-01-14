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
            <div className="bg-white shadow-md rounded-lg p-6 m-4">
                <h1 className="text-2xl font-bold text-gray-500 mb-6">Add Staff Member</h1>
                <form>
                    <label>staff Id: <input type="text" name="staffId" value={staffId}
                                            onChange={(e) => setStaffId(e.target.value)}/></label><br/>
                    <label> First Name: <input type="text" name="FirstName"
                                               value={FirstName}
                                               onChange={(e) => setFirstName(e.target.value)}/></label><br/>
                    <label>Last Name: <input type="text" name="LastName" value={LastName}
                                             onChange={(e) => setLastName(e.target.value)}/></label><br/>
                    <label>Designation: <input type="text" name="Designation" value={Designation}
                                               onChange={(e) => setDesignation(e.target.value)}/></label><br/>
                    <label>Gender: <input type="text" name="Gender" value={Gender}
                                          onChange={(e) => setGender(e.target.value)}/></label><br/>
                    <label>Joined date: <input type="text" name="JoinedDate" value={JoinedDate}
                                               onChange={(e) => setJoinedDate(e.target.value)}/></label><br/>
                    <label>DOB: <input type="text" name="DOB" value={DOB}
                                       onChange={(e) => setDOB(e.target.value)}/></label><br/>
                    <label>Address: <input type="text" name="Address" value={Address}
                                           onChange={(e) => setAddress(e.target.value)}/></label><br/>
                    <label>Contact no: <input type="text" name="Contact" value={Contact}
                                              onChange={(e) => setContact(e.target.value)}/></label><br/>
                    <label>Email: <input type="text" name="Email" value={Email}
                                         onChange={(e) => setEmail(e.target.value)}/></label><br/>
                    <label>Role: <input type="text" name="Role" value={Role}
                                        onChange={(e) => setRole(e.target.value)}/></label><br/>
                    <label>Vehicle Code: <input type="text" name="VehicleCode" value={VehicleCode}
                                                onChange={(e) => setVehicleCode(e.target.value)}/></label><br/>

                    <button type="submit" onClick={handleSubmitStaff}>Add Equipment</button>
                </form>
            </div>
            <ul>
                {staff.map((staffDetails: any, index: number) => (
                    <li key={index}>
                        {staffDetails.staffId}, {staffDetails.FirstName},{staffDetails.LastName},{staffDetails.Designation},{staffDetails.Gender},{staffDetails.JoinedDate},{staffDetails.DOB},{staffDetails.Address},{staffDetails.Contact},{staffDetails.Email},{staffDetails.Role},{staffDetails.VehicleCode}
                    </li>
                ))}
            </ul>
        </>
    )
}