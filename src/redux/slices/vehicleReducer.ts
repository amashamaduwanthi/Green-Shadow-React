
import axios from "axios";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Vehicle} from "../../model/Vehicle.ts";

const initialState: Vehicle[] = [];

const api = axios.create({
    baseURL: "http://localhost:3005/vehicle" // Adjust the API endpoint for fields
});

// Async Thunks for CRUD operations

export const saveVehicle = createAsyncThunk(
    'vehicle/saveVehicle',
    async (vehicle:Vehicle) => {
        try {
            const response = await api.post('/add', vehicle);
            return response.data;
        } catch (error) {
            console.error("Error saving Vehicle:", error);
            throw error;
        }
    }
);

export const deleteVehicles = createAsyncThunk(
    'vehicle/deleteVehicles',
    async (licensePlateNo: string) => {
        try {
            const response = await api.delete(`/delete/${licensePlateNo}`);
            return response.data;
        } catch (error) {
            console.error("Error deleting vehicle:", error);
            throw error;
        }
    }
);

export const updateVehicles = createAsyncThunk(
    'vehicle/updateVehicles',
    async (vehicle:Vehicle) => {
        try {
            const response = await api.put(`/update/${vehicle.licensePlateNo}`, vehicle);
            return response.data;
        } catch (error) {
            console.error("Error updating vehicle:", error);
            throw error;
        }
    }
);

export const getVehicles = createAsyncThunk(
    'vehicle/getVehicles',
    async () => {
        try {
            const response = await api.get('/view');
            return response.data;
        } catch (error) {
            console.error("Error fetching vehicles:", error);
            throw error;
        }
    }
);
const vehicleSlice = createSlice({
    name: 'vehicle',
    initialState,
    reducers: {
        addNewVehicle: (state, action: PayloadAction<Vehicle>) => {
            state.push(action.payload);
        },
        deleteVehicleByCode: (state, action: PayloadAction<string>) => {
            return state.filter(vehicle => vehicle.licensePlateNo !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveVehicle.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(saveVehicle.rejected, (state, action) => {
                console.error("Failed to save vehicle:", action.payload);
            })
            .addCase(saveVehicle.pending, (state, action) => {
                console.log("Pending save vehicle");
            });

        builder
            .addCase(deleteVehicles.fulfilled, (state, action) => {
                return state.filter(vehicle => vehicle.licensePlateNo !== action.payload.licensePlateNo);
            })
            .addCase(deleteVehicles.rejected, (state, action) => {
                console.error("Failed to delete vehicle:", action.payload);
            })
            .addCase(deleteVehicles.pending, (state, action) => {
                console.log("Pending delete vehicle");
            });

        builder
            .addCase(updateVehicles.fulfilled, (state, action) => {
                const index = state.findIndex(vehicle => vehicle.licensePlateNo === action.payload.licensePlateNo);
                if (index !== -1) {
                    state[index] = action.payload;
                }
            })
            .addCase(updateVehicles.rejected, (state, action) => {
                console.error("Failed to update vehicle:", action.payload);
            })
            .addCase(updateVehicles.pending, (state, action) => {
                console.log("Pending update vehicle");
            });

        builder
            .addCase(getVehicles.fulfilled, (state, action) => {
                return action.payload;
            })
            .addCase(getVehicles.rejected, (state, action) => {
                console.error("Failed to fetch vehicle:", action.payload);
            })
            .addCase(getVehicles.pending, (state, action) => {
                console.log("Pending get vehicle");
            });
    }
});

export default vehicleSlice.reducer;
export const { addNewVehicle} = vehicleSlice.actions;
