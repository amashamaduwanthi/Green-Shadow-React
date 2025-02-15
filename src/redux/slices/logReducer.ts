
import axios from "axios";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import MonitoringLog from "../../model/Log.ts";


const initialState: MonitoringLog[] = [];

const api = axios.create({
    baseURL: "http://localhost:3005/log" // Adjust the API endpoint for fields
});

// Async Thunks for CRUD operations

export const saveLog = createAsyncThunk(
    'log/saveLog',
    async (log:MonitoringLog) => {
        try {
            const response = await api.post('/add', log);
            return response.data;
        } catch (error) {
            console.error("Error saving Log:", error);
            throw error;
        }
    }
);

export const deleteLogs = createAsyncThunk(
    'log/deleteLogs',
    async (LogCode: string) => {
        try {
            const response = await api.delete(`/delete/${LogCode}`);
            return response.data;
        } catch (error) {
            console.error("Error deleting log:", error);
            throw error;
        }
    }
);

export const updateLog = createAsyncThunk(
    'log/updateLog',
    async (log:MonitoringLog) => {
        try {
            const response = await api.put(`/update/${log.LogCode}`, log);
            return response.data;
        } catch (error) {
            console.error("Error updating log:", error);
            throw error;
        }
    }
);

export const getLogs = createAsyncThunk(
    'log/getLogs',
    async () => {
        try {
            const response = await api.get('/view');
            return response.data;
        } catch (error) {
            console.error("Error fetching logs:", error);
            throw error;
        }
    }
);
const logSlice = createSlice({
    name: 'log',
    initialState,
    reducers: {
        addNewLog: (state, action: PayloadAction<MonitoringLog>) => {
            state.push(action.payload);
        },
        deleteLogByCode: (state, action: PayloadAction<string>) => {
            return state.filter(log => log.LogCode !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveLog.fulfilled, (state, action) => {
                state.push(action.payload);
            })
            .addCase(saveLog.rejected, (state, action) => {
                console.error("Failed to save log:", action.payload);
            })
            .addCase(saveLog.pending, (state, action) => {
                console.log("Pending save log");
            });

        builder
            .addCase(deleteLogs.fulfilled, (state, action) => {
                return state.filter(log => log.LogCode !== action.payload.LogCode);
            })
            .addCase(deleteLogs.rejected, (state, action) => {
                console.error("Failed to delete log:", action.payload);
            })
            .addCase(deleteLogs.pending, (state, action) => {
                console.log("Pending delete logs");
            });

        builder
            .addCase(updateLog.fulfilled, (state, action) => {
                const index = state.findIndex(log => log.LogCode === action.payload.LogCode);
                if (index !== -1) {
                    state[index] = action.payload;
                }
            })
            .addCase(updateLog.rejected, (state, action) => {
                console.error("Failed to update log:", action.payload);
            })
            .addCase(updateLog.pending, (state, action) => {
                console.log("Pending update log");
            });

        builder
            .addCase(getLogs.fulfilled, (state, action) => {
                return action.payload;
            })
            .addCase(getLogs.rejected, (state, action) => {
                console.error("Failed to fetch logs:", action.payload);
            })
            .addCase(getLogs.pending, (state, action) => {
                console.log("Pending get logs");
            });
    }
});

export default logSlice.reducer;
export const { addNewLog} = logSlice.actions;
