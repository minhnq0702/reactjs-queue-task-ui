import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../TUser';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null as IUser | null,
    name: '',
    email: '',
  },
  reducers: {
    setUser(state, action: { payload: IUser }) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
