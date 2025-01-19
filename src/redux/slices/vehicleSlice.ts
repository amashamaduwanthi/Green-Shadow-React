import {createSlice} from "@reduxjs/toolkit";
const initialState = [];

const VehicleSlice = createSlice({
    name:'vehicle',
    initialState : initialState,
    reducers:{
        addNewVehicle: (state, action) => {
            state.push( action.payload) ;
        },
        deleteVehicle: (state, action) => {
            return state.filter( vehicle => vehicle.LicensePlateNumber !== action.payload );
        },
        updateVehicle: (state, action) => {
            const {LicensePlateNumber,newVehicleNo,newCategory,newStatus,newFuelType,newStaffId,newRemark} = action.payload;
            const vehicle=state.find((vehicle) => vehicle.LicensePlateNumber === LicensePlateNumber);
            if(vehicle){
                vehicle.vehicleCode=newVehicleNo || vehicle.vehicleCode;
                vehicle.category=newCategory || vehicle.category;
                vehicle.Status=newStatus || vehicle.Status;
                vehicle.FuelType=newFuelType || vehicle.FuelType;
                vehicle.staffId=newStaffId || vehicle.staffId;
                vehicle.Remarks=newRemark || vehicle.Remarks;

            }

        }

    }

})
export default VehicleSlice.reducer;
export const {addNewVehicle,deleteVehicle,updateVehicle} = VehicleSlice.actions;