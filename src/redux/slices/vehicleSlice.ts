import {createSlice} from "@reduxjs/toolkit";
const initialState = [];

const VehicleSlice = createSlice({
    name:'vehicle',
    initialState : initialState,
    reducers:{
        addNewVehicle: (state, action) => {
            state.push( action.payload) ;
        }
    }

})
export default VehicleSlice.reducer;
export const {addNewVehicle} = VehicleSlice.actions;