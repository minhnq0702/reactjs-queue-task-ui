import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../TUser';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {} as IUser,
  },
  reducers: {
    setUser(state, action: { payload: IUser }) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
