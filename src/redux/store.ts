
import { configureStore } from '@reduxjs/toolkit';

import fieldReducer from "./slices/fieldReducer.ts";
import cropReducer from "./slices/cropReducer.ts";
import staffReducer from "./slices/staffReducer.ts";
import logReducer from "./slices/logReducer.ts";
import vehicleReducer from "./slices/vehicleReducer.ts";
import equipmentReducer from "./slices/equipmentReducer.ts";


export const store = configureStore({
  reducer: {
       crop:cropReducer,
       equipment:equipmentReducer,
       field:fieldReducer,
       log:logReducer,
       vehicle:vehicleReducer,
       staff:staffReducer,
  },
});

export type AppDispatch = typeof store.dispatch;