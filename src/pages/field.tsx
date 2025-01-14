import {Link} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

import {deleteField} from "../redux/slices/fieldSlice.ts";

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
                <h1 className="text-2xl font-bold text-gray-500 mb-6"> Field</h1>

                <Link to="/field/Add">
                    <button>Add Filed</button>
                </Link>
                <input type="text" placeholder="enter the Field Name" value={deleteFieldName}
                       onChange={(e) => setDeleteFieldName(e.target.value)}/>

                <button onClick={handleDeleteField}>Delete Field</button>
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