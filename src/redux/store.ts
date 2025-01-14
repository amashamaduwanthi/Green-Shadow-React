
import { configureStore } from '@reduxjs/toolkit';
import cropSlice from "./slices/cropSlice.ts";
import equipmentSlice from "./slices/equipmentSlice.ts";
import fieldSlice from "./slices/fieldSlice.ts";

import logSlice from "./slices/logSlice.ts";
import vehicleSlice from "./slices/vehicleSlice.ts";


export const store = configureStore({
  reducer: {
       crop:cropSlice,
      equipment:equipmentSlice,
      field:fieldSlice,
      Log:logSlice,
      vehicle:vehicleSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
