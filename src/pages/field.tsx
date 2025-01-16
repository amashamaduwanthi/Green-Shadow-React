import {Link} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

import {deleteField} from "../redux/slices/fieldSlice.ts";
import {GiPlantRoots} from "react-icons/gi";

export function Field() {
    const field = useSelector((state: any) => state.field);
    const dispatch = useDispatch();
    const [deleteFieldName,setDeleteFieldName] = useState('');

    function handleDeleteField(event:React.FormEvent) {
        event.preventDefault();
        if(!deleteFieldName) {
            alert("Field Name Not Found");

        }
        dispatch(deleteField(deleteFieldName));
    }


    return (
        <>
            <br/>
            <div className="bg-white shadow-md rounded-lg p-6 m-4">
                <h1 className="text-2xl font-bold text-teal-900 mb-6 flex items-center gap-2">
                    <GiPlantRoots className="text-teal-900"/> Field
                </h1>


                <Link to="/field/Add">
                    <button
                        className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-500 transition duration-300 mb-4">
                        Add Field
                    </button>
                </Link>

                <br/>
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Enter the Field Name"
                        value={deleteFieldName}
                        onChange={(e) => setDeleteFieldName(e.target.value)}
                        className="w-2000 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none mb-2"
                    />
                    <br/>
                    <button
                        onClick={handleDeleteField}
                        className="bg-red-600 text-white px-6 py-2 rounded-lg  transition duration-300 mb-4"
                    >
                        Delete Field
                    </button>
                </div>

                <br/>
                <ul>
                    {field.map((fieldDetails: any, index: number) => (
                        <li key={index}>
                            {fieldDetails.fieldCode}, {fieldDetails.fieldName},{fieldDetails.fieldLocation},{fieldDetails.ExtentSize},{fieldDetails.cropId},{fieldDetails.staffId},{fieldDetails.FieldImage1},{fieldDetails.FieldImage2}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}