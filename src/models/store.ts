import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/SliceUser';
const reducer = {
  user: userReducer,
};

export default configureStore({
  reducer,
});
