
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Customer {
  id: number;
  name: string;
  email: string;
}

const customerSlice = createSlice({
  name: 'customers',
  initialState: [] as Customer[],
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.push(action.payload);
    },
  },
});

export const { addCustomer } = customerSlice.actions;
export default customerSlice.reducer;
