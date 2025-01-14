import {createSlice} from "@reduxjs/toolkit";
const initialState = [];

const EquipmentSlice = createSlice({
    name: 'equipment',
    initialState: initialState,
    reducers:{
        addNewEquipment:(state,action)=>{
            state.push(action.payload);
        },
        deleteCrop:(state,action)=>{
            return state.filter(crop => crop.cropId !== action.payload);
        }
    }
});
export default EquipmentSlice.reducer;
export const {addNewEquipment,deleteCrop} = EquipmentSlice.actions;