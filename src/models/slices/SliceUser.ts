import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../TUser';

export interface UserState {
  user: IUser | null;
}

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  } as UserState,
  reducers: {
    setUser(state, action: { payload: IUser }) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
