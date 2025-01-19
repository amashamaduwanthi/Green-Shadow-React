import {Link} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

import {deleteField} from "../redux/slices/fieldSlice.ts";


export function Field() {
    const field = useSelector((state: any) => state.field);
    const dispatch = useDispatch();
    const [deleteFieldName,setDeleteFieldName] = useState('');
    const [newFieldCode, setNewFieldCode] = useState('');
    const [newFieldLocation,setNewLocation] = useState('');
    const [newExtentSize, setnewExtentSize] = useState('');
    const [newcropId, setnewCropId] = useState('');
    const [newstaffId, setnewStaffId] = useState('');
    const [newFieldImage1, setnewFieldImage1] = useState('');
    const [newFieldImage2, setnewFieldImage2] = useState('');


    const [searchFieldName,setSearchFieldName] = useState('');
    const [foundField,setFoundField] = useState<any | null>(null);

    function handleDeleteField(event:React.FormEvent) {
        event.preventDefault();
        if(!deleteFieldName) {
            alert("Field Name Not Found");

        }
        dispatch(deleteField(deleteFieldName));
        alert("Deleted Successfully.");
    }
    function handleSearchField(event:React.FormEvent) {
        event.preventDefault();
        const found = field.find((s: any) => s.fieldName === searchFieldName);
        if (found) {
            setFoundField(found);
            setNewFieldCode(found.fieldCode);
            setNewLocation(found.fieldLocation);
            setnewExtentSize(found.ExtentSize);
            setnewCropId(found.cropId);
            setnewStaffId(found.staffId);
            setnewFieldImage1(found.fieldImage1);
            setnewFieldImage2(found.fieldImage2);


        } else {
            alert('Field not found.');
            setFoundField(null);
        }
    }
    function handleUpdateField(){

    }


    return (
        <>
            <br/>
            <div className="bg-white shadow-md rounded-lg p-6 m-4">
                <h1 className="text-2xl font-bold text-teal-900 mb-6 flex items-center gap-2">
                    <i className="fas fa-map text-green-500 text-3xl"></i>
                    Field
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
                    <div className="flex gap-4">
                        <button
                            onClick={handleDeleteField}
                            className="bg-red-600 text-white px-6 py-2 rounded-lg  transition duration-300 mb-4"
                        >
                            Delete Field
                        </button>
                        <input type="text" placeholder="Field Name to search" value={searchFieldName}
                               onChange={(e) => setSearchFieldName(e.target.value)}
                               className="w-60 h-10 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>

                        <button onClick={handleSearchField}
                                className="bg-blue-300 text-gray-800 font-medium py-2 px-4 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400">Search
                            Field
                        </button>
                    </div>
                </div>
                <div className="max-w-8xl mx-auto px-4 py-8">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">

                        {foundField && (

                            <div className="lg:w-1/3 bg-gray-100 p-8 rounded-lg shadow-lg text-left">
                                <h3 className="text-3xl font-bold text-gray-900 mb-6">Update Field:</h3>


                                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                                    <h4 className="text-xl font-semibold text-gray-700 mb-4">Current Field
                                        Details</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <p>
                                            <strong className="text-gray-600">Current Field Code:</strong>
                                            <span className="text-gray-900">{foundField.fieldCode}</span>
                                        </p>

                                        <p>
                                            <strong className="text-gray-600">Current Location:</strong>
                                            <span className="text-gray-900">{foundField.fieldLocation}</span>
                                        </p>

                                        <p>
                                            <strong className="text-gray-600">Current Extent size:</strong>
                                            <span className="text-gray-900">{foundField.ExtentSize}</span>
                                        </p>

                                        <p>
                                            <strong className="text-gray-600">Current crop id:</strong>
                                            <span className="text-gray-900">{foundField.cropId}</span>
                                        </p>
                                        <p>
                                            <strong className="text-gray-600">Current Staff id:</strong>
                                            <span className="text-gray-900">{foundField.staffId}</span>
                                        </p>

                                        <p>
                                            <strong className="text-gray-600">Current Field Image 1</strong>
                                            <span className="text-gray-900">{foundField.FieldImage1}</span>
                                        </p>

                                        <p>
                                            <strong className="text-gray-600">Current Field Image 2</strong>
                                            <span className="text-gray-900">{foundField.FieldImage2}</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-sm">
                                    <h4 className="text-xl font-semibold text-gray-700 mb-4">Update Field Details</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        <input type="text" placeholder="New log Date" value={newFieldCode}
                                               onChange={(e) => setNewFieldCode(e.target.value)}/>
                                        <input type="text" placeholder="New Log Details" value={newFieldLocation}
                                               onChange={(e) => setNewLocation(e.target.value)}/>
                                        <input type="text" placeholder="New observed Image" value={newExtentSize}
                                               onChange={(e) => setnewExtentSize(e.target.value)}/>
                                        <input type="text" placeholder="New Filed code" value={newcropId}
                                               onChange={(e) => setnewCropId(e.target.value)}/>
                                        <input type="text" placeholder="New crop Id" value={newstaffId}
                                               onChange={(e) => setnewStaffId(e.target.value)}/>

                                        <input type="text" placeholder="New field image 1" value={newFieldImage1}
                                               onChange={(e) => setnewFieldImage1(e.target.value)}/>
                                        <input type="text" placeholder="New field image 2" value={newFieldImage2}
                                               onChange={(e) => setnewFieldImage2(e.target.value)}/>
                                        <button onClick={handleUpdateField}
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
                <ul className="space-y-6">
                    {field.map((fieldDetails: any, index: number) => (
                        <li
                            key={index}
                            className={`flex items-center justify-between p-6 rounded-lg shadow-md ${
                                index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                            } hover:bg-teal-50 transition duration-200`}
                        >
                            <div className="flex items-center space-x-8">
                <span className="text-teal-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </span>
                                <div className="text-left">
                                    <p className="text-lg font-bold text-gray-800">
                                        {fieldDetails.fieldCode} - {fieldDetails.fieldName}
                                    </p>
                                    <p className="text-base text-gray-700">
                                        <span
                                            className="font-semibold text-teal-800">Location:</span> {fieldDetails.fieldLocation}
                                    </p>
                                    <p className="text-base text-gray-700">
                                        <span
                                            className="font-semibold text-teal-800">Extent Size:</span> {fieldDetails.ExtentSize}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-10">
                                <p className="text-base text-gray-700">
                                    <span className="font-semibold text-teal-800">Crop ID:</span> {fieldDetails.cropId}
                                </p>
                                <p className="text-base text-gray-700">
                                    <span
                                        className="font-semibold text-teal-800">Staff ID:</span> {fieldDetails.staffId}
                                </p>
                                <div className="flex space-x-4">
                                    <p className="text-base text-gray-700">
                                        <span
                                            className="font-semibold text-teal-800">Image 1:</span> {fieldDetails.FieldImage1}
                                    </p>
                                    <p className="text-base text-gray-700">
                                        <span
                                            className="font-semibold text-teal-800">Image 2:</span> {fieldDetails.FieldImage2}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

            </div>
        </>
    )
}