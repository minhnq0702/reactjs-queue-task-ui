import http from '@/http';
import { TApi } from '@/models/TApi';
import { IUser } from '@/models/TUser';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface UserState {
  isLogged: boolean;
  user: IUser | null;
}

export const LOCALSTORAGE_USER = {
  UESRID: 'USERID',
};

const LOGIN = 'LOGIN';
const CHECK_LOGGED_STATE = 'CHECK_LOGGED_STATE';
const GET_PROFILE = 'GET_PROFILE';

export const actions = {
  [LOGIN]: createAsyncThunk(LOGIN, async (data: { login: string; password: string }, { dispatch, rejectWithValue }) => {
    return http.client
      .post<TApi<IUser>>('/auth/login', data)
      .then((res) => {
        // dispatch(setUser(res.data.data[0]));
        void dispatch(actions.GET_PROFILE());
        return res.data;
      })
      .catch(rejectWithValue);
  }),
  [CHECK_LOGGED_STATE]: createAsyncThunk(CHECK_LOGGED_STATE, async (_, { dispatch, rejectWithValue }) => {
    if (!localStorage.getItem(LOCALSTORAGE_USER.UESRID)) {
      // * check if has no user id in localstorage, do not fetch profile
      dispatch(setIsLogged(false));
      return false;
    }
    await dispatch(actions.GET_PROFILE())
      .then(() => {
        dispatch(setIsLogged(true));
        return true;
      })
      .catch((err) => {
        dispatch(setIsLogged(false));
        return rejectWithValue(err);
      });
  }),
  [GET_PROFILE]: createAsyncThunk(GET_PROFILE, async (_, { dispatch, rejectWithValue }) => {
    return http.client
      .get<TApi<IUser>>('/auth/profile')
      .then((res) => {
        const userData: IUser = res.data.data[0];
        dispatch(setUser(userData));
        localStorage.setItem(LOCALSTORAGE_USER.UESRID, userData._id);
        return res.data;
      })
      .catch((err) => {
        localStorage.removeItem(LOCALSTORAGE_USER.UESRID);
        return rejectWithValue(err);
      });
  }),
};

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLogged: false,
    user: null,
  } as UserState,
  reducers: {
    setIsLogged(state, action: { payload: boolean }) {
      state.isLogged = action.payload;
    },
    setUser(state, action: { payload: IUser }) {
      state.user = action.payload;
    },
  },
});

export const { setIsLogged, setUser } = userSlice.actions;
