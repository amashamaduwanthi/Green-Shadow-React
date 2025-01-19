
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addNewCrop} from "../redux/slices/cropSlice.ts";

export function AddNewCrop() {
    const crop=useSelector((state:any)=>state.crop);
    const dispatch = useDispatch();

    const [cropId, setCropId] = useState('');
    const [cropName, setCropName] = useState('');
    const [scientificName, setScientificName] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [season, setSeason] = useState('');
    const [fieldCode, setFieldCode] = useState('');




    function handleSubmitCrop(event: React.FormEvent) {

        event.preventDefault();

        dispatch(addNewCrop({cropId,cropName,scientificName,image,category,season,fieldCode}));
        setCropId('');
        setCropName('');
        setScientificName('');
        setImage('');
        setCategory('');
        setSeason('');
        setFieldCode('');
    }
    return (
        <>
            <br/>
            <div className="flex flex-row justify-between items-start gap-2 pl-40">
                {/* Form Section - Left Side */}
                <div className="bg-white shadow-xl rounded-lg p-6 max-w-lg w-full">
                    <h2 className="text-2xl font-semibold text-teal-900 mb-6">Add New Crop</h2>
                    <form className="space-y-4 text-left">
                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium">Crop ID:</label>
                            <input
                                type="text"
                                name="crop_id"
                                value={cropId}
                                onChange={(e) => setCropId(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium">Crop Name:</label>
                            <input
                                type="text"
                                name="crop_name"
                                value={cropName}
                                onChange={(e) => setCropName(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium">Scientific Name:</label>
                            <input
                                type="text"
                                name="scientific_name"
                                value={scientificName}
                                onChange={(e) => setScientificName(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium">Image URL:</label>
                            <input
                                type="text"
                                name="image"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium">Category:</label>
                            <input
                                type="text"
                                name="category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium">Season:</label>
                            <input
                                type="text"
                                name="season"
                                value={season}
                                onChange={(e) => setSeason(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-gray-700 font-medium">Field Code:</label>
                            <input
                                type="text"
                                name="field_code"
                                value={fieldCode}
                                onChange={(e) => setFieldCode(e.target.value)}
                                className="p-2 border border-gray-300 rounded-lg focus:ring focus:ring-teal-400 focus:outline-none"
                            />
                        </div>

                        <div className="mt-4">
                            <button
                                type="submit"
                                onClick={handleSubmitCrop}
                                className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-500 transition duration-300"
                            >
                                Add Crop
                            </button>
                        </div>
                    </form>
                </div>

                {/* Table Section - Right Side */}
                <div className="bg-white shadow-xl rounded-lg p-6 max-w-7xl w-full">
                    <h2 className="text-2xl font-semibold text-teal-900 mb-6">Crop Details</h2>
                    <table
                        className="min-w-full table-auto border border-gray-300 rounded-lg overflow-hidden shadow-lg">
                        <thead>
                        <tr className="bg-teal-600 text-white">
                            <th className="px-4 py-3 text-left">Crop ID</th>
                            <th className="px-4 py-3 text-left">Crop Name</th>
                            <th className="px-4 py-3 text-left">Scientific Name</th>
                            <th className="px-4 py-3 text-left">Image URL</th>
                            <th className="px-4 py-3 text-left">Category</th>
                            <th className="px-4 py-3 text-left">Season</th>
                            <th className="px-4 py-3 text-left">Field Code</th>
                        </tr>
                        </thead>
                        <tbody>
                        {crop.map((cropDetails: any, index: number) => (
                            <tr
                                key={index}
                                className={`${
                                    index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                                } hover:bg-teal-100 border-b transition duration-200`}
                            >
                                <td className="px-4 py-3 text-gray-700">{cropDetails.cropId}</td>
                                <td className="px-4 py-3 text-gray-700">{cropDetails.cropName}</td>
                                <td className="px-4 py-3 text-gray-700">{cropDetails.scientificName}</td>
                                <td className="px-4 py-3 text-gray-700">{cropDetails.image}</td>
                                <td className="px-4 py-3 text-gray-700">{cropDetails.category}</td>
                                <td className="px-4 py-3 text-gray-700">{cropDetails.season}</td>
                                <td className="px-4 py-3 text-gray-700">{cropDetails.fieldCode}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                </div>
            </div>

        </>
    )
}
