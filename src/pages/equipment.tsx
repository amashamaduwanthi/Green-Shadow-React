import {Link} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {deleteEquipment} from "../redux/slices/equipmentSlice.ts";


export function Equipment(){
    const equipment = useSelector((state: any) => state.equipment);
    const dispatch = useDispatch();
    const [deleteEquipmentName,setDeleteEquipmentName] = useState('');

    const [searchEquipmentName,setSearchEquipmentName] = useState('');
    const [foundEquipment,setFoundEquipment] = useState<any | null>(null);

    const [newEquipmentId, setNewEquipmentId] = useState('');
    const [newType, setNewType] = useState('');
    const [newStatus, setNewStatus] = useState('');
    const [newfieldCode, setNewFieldCode] = useState('');
    const [newstaffId, setNewStaffId] = useState('');

    function handleDeleteEquipment(event: React.FormEvent){
        event.preventDefault();
        if(!deleteEquipmentName){
            alert("Equipment Not Found");
        }
        dispatch(deleteEquipment(deleteEquipmentName));
        alert("Equipment Deleted");
    }
    function handleSearchEquipment(event: React.FormEvent){
        event.preventDefault();
        const found = equipment.find((s: any) => s.Name === searchEquipmentName);
        if (found) {
            setFoundEquipment(found);
            setNewEquipmentId(found.EquipmentId);
            setNewType(found.Type);
            setNewStatus(found.Status);
            setNewFieldCode(found.fieldCode);
            setNewStaffId(found.staffId);



        } else {
            alert('Field not found.');
            setFoundEquipment(null);
        }

    }
    function handleUpdateEquipment(){}


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
                    <div className="flex gap-4">
                        <button
                            onClick={handleDeleteEquipment}
                            className="bg-red-600 text-white px-6 py-2 rounded-lg transition duration-300 hover:bg-red-500 mb-4"
                        >
                            Delete Equipment
                        </button>
                        <input type="text" placeholder="Field Name to search" value={searchEquipmentName}
                               onChange={(e) => setSearchEquipmentName(e.target.value)}
                               className="w-60 h-10 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>

                        <button onClick={handleSearchEquipment}
                                className="bg-blue-300 text-gray-800 font-medium py-2 px-4 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400">Search
                            Field
                        </button>
                    </div>
                </div>
                <div className="max-w-8xl mx-auto px-4 py-8">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">

                        {foundEquipment && (

                            <div className="lg:w-1/3 bg-gray-100 p-8 rounded-lg shadow-lg text-left">
                                <h3 className="text-3xl font-bold text-gray-900 mb-6">Update Equipment:</h3>


                                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                                    <h4 className="text-xl font-semibold text-gray-700 mb-4">Current Equipment
                                        Details</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <p>
                                            <strong className="text-gray-600">Current Equipment Code:</strong>
                                            <span className="text-gray-900">{foundEquipment.EquipmentId}</span>
                                        </p>

                                        <p>
                                            <strong className="text-gray-600">Current Type:</strong>
                                            <span className="text-gray-900">{foundEquipment.Type}</span>
                                        </p>

                                        <p>
                                            <strong className="text-gray-600">Current Status:</strong>
                                            <span className="text-gray-900">{foundEquipment.Status}</span>
                                        </p>
                                        <p>
                                            <strong className="text-gray-600">Current Field Code</strong>
                                            <span className="text-gray-900">{foundEquipment.fieldCode}</span>
                                        </p>

                                        <p>
                                            <strong className="text-gray-600">Current Staff id:</strong>
                                            <span className="text-gray-900">{foundEquipment.staffId}</span>
                                        </p>


                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-sm">
                                    <h4 className="text-xl font-semibold text-gray-700 mb-4">Update Equipment Details</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        <input type="text" placeholder="New log Date" value={newEquipmentId}
                                               onChange={(e) => setNewEquipmentId(e.target.value)}/>
                                        <input type="text" placeholder="New Log Details" value={newType}
                                               onChange={(e) => setNewType(e.target.value)}/>
                                        <input type="text" placeholder="New observed Image" value={newStatus}
                                               onChange={(e) => setNewStatus(e.target.value)}/>
                                        <input type="text" placeholder="New Filed code" value={newfieldCode}
                                               onChange={(e) => setNewFieldCode(e.target.value)}/>
                                        <input type="text" placeholder="New crop Id" value={newstaffId}
                                               onChange={(e) => setNewStaffId(e.target.value)}/>


                                        <button onClick={handleUpdateEquipment}
                                                className="w-full bg-indigo-600 text-white py-3 px-4 mt-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400">Update
                                            Field
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
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