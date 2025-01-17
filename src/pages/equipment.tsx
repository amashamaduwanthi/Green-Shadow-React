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
        alert("Equipment Deleted");
    }


    return (
        <>
            <br/>
            <div className="bg-white shadow-md rounded-lg p-6 m-4">
                <h1 className="text-2xl font-bold text-teal-900 mb-6 flex items-center gap-2">
                    <i className="fas fa-tools text-yellow-500 text-3xl"></i>
                    Equipment
                </h1>


                <Link to="/equipment/Add">
                <button
                        className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-500 transition duration-300 mb-4">
                        Add Equipment
                    </button>
                </Link>


                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Enter the equipment Name"
                        value={deleteEquipmentName}
                        onChange={(e) => setDeleteEquipmentName(e.target.value)}
                        className="w-2000 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none mb-2"
                    />
                    <button
                        onClick={handleDeleteEquipment}
                        className="bg-red-600 text-white px-6 py-2 rounded-lg  transition duration-300 mb-4"
                    >
                        Delete Equipment
                    </button>
                </div>

                <br/>
                <ul className="list-disc pl-6">
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