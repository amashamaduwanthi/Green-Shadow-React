import {Field} from "../../model/Field.ts";
import axios from "axios";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Crop} from "../../model/Crop.ts";


const initialState: Crop[] = [];

const api = axios.create({
  baseURL: "http://localhost:3005/crop" // Adjust the API endpoint for fields
});

// Async Thunks for CRUD operations

export const saveCrop = createAsyncThunk(
    'crop/saveCrop',
    async (crop:Crop) => {
      try {
        const response = await api.post('/add', crop);
        return response.data;
      } catch (error) {
        console.error("Error saving Crop:", error);
        throw error;
      }
    }
);

export const deleteCrops = createAsyncThunk(
    'crop/deleteCrops',
    async (cropId: string) => {
      try {
        const response = await api.delete(`/delete/${cropId}`);
        return response.data;
      } catch (error) {
        console.error("Error deleting crop:", error);
        throw error;
      }
    }
);

export const updateCrop = createAsyncThunk(
    'crop/updateCrop',
    async (crop:Crop) => {
      try {
        const response = await api.put(`/update/${crop.cropId}`, crop);
        return response.data;
      } catch (error) {
        console.error("Error updating crop:", error);
        throw error;
      }
    }
);

export const getCrops = createAsyncThunk(
    'crop/getCrops',
    async () => {
      try {
        const response = await api.get('/view');
        return response.data;
      } catch (error) {
        console.error("Error fetching crops:", error);
        throw error;
      }
    }
);
const cropSlice = createSlice({
  name: 'crop',
  initialState,
  reducers: {
    addNewCrop: (state, action: PayloadAction<Field>) => {
      state.push(action.payload);
    },
    deleteCropByCode: (state, action: PayloadAction<string>) => {
      return state.filter(crop => crop.cropId !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
        .addCase(saveCrop.fulfilled, (state, action) => {
          state.push(action.payload);
        })
        .addCase(saveCrop.rejected, (state, action) => {
          console.error("Failed to save crop:", action.payload);
        })
        .addCase(saveCrop.pending, (state, action) => {
          console.log("Pending save crop");
        });

    builder
        .addCase(deleteCrops.fulfilled, (state, action) => {
          return state.filter(crop => crop.cropId !== action.payload.fieldCode);
        })
        .addCase(deleteCrops.rejected, (state, action) => {
          console.error("Failed to delete crop:", action.payload);
        })
        .addCase(deleteCrops.pending, (state, action) => {
          console.log("Pending delete crop");
        });

    builder
        .addCase(updateCrop.fulfilled, (state, action) => {
          const index = state.findIndex(crop => crop.cropId === action.payload.fieldCode);
          if (index !== -1) {
            state[index] = action.payload;
          }
        })
        .addCase(updateCrop.rejected, (state, action) => {
          console.error("Failed to update crop:", action.payload);
        })
        .addCase(updateCrop.pending, (state, action) => {
          console.log("Pending update crop");
        });

    builder
        .addCase(getCrops.fulfilled, (state, action) => {
          return action.payload;
        })
        .addCase(getCrops.rejected, (state, action) => {
          console.error("Failed to fetch crops:", action.payload);
        })
        .addCase(getCrops.pending, (state, action) => {
          console.log("Pending get crops");
        });
  }
});

export default cropSlice.reducer;
export const { addNewCrop} = cropSlice.actions;
