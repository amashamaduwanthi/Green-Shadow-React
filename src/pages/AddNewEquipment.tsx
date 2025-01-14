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
            <div className="bg-white shadow-md rounded-lg p-6 m-4">
                <h1 className="text-2xl font-bold text-gray-500 mb-6">Add Equipment</h1>
                <form>
                    <label>Equipment Id: <input type="text" name="equipment_id" value={EquipmentId}
                                                onChange={(e) => setEquipmentId(e.target.value)}/></label><br/>
                    <label> Name: <input type="text" name="name" value={Name}
                                         onChange={(e) => setName(e.target.value)}/></label><br/>
                    <label>Type: <input type="text" name="type" value={Type}
                                        onChange={(e) => setType(e.target.value)}/></label><br/>
                    <label>Status: <input type="text" name="status" value={Status}
                                          onChange={(e) => setStatus(e.target.value)}/></label><br/>
                    <label>Field Code: <input type="text" name="field_code" value={fieldCode}
                                              onChange={(e) => setFieldCode(e.target.value)}/></label><br/>
                    <label>Staff Id: <input type="text" name="staff_id" value={staffId}
                                            onChange={(e) => setStaffId(e.target.value)}/></label><br/>
                    <button type="submit" onClick={handleSubmitEquipment}>Add Equipment</button>
                </form>
            </div>
            <ul>
                {equipment.map((equipmentDetails: any, index: number) => (
                    <li key={index}>
                        {equipmentDetails.EquipmentId}, {equipmentDetails.Name},{equipmentDetails.Type},{equipmentDetails.Status},{equipmentDetails.fieldCode},{equipmentDetails.staffId}
                    </li>
                ))}
            </ul>
        </>
    )
}