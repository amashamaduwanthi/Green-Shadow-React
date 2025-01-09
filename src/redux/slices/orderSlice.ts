
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Order {
  id: number;
  customerId: number;
  itemIds: number[];
}

const orderSlice = createSlice({
  name: 'orders',
  initialState: [] as Order[],
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
      state.push(action.payload);
    },
  },
});

export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;
