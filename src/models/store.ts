import { configureStore } from '@reduxjs/toolkit';
import { taskSlice } from './slices/SliceTask';
import { userSlice } from './slices/SliceUser';
const reducer = {
  [userSlice.name]: userSlice.reducer,
  [taskSlice.name]: taskSlice.reducer,
};

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
