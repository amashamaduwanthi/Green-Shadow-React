import {createSlice} from "@reduxjs/toolkit";
const initialState = [];

const FieldSlice = createSlice({
    name: 'field',
    initialState: initialState,
    reducers:{
        addNewField:(state,action)=>{
            state.push(action.payload);
        },
        deleteCrop:(state,action)=>{
            return state.filter(crop => crop.cropId !== action.payload);
        }
    }
});
export default FieldSlice.reducer;
export const {addNewField,deleteCrop} = FieldSlice.actions;