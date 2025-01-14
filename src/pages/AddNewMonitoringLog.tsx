import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addNewLog} from "../redux/slices/logSlice.ts";

export function AddNewMonitoringLog(){
   const log= useSelector((state:any) => state.Log)
    const dispatch = useDispatch();
    const[LogCode, setLogCode] = useState('');
    const[date, setDate] = useState('');
    const[LogDetails, setLogDetails] = useState('');
    const[ObservedImage, setObservedImage] = useState('');
    const [fieldCode, setFieldCode] = useState('');
    const [cropId, setCropId] = useState('');
    const [staffId, setStaffId] = useState('');

    function handleSubmitLog(event: React.FormEvent) {
        event.preventDefault();
        dispatch(addNewLog({LogCode,Date,LogDetails,ObservedImage,fieldCode,cropId,staffId}))
        setLogCode('');
        setDate('')
        setLogDetails('');
        setObservedImage('');
        setFieldCode('');
        setCropId('');
        setStaffId('');
    }

    return (
        <>
            <br/>
            <div className="bg-white shadow-md rounded-lg p-6 m-4">
                <h1 className="text-2xl font-bold text-gray-500 mb-6">Add New MonitoringLog</h1>
                <form>
                    <label>Log Code: <input type="text" name="LogCode" value={LogCode}
                                            onChange={(e) => setLogCode(e.target.value)}/></label><br/>
                    <label> Date: <input type="text" name="Date" value={date}
                                         onChange={(e) => setDate(e.target.value)}/></label><br/>
                    <label>Log Details: <input type="text" name="LogDetails" value={LogDetails}
                                               onChange={(e) => setLogDetails(e.target.value)}/></label><br/>
                    <label>Observed Image: <input type="text" name="ObservedImage" value={ObservedImage}
                                                  onChange={(e) => setObservedImage(e.target.value)}/></label><br/>
                    <label>Field Code: <input type="text" name="field_code" value={fieldCode}
                                              onChange={(e) => setFieldCode(e.target.value)}/></label><br/>
                    <label>crop Id: <input type="text" name="crop_id" value={cropId}
                                           onChange={(e) => setCropId(e.target.value)}/></label><br/>
                    <label>Staff Id: <input type="text" name="staff_id" value={staffId}
                                            onChange={(e) => setStaffId(e.target.value)}/></label><br/>

                    <button type="submit" onClick={handleSubmitLog}>Add Equipment</button>
                </form>
            </div>
            <ul>
                {log.map((logDetails: any, index: number) => (
                    <li key={index}>
                        {logDetails.LogCode}, {logDetails.Date},{logDetails.LogDetails},{logDetails.ObservedImage},{logDetails.fieldCode},{logDetails.cropId},{logDetails.staffId}
                    </li>
                ))}
            </ul>
        </>
    )
}