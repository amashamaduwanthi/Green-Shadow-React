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

    return (
        <>
            <br/>
            <div className="bg-white shadow-md rounded-lg p-6 m-4">
                <h1 className="text-2xl font-bold text-gray-500 mb-6"> Crop</h1>
                <Link to="/crop/Add">
                    <button>Add Crop</button>
                </Link>

                <input type="text" placeholder="enter the crop code" value={deleteCropCode}
                       onChange={(e) => setDeleteCropCode(e.target.value)}/>

                <button onClick={handleDeleteCrop}>Delete Crop</button>
                <br/>
                <ul>
                    {crop.map((cropDetails: any, index: number) => (
                        <li key={index}>
                            {cropDetails.cropId}, {cropDetails.cropName},{cropDetails.scientificName},{cropDetails.image},{cropDetails.category},{cropDetails.season},{cropDetails.fieldCode}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}