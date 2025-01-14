import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addNewField} from "../redux/slices/fieldSlice.ts";

export  function AddNewField() {

    const field=useSelector((state:any)=>state.field);
    const dispatch = useDispatch();

    const [fieldCode, setFieldCode] = useState('');
    const [fieldName, setFieldName] = useState('');
    const [fieldLocation,setLocation] = useState('');
    const [ExtentSize, setFExtentSize] = useState('');
    const [cropId, setCropId] = useState('');
    const [staffId, setStaffId] = useState('');
    const [FieldImage1, setFieldImage1] = useState('');
    const [FieldImage2, setFieldImage2] = useState('');

function handleSubmitField(event: React.FormEvent) {
    event.preventDefault();
    dispatch(addNewField({fieldCode,fieldName,fieldLocation,ExtentSize,cropId,staffId,FieldImage1,FieldImage2}))
    setFieldCode('');
    setFieldName('');
    setLocation('');
    setFExtentSize('')
    setCropId('')
    setStaffId('')
    setFieldImage1('')
    setFieldImage2('')


}
    return (
        <>
            <br/>
            <div className="bg-white shadow-md rounded-lg p-6 m-4">
                <h1 className="text-2xl font-bold text-gray-500 mb-6">AddNewField</h1>
                <form>
                    <label>Field Code: <input type="text" name="fieldCode" value={fieldCode}
                                              onChange={(e) => setFieldCode(e.target.value)}/></label><br/>
                    <label> Field Name: <input type="text" name="fieldName" value={fieldName}
                                               onChange={(e) => setFieldName(e.target.value)}/></label><br/>
                    <label>Location: <input type="text" name="location" value={fieldLocation}
                                            onChange={(e) => setLocation(e.target.value)}/></label><br/>
                    <label>Extent size: <input type="text" name="ExtentSize" value={ExtentSize}
                                               onChange={(e) => setFExtentSize(e.target.value)}/></label><br/>
                    <label>crop Id: <input type="text" name="crop_id" value={cropId}
                                           onChange={(e) => setCropId(e.target.value)}/></label><br/>
                    <label>Staff Id: <input type="text" name="staff_id" value={staffId}
                                            onChange={(e) => setStaffId(e.target.value)}/></label><br/>
                    <label>Field image1: <input type="text" name="FieldImage1" value={FieldImage1}
                                                onChange={(e) => setFieldImage1(e.target.value)}/></label><br/>
                    <label>Field image2: <input type="text" name="FieldImage2" value={FieldImage2}
                                                onChange={(e) => setFieldImage2(e.target.value)}/></label><br/>
                    <button type="submit" onClick={handleSubmitField}>Add Equipment</button>
                </form>
            </div>
            <ul>
                {field.map((fieldDetails: any, index: number) => (
                    <li key={index}>
                        {fieldDetails.fieldCode}, {fieldDetails.fieldName},{fieldDetails.fieldLocation},{fieldDetails.ExtentSize},{fieldDetails.cropId},{fieldDetails.staffId},{fieldDetails.FieldImage1},{fieldDetails.FieldImage2}
                    </li>
                ))}
            </ul>
        </>
    )
}