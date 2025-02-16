import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import {Field} from "../../model/Field.ts";




const initialState: Field[] = [];

const api = axios.create({
    baseURL: "http://localhost:3005/field" // Adjust the API endpoint for fields
});

// Async Thunks for CRUD operations

export const saveField = createAsyncThunk(
    'field/saveField',
    async (field: Field) => {
        try {
            const response = await api.post('/add', field);
            return response.data;
        } catch (error) {
            console.error("Error saving field:", error);
            throw error;
        }
    }
);

export const deleteField = createAsyncThunk(
    'field/deleteField',
    async (fieldCode: string) => {
        try {
            const response = await api.delete(`/delete/${fieldCode}`);
            return response.data;
        } catch (error) {
            console.error("Error deleting field:", error);
            throw error;
        }
    }
);

export const updateField = createAsyncThunk(
    'field/updateField',
    async (field: Field) => {
        try {
            const response = await api.put(`/update/${field.fieldCode}`, field);
            return response.data;
        } catch (error) {
            console.error("Error updating field:", error);
            throw error;
        }
    }
);

export const getFields = createAsyncThunk(
    'field/getFields',
    async () => {
        try {
            const response = await api.get('/view');
            return response.data;
        } catch (error) {
            console.error("Error fetching fields:", error);
            throw error;
        }
    }
);

// Field Slice with reducers and extraReducers for async operations
const fieldSlice = createSlice({
    name: 'field',
    initialState,
    reducers: {
        addNewField: (state, action: PayloadAction<Field>) => {
            state.push(action.payload);
        },
        deleteFieldByCode: (state, action: PayloadAction<string>) => {
            return state.filter(field => field.fieldCode !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveField.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(saveField.rejected, (state, action) => {
                console.error("Failed to save field:", action.payload);
            })
            .addCase(saveField.pending, (state, action) => {
                console.log("Pending save field");
            });

        builder
            .addCase(deleteField.fulfilled, (state, action) => {
                return state.filter(field => field.fieldCode !== action.payload.fieldCode);
            })
            .addCase(deleteField.rejected, (state, action) => {
                console.error("Failed to delete field:", action.payload);
            })
            .addCase(deleteField.pending, (state, action) => {
                console.log("Pending delete field");
            });

        builder
            .addCase(updateField.fulfilled, (state, action) => {
                const index = state.findIndex((field:Field) => field.fieldCode === action.payload.fieldCode);
                if (index !== -1) {
                    state[index] = action.payload;
                }
            })
            .addCase(updateField.rejected, (state, action) => {
                console.error("Failed to update field:", action.payload);
            })
            .addCase(updateField.pending, (state, action) => {
                console.log("Pending update field");
            });

        builder
            .addCase(getFields.fulfilled, (state, action) => {
                return action.payload;
            })
            .addCase(getFields.rejected, (state, action) => {
                console.error("Failed to fetch fields:", action.payload);
            })
            .addCase(getFields.pending, (state, action) => {
                console.log("Pending get fields");
            });
    }
});

export default fieldSlice.reducer;
export const { addNewField } = fieldSlice.actions;
