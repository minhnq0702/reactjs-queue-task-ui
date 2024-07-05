import { createAsyncThunk as createReduxAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from './store';

// unsed yet
export const createAppAsyncThunk = createReduxAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
}>() as typeof createReduxAsyncThunk;
