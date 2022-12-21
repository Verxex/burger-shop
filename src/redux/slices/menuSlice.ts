import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { burgerType, RootState } from '../store';

interface menuSlaceState {
  burgers: burgerType[];
}

const initialState: menuSlaceState = {
  burgers: [],
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    addBurger: (state, action: PayloadAction<burgerType>) => {
      state.burgers.push(action.payload);
    },
    updateBurger: (state, action: PayloadAction<burgerType>) => {
      const modifyBurger = state.burgers.find((obj) => obj.id === action.payload.id);
      if (modifyBurger) {
        modifyBurger.name = action.payload.name;
        modifyBurger.image = action.payload.image;
        modifyBurger.desc = action.payload.desc;
        modifyBurger.price = action.payload.price;
        modifyBurger.status = action.payload.status;
      }
    },
    deleteBurger: (state, action: PayloadAction<number>) => {
      state.burgers = state.burgers.filter((obj) => obj.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addBurger, updateBurger, deleteBurger } = menuSlice.actions;
export const selectBurgers = (state: RootState) => state.menu.burgers;
export const selectBurgerById = (id: number) => (state: RootState) =>
  state.menu.burgers.find((obj) => obj.id === id);

export default menuSlice.reducer;
