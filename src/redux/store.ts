
import { configureStore } from '@reduxjs/toolkit';
import equipmentSlice from "./slices/equipmentSlice.ts";
import logSlice from "./slices/logSlice.ts";
import vehicleSlice from "./slices/vehicleSlice.ts";
import staffSlice from "./slices/staffSlice.ts";
import fieldReducer from "./slices/fieldReducer.ts";
import cropReducer from "./slices/cropReducer.ts";


export const store = configureStore({
  reducer: {
       crop:cropReducer,
      equipment:equipmentSlice,
      field:fieldReducer,
      Log:logSlice,
      vehicle:vehicleSlice,
      staff:staffSlice,
  },
});

export type AppDispatch = typeof store.dispatch;