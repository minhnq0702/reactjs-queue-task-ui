import http from '@/http';
import { TApi } from '@/models/TApi';
import { IUser } from '@/models/TUser';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface UserState {
  user: IUser | null;
}

const LOGIN = 'LOGIN';

export const actions = {
  [LOGIN]: createAsyncThunk(LOGIN, async (data: { login: string; password: string }, { dispatch, rejectWithValue }) => {
    return http.client
      .post<TApi<IUser>>('/auth/login', data)
      .then((res) => {
        dispatch(setUser(res.data.data[0]));
        return res.data;
      })
      .catch(rejectWithValue);
  }),
};

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
