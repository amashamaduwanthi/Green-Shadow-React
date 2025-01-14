
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
            <div className="bg-white shadow-md rounded-lg p-6 m-4">
                <h2>Add New Crop</h2>
                <form>
                    <label>Crop ID: <input type="text" name="crop_id" value={cropId}
                                           onChange={(e) => setCropId(e.target.value)}/></label><br/>
                    <label>Crop Name: <input type="text" name="crop_name" value={cropName} onChange={(e) => setCropName(e.target.value)}/></label><br/>
                    <label>Scientific Name: <input type="text" name="scientific_name" value={scientificName}
                                                   onChange={(e) => setScientificName(e.target.value)}/></label><br/>
                    <label>Image: <input type="text" name="image" value={image}
                                         onChange={(e) => setImage(e.target.value)}/></label><br/>
                    <label>Category: <input type="text" name="category" value={category}
                                            onChange={(e) => setCategory(e.target.value)}/></label><br/>
                    <label>Season: <input type="text" name="season" value={season}
                                          onChange={(e) => setSeason(e.target.value)}/></label><br/>
                    <label>Field Code: <input type="text" name="field_code" value={fieldCode}
                                              onChange={(e) => setFieldCode(e.target.value)}/></label><br/>
                    <button type="submit" onClick={handleSubmitCrop}>Add Crop</button>
                </form>
            </div>
            <ul>
                {crop.map((cropDetails: any, index: number) => (
                    <li key={index}>
                        {cropDetails.cropId}, {cropDetails.cropName},{cropDetails.scientificName},{cropDetails.image},{cropDetails.category},{cropDetails.season},{cropDetails.fieldCode}
                    </li>
                ))}
            </ul>
        </>
    )
}
