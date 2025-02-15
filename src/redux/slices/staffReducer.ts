import axios from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Staff } from "../../model/Staff.ts";

const initialState: Staff[] = [];

const api = axios.create({
    baseURL: "http://localhost:3005/staff"
});

// Async Thunks for CRUD operations
export const saveStaff = createAsyncThunk(
    "staff/saveStaff",
    async (staff: Staff) => {
        try {
            const serializedStaff = {
                ...staff,
                dob: new Date(staff.dob).toISOString() // Ensure serialization
            };
            const response = await api.post("/add", serializedStaff);
            return response.data;
        } catch (error) {
            console.error("Error saving Staff", error);
            throw error;
        }
    }
);

export const deleteStaffMember = createAsyncThunk(
    "staff/deleteStaffMember",
    async (staffId: string) => {
        try {
            await api.delete(`/delete/${staffId}`);
            return staffId; // Return the deleted ID
        } catch (error) {
            console.error("Error deleting staff:", error);
            throw error;
        }
    }
);

export const updateStaffMember = createAsyncThunk(
    "staff/updateStaffMember",
    async (staff: Staff) => {
        try {
            const response = await api.put(`/update/${staff.staffId}`, staff);
            return response.data;
        } catch (error) {
            console.error("Error updating staff:", error);
            throw error;
        }
    }
);

export const getStaffMembers = createAsyncThunk(
    "staff/getStaffMembers",
    async () => {
        try {
            const response = await api.get("/view");
            return response.data;
        } catch (error) {
            console.error("Error fetching staff:", error);
            throw error;
        }
    }
);

const staffSlice = createSlice({
    name: "staff",
    initialState,
    reducers: {
        addNewStaff: (state, action: PayloadAction<Staff>) => {
            state.push(action.payload);
        },
        deleteStaffById: (state, action: PayloadAction<string>) => {
            return state.filter(staff => staff.staffId !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveStaff.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(saveStaff.rejected, (state, action) => {
                console.error("Failed to save staff:", action.error);
            })
            .addCase(saveStaff.pending, () => {
                console.log("Pending save staff...");
            });

        builder
            .addCase(deleteStaffMember.fulfilled, (state, action) => {
                return state.filter(staff => staff.staffId !== action.payload);
            })
            .addCase(deleteStaffMember.rejected, (state, action) => {
                console.error("Failed to delete staff:", action.error);
            })
            .addCase(deleteStaffMember.pending, () => {
                console.log("Pending delete staff...");
            });

        builder
            .addCase(updateStaffMember.fulfilled, (state, action) => {
                const index = state.findIndex(staff => staff.staffId === action.payload.staffId);
                if (index !== -1) {
                    state[index] = action.payload;
                }
            })
            .addCase(updateStaffMember.rejected, (state, action) => {
                console.error("Failed to update staff:", action.error);
            })
            .addCase(updateStaffMember.pending, () => {
                console.log("Pending update staff...");
            });

        builder
            .addCase(getStaffMembers.fulfilled, (state, action) => {
                return action.payload;
            })
            .addCase(getStaffMembers.rejected, (state, action) => {
                console.error("Failed to fetch staff:", action.error);
            })
            .addCase(getStaffMembers.pending, () => {
                console.log("Pending get staff...");
            });
    }
});

export default staffSlice.reducer;
export const { addNewStaff } = staffSlice.actions;
