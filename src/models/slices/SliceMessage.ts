import http from '@/http';
import { IPaginationQuery, TApi } from '@/models/TApi';
import { IMessage } from '@/models/TMessage';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface MessageState {
  messages: IMessage[];
}

const LIST_MSG = 'LIST_MSG';

export const actions = {
  [LIST_MSG]: createAsyncThunk(LIST_MSG, async ({ limit, page }: IPaginationQuery, { dispatch, rejectWithValue }) => {
    return http.client
      .get<TApi<IMessage>>('/messages', { params: { limit, page } })
      .then((res) => {
        dispatch(setMessages(res.data.data));
        return res.data;
      })
      .catch(rejectWithValue);
  }),
};

export const messageSlice = createSlice({
  name: 'message',
  initialState: {
    messages: [],
  } as MessageState,
  reducers: {
    setMessages(state, action: { payload: IMessage[] }) {
      state.messages = action.payload;
    },
  },
});

export const { setMessages } = messageSlice.actions;
