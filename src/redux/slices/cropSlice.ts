
import {createSlice} from "@reduxjs/toolkit";
const initialState = [];

const CropSlice = createSlice({
  name: 'crop',
  initialState: initialState,
  reducers:{
    addNewCrop:(state,action)=>{
      state.push(action.payload);
    },
    deleteCrop:(state,action)=>{
      return state.filter(crop => crop.cropId !== action.payload);
    },

  }
});
export default CropSlice.reducer;
export const {addNewCrop,deleteCrop} = CropSlice.actions;
