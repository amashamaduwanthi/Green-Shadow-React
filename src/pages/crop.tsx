import {Link} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {deleteCrops, getCrops} from "../redux/slices/cropReducer.ts";


export function Crop(){
    const crop = useSelector((state:any)=>state.crop);
    const dispatch = useDispatch();
    const [deleteCropCode, setDeleteCropCode] = useState('');

    const [searchCropId,setSearchCropId] = useState('');
    const [foundCrop,setFoundCrop] = useState<any | null>(null);

    const [newCropName, setNewCropName] = useState('');
    const [newScientificName, setNewScientificName] = useState('');
    const [newImage, setNewImage] = useState('');
    const [newCategory, setNewCategory] = useState('');
    const [newSeason, setNewSeason] = useState('');
    const [newFieldCode, setNewFieldCode] = useState('');
    useEffect(() => {
        dispatch(getCrops());
    }, [dispatch]);

    function handleDeleteCrop(event: React.FormEvent) {
        event.preventDefault();
        if(!deleteCropCode){
            alert("Crop Code is empty");

        }
        dispatch(deleteCrops(deleteCropCode));
        setDeleteCropCode('');
    }
    function handleSearchCrop(event: React.FormEvent) {
        event.preventDefault();
        const found = crop.find((s: any) => s.cropId === searchCropId);
        if (found) {
            setFoundCrop(found);
            setNewCropName(found.cropName);
            setNewScientificName(found.scientificName);
            setNewImage(found.image);
            setNewCategory(found.category);
            setNewSeason(found.season);
            setNewFieldCode(found.fieldCode);




        } else {
            alert('Crop not found.');
            setFoundCrop(null);
        }


    }
    function handleUpdateCrop(event: React.FormEvent) {
        event.preventDefault();
    }

    return (
        <>
            <br/>
            <div className="bg-white shadow-md rounded-lg p-6 m-4">
                <h1 className="text-2xl font-bold text-teal-900 mb-6 flex items-center gap-2">
                    <i className="fas fa-seedling text-green-500 text-3xl"></i> Crop
                </h1>

                {/* Add Crop Button */}
                <Link to="/crop/Add">
                    <button
                        className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-500 transition duration-300 mb-4">
                        Add Crop
                    </button>
                </Link>

                {/* Delete Crop Section */}
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Enter the crop code to delete"
                        value={deleteCropCode}
                        onChange={(e) => setDeleteCropCode(e.target.value)}
                        className="w-2000 p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none mb-2"
                    />

                    <div className="flex gap-4">
                        <button
                            onClick={handleDeleteCrop}
                            className="bg-red-600 text-white px-6 py-2 rounded-lg transition duration-300 hover:bg-red-500"
                        >
                            Delete Crop
                        </button>
                        <input type="text" placeholder="Crop Id to search" value={searchCropId}
                               onChange={(e) => setSearchCropId(e.target.value)}
                               className="w-60 h-10 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>

                        <button onClick={handleSearchCrop}
                                className="bg-blue-300 text-gray-800 font-medium py-2 px-4 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400">Search
                            Field
                        </button>
                    </div>


                </div>
                <div className="max-w-8xl mx-auto px-4 py-8">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">

                        {foundCrop && (

                            <div className="lg:w-1/3 bg-gray-100 p-8 rounded-lg shadow-lg text-left">
                                <h3 className="text-3xl font-bold text-gray-900 mb-6"> Crop:</h3>


                                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                                    <h4 className="text-xl font-semibold text-gray-700 mb-4">Current Crop
                                        Details</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <p>
                                            <strong className="text-gray-600">Current Crop Name:</strong>
                                            <span className="text-gray-900">{foundCrop.cropName}</span>
                                        </p>

                                        <p>
                                            <strong className="text-gray-600">Current image:</strong>
                                            <span className="text-gray-900">{foundCrop.cropImage}</span>
                                        </p>
                                        <p>
                                            <strong className="text-gray-600">Current category</strong>
                                            <span className="text-gray-900">{foundCrop.category}</span>
                                        </p>

                                        <p>
                                            <strong className="text-gray-600">Current season:</strong>
                                            <span className="text-gray-900">{foundCrop.season}</span>
                                        </p>

                                        <p>
                                            <strong className="text-gray-600">Current field code:</strong>
                                            <span className="text-gray-900">{foundCrop.fieldCode}</span>
                                        </p>


                                    </div>
                                </div>

                                {/*<div className="bg-white p-6 rounded-lg shadow-sm">*/}
                                {/*    <h4 className="text-xl font-semibold text-gray-700 mb-4">Update Crop*/}
                                {/*        Details</h4>*/}
                                {/*    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">*/}
                                {/*        <input type="text" placeholder="New crop Name" value={newCropName}*/}
                                {/*               onChange={(e) => setNewCropName(e.target.value)}/>*/}
                                {/*        <input type="text" placeholder="New Scientific Name" value={newScientificName}*/}
                                {/*               onChange={(e) => setNewScientificName(e.target.value)}/>*/}
                                {/*        <input type="text" placeholder="New  Image" value={newImage}*/}
                                {/*               onChange={(e) => setNewImage(e.target.value)}/>*/}
                                {/*        <input type="text" placeholder="New Category" value={newCategory}*/}
                                {/*               onChange={(e) => setNewCategory(e.target.value)}/>*/}
                                {/*        <input type="text" placeholder="New Season" value={newSeason}*/}
                                {/*               onChange={(e) => setNewSeason(e.target.value)}/>*/}
                                {/*        <input type="text" placeholder="New Field Code" value={newFieldCode}*/}
                                {/*               onChange={(e) => setNewFieldCode(e.target.value)}/>*/}


                                {/*        <button onClick={handleUpdateCrop}*/}
                                {/*                className="w-full bg-indigo-600 text-white py-3 px-4 mt-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400">Update*/}
                                {/*            Field*/}
                                {/*        </button>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        )}
                    </div>
                </div>


                {/* Crop List */}
                <ul className="space-y-6">
                    {crop.map((cropDetails: any, index: number) => (
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
                                        {cropDetails.cropId} - {cropDetails.cropName}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-10">
                                <p className="text-base text-gray-700">
                                    <span className="font-semibold text-teal-800">Image URL:</span>{' '}
                                    {cropDetails.cropImage}
                                </p>
                                <p className="text-base text-gray-700">
                                    <span className="font-semibold text-teal-800">Category:</span>{' '}
                                    {cropDetails.category}
                                </p>
                                <p className="text-base text-gray-700">
                                    <span className="font-semibold text-teal-800">Season:</span>{' '}
                                    {cropDetails.season}
                                </p>
                                <p className="text-base text-gray-700">
                                    <span className="font-semibold text-teal-800">Field Code:</span>{' '}
                                    {cropDetails.fieldCode}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>


            </div>

        </>
    )
}