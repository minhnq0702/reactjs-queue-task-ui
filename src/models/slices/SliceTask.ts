import http from '@/http';
import { ITask } from '@/models/TTask';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IPaginationQuery, TApi } from '../TApi';

export interface TaskState {
  tasks: ITask[];
  task: ITask | null;
}

const LIST_TASKS = 'LIST_TASKS';
const GET_TASK_BY_ID = 'GET_TASK_BY_ID';

export const actions = {
  [LIST_TASKS]: createAsyncThunk(
    LIST_TASKS,
    async ({ limit, page }: IPaginationQuery, { dispatch, rejectWithValue }) => {
      return http
        .get<TApi<ITask>>('/tasks', { limit, page })
        .then((res) => {
          dispatch(setTasks(res.data.data));
          return res.data;
        })
        .catch(rejectWithValue);
    },
  ),
  [GET_TASK_BY_ID]: createAsyncThunk(GET_TASK_BY_ID, async (id: string, { dispatch }) => {
    const res = await http.get<TApi<ITask>>(`/tasks/${id}`);
    if (res.data.data === null) {
      return;
    }

    // TODO: remove [0]
    dispatch(setTask(res.data.data[0]));
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
