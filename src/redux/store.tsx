import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import menu from './slices/menuSlice';
import order from './slices/orderSlice';

export type burgerType = {
  name: string;
  image: string;
  desc: string;
  price: number;
  status: 'available' | 'unavailable';
  count?: number;
  id?: number;
};

export const store = configureStore({
  reducer: {
    menu,
    order,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
