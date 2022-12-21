import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { burgerType, RootState } from '../store';

interface orderSliceState {
  burgers: burgerType[];
  totalCoast: number;
}

const initialState: orderSliceState = {
  burgers: [],
  totalCoast: 0,
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addToOrder: (state, action: PayloadAction<burgerType>) => {
      const currentBurger = state.burgers.find((obj) => obj.id === action.payload.id);
      if (currentBurger) {
        currentBurger.count !== undefined && currentBurger.count++;
      } else {
        state.burgers.push({ ...action.payload, count: 1 });
      }
      state.totalCoast = state.burgers.reduce((sum, obj) => {
        if (obj.count !== undefined) {
          return sum + obj.price * obj.count;
        }
        return sum;
      }, 0);
    },
    deleteOfOrder: (state, action: PayloadAction<number>) => {
      const currentBurger = state.burgers.find((obj) => obj.id === action.payload);
      if (currentBurger) {
        currentBurger.count !== undefined && currentBurger.count--;
      } else {
        state.burgers = state.burgers.filter((obj) => obj.id === action.payload);
      }
      state.totalCoast = state.burgers.reduce((sum, obj) => {
        if (obj.count !== undefined) {
          return sum + obj.price * obj.count;
        }
        return sum;
      }, 0);
    },
    removeOfOrder: (state, action: PayloadAction<number>) => {
      state.burgers = state.burgers.filter((obj) => obj.id !== action.payload);
      state.totalCoast = state.burgers.reduce((sum, obj) => {
        if (obj.count !== undefined) {
          return sum + obj.price * obj.count;
        }
        return sum;
      }, 0);
    },
    clearOrder: (state) => {
      state.burgers = [];
      state.totalCoast = 0;
    },
  },
});

export const selectOrder = (state: RootState) => state.order;
export const selectOrderBurgerById = (id: number) => (state: RootState) =>
  state.order.burgers.find((obj) => obj.id === id);

// Action creators are generated for each case reducer function
export const { addToOrder, deleteOfOrder, clearOrder, removeOfOrder } = orderSlice.actions;

export default orderSlice.reducer;
