
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Item {
  id: number;
  name: string;
  price: number;
}

const itemSlice = createSlice({
  name: 'items',
  initialState: [] as Item[],
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.push(action.payload);
    },
  },
});

export const { addItem } = itemSlice.actions;
export default itemSlice.reducer;
