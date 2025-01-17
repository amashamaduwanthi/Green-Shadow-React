import {Link} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {deleteCrop} from "../redux/slices/cropSlice.ts";


export function Crop(){
    const crop = useSelector((state:any)=>state.crop);
    const dispatch = useDispatch();
    const [deleteCropCode, setDeleteCropCode] = useState('');
    function handleDeleteCrop(event: React.FormEvent) {
        event.preventDefault();
        if(!deleteCropCode){
            alert("Crop Code is empty");

        }
        dispatch(deleteCrop(deleteCropCode));
        setDeleteCropCode('');
    }
    function handleSearch(){

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
                            onClick={handleSearch}
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg transition duration-300 hover:bg-blue-500"
                        >
                            Search
                        </button>

                        <button
                            onClick={handleDeleteCrop}
                            className="bg-red-600 text-white px-6 py-2 rounded-lg transition duration-300 hover:bg-red-500"
                        >
                            Delete Crop
                        </button>
                    </div>


                </div>

                {/* Crop List */}
                <ul className="list-disc pl-6">
                    {crop.map((cropDetails: any, index: number) => (
                        <li key={index} className="mb-2 text-gray-700">
                            <span
                                className="font-semibold">{cropDetails.cropId}</span> - {cropDetails.cropName}, {cropDetails.scientificName}, {cropDetails.image}, {cropDetails.category}, {cropDetails.season}, {cropDetails.fieldCode}
                        </li>
                    ))}
                </ul>
            </div>

        </>
    )
}