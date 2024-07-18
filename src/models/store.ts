import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { messageSlice } from './slices/SliceMessage';
import { taskSlice } from './slices/SliceTask';
import { userSlice } from './slices/SliceUser';
const reducer = {
  [userSlice.name]: userSlice.reducer,
  [taskSlice.name]: taskSlice.reducer,
  [messageSlice.name]: messageSlice.reducer,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  preloadedState: {},
});

export type Store = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispath = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
