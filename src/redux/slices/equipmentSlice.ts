import {createSlice} from "@reduxjs/toolkit";
const initialState = [];

const EquipmentSlice = createSlice({
    name: 'equipment',
    initialState: initialState,
    reducers:{
        addNewEquipment:(state,action)=>{
            state.push(action.payload);
        },
        deleteEquipment:(state,action)=>{
            return state.filter(equipment => equipment.Name !== action.payload);
        }
    }
});
export default EquipmentSlice.reducer;
export const {addNewEquipment,deleteEquipment} = EquipmentSlice.actions;