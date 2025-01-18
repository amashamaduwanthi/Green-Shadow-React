import {createSlice} from "@reduxjs/toolkit";
const initialState = [];

const StaffSlice = createSlice({
    name:'staff',
    initialState : initialState,
    reducers:{
        addNewStaff: (state, action) => {
            state.push( action.payload) ;
        },
        deleteStaff: (state, action) => {
            return state.filter( staff => staff.staffId !== action.payload );
        },
        updateStaff:(state,action)=>{
            const {staffId,newStaffFirstName,newStaffSecondName,newPosition,newGender,newJoined_date,newdob,newAddress,newContact_no,newEmail,newRole,newVehicleId} = action.payload;
            const staff=state.find((staff) => staff.staffId === staffId);
            if(staff){
                staff.FirstName= newStaffFirstName|| staff.FirstName;
                staff.LastName= newStaffSecondName || staff.LastName;
                staff.Designation=newPosition || staff.Designation;
                staff.Gender=newGender || staff.Gender;
                staff.JoinedDate=newJoined_date || staff.JoinedDate;
                staff.DOB=newdob || staff.DOB;
                staff.Address=newAddress || staff.Address;
                staff.Contact=newContact_no || staff.Contact;
                staff.Email=newEmail || staff.Email;
               staff.Role=newRole || staff.Role;
                staff.vehicleId=newVehicleId || staff.vehicleId;

            }
        }
    }

})
export default StaffSlice.reducer;
export const {addNewStaff,deleteStaff,updateStaff} = StaffSlice.actions;