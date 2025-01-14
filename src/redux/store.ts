
import { configureStore } from '@reduxjs/toolkit';
import cropSlice from "./slices/cropSlice.ts";


export const store = configureStore({
  reducer: {
       crop:cropSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
