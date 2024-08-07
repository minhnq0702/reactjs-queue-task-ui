import http from '@/http';
import { IPaginationQuery, ITask, TApi } from '@/models/types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface TaskState {
  tasks: ITask[];
  task: ITask | null;
}

const LIST_TASKS = 'LIST_TASKS';
const GET_TASK_BY_ID = 'GET_TASK_BY_ID';
const DELETE_TASK_BY_ID = 'DELETE_TASK_BY_ID';

export const actions = {
  [LIST_TASKS]: createAsyncThunk(
    LIST_TASKS,
    async ({ limit, page }: IPaginationQuery, { dispatch, rejectWithValue }) => {
      return http.client
        .get<TApi<ITask>>('/tasks', { params: { limit, page } })
        .then((res) => {
          dispatch(setTasks(res.data.data));
          return res.data;
        })
        .catch(rejectWithValue);
    },
  ),
  [GET_TASK_BY_ID]: createAsyncThunk(GET_TASK_BY_ID, async (id: string, { dispatch }) => {
    const res = await http.client.get<TApi<ITask>>(`/tasks/${id}`);
    if (res.data.data === null) {
      return;
    }

    // TODO: remove [0]
    dispatch(setTask(res.data.data[0]));
  }),
  [DELETE_TASK_BY_ID]: createAsyncThunk(DELETE_TASK_BY_ID, async (id: string) => {
    return http.client.delete(`/tasks/${id}`);
  }),
};

export const taskSlice = createSlice({
  name: 'task',
  initialState: {
    tasks: [],
    task: null,
  } as TaskState,
  reducers: {
    setTasks(state, action: { payload: ITask[] }) {
      state.tasks = action.payload;
    },
    setTask(state, action: { payload: ITask }) {
      state.task = action.payload;
    },
  },
});

export const { setTasks, setTask } = taskSlice.actions;
