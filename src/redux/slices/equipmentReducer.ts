
import axios from "axios";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Equipment} from "../../model/Equipment.ts";



const initialState: Equipment[] = [];

const api = axios.create({
    baseURL: "http://localhost:3005/equipment" // Adjust the API endpoint for fields
});

// Async Thunks for CRUD operations

export const saveEquipment = createAsyncThunk(
    'equipment/saveEquipment',
    async (equipment:Equipment) => {
        try {
            const response = await api.post('/add', equipment);
            return response.data;
        } catch (error) {
            console.error("Error saving Equipment:", error);
            throw error;
        }
    }
);

export const deleteEquipments = createAsyncThunk(
    'equipment/deleteEquipments',
    async (equipmentId: string) => {
        try {
            const response = await api.delete(`/delete/${equipmentId}`);
            return response.data;
        } catch (error) {
            console.error("Error deleting equipment:", error);
            throw error;
        }
    }
);

export const updateEquipment = createAsyncThunk(
    'equipment/updateEquipment',
    async (equipment:Equipment) => {
        try {
            const response = await api.put(`/update/${equipment.equipmentId}`, equipment);
            return response.data;
        } catch (error) {
            console.error("Error updating equipment:", error);
            throw error;
        }
    }
);

export const getEquipments = createAsyncThunk(
    "equipment/getEquipments",
    async () => {
        try {
            const response = await api.get("/view");
            console.log("API Response:", response.data); // ✅ Debugging
            return Array.isArray(response.data) ? response.data : [];
        } catch (error) {
            console.error("API Fetch Error:", error);
            return [];
        }
    }
);

const equipmentSlice = createSlice({
    name: 'equipment',
    initialState,

    reducers: {
        addNewEquipment: (state, action: PayloadAction<Equipment>) => {
            state.push(action.payload);
        },
        deleteEquipmentByCode: (state, action: PayloadAction<string>) => {
            return state.filter(equipment => equipment.equipmentId!== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveEquipment.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(saveEquipment.rejected, (state, action) => {
                console.error("Failed to save equipment:", action.payload);
            })
            .addCase(saveEquipment.pending, (state, action) => {
                console.log("Pending save equipment");
            });

        builder
            .addCase(deleteEquipments.fulfilled, (state, action) => {
                return state.filter(equipment => equipment.equipmentId !== action.payload.equipmentId);
            })
            .addCase(deleteEquipments.rejected, (state, action) => {
                console.error("Failed to delete equipment:", action.payload);
            })
            .addCase(deleteEquipments.pending, (state, action) => {
                console.log("Pending delete equipment");
            });

        builder
            .addCase(updateEquipment.fulfilled, (state, action) => {
                const index = state.findIndex(equipment => equipment.equipmentId === action.payload.equipmentId);
                if (index !== -1) {
                    state[index] = action.payload;
                }
            })
            .addCase(updateEquipment.rejected, (state, action) => {
                console.error("Failed to update equipment:", action.payload);
            })
            .addCase(updateEquipment.pending, (state, action) => {
                console.log("Pending update equipment");
            });

        builder
        .addCase(getEquipments.fulfilled, (state, action) => {
            return Array.isArray(action.payload) ? action.payload : []; // ✅ Ensures it's always an array
        })
            .addCase(getEquipments.rejected, (state, action) => {
                console.error("Failed to fetch equipment:", action.payload);
            })
            .addCase(getEquipments.pending, (state, action) => {
                console.log("Pending get equipment");
            });
    }
});

export default equipmentSlice.reducer;
export const { addNewEquipment} = equipmentSlice.actions;
