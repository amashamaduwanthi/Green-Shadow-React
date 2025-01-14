import {Link} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {deleteEquipment} from "../redux/slices/equipmentSlice.ts";

export function Equipment(){
    const equipment = useSelector((state: any) => state.equipment);
    const dispatch = useDispatch();
    const [deleteEquipmentName,setDeleteEquipmentName] = useState('');

    function handleDeleteEquipment(event: React.FormEvent){
        event.preventDefault();
        if(!deleteEquipmentName){
            alert("Equipment Not Found");
        }
        dispatch(deleteEquipment(deleteEquipmentName));
    }


    return (
        <>
            <br/>
            <div className="bg-white shadow-md rounded-lg p-6 m-4">
                <h1 className="text-2xl font-bold text-gray-500 mb-6">Equipment</h1>
                <Link to='/equipment/Add'>
                    <button>Add Equipment</button>
                </Link>
                <input type="text" placeholder="enter the Equipment Name" value={deleteEquipmentName}
                       onChange={(e) => setDeleteEquipmentName(e.target.value)}/>

                <button onClick={handleDeleteEquipment}>Delete Euipment</button>
                <br/>
                <ul>
                    {equipment.map((equipmentDetails: any, index: number) => (
                        <li key={index}>
                            {equipmentDetails.EquipmentId}, {equipmentDetails.Name},{equipmentDetails.Type},{equipmentDetails.Status},{equipmentDetails.fieldCode},{equipmentDetails.staffId}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}