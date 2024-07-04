import http from '@/http';
import { ITask } from '@/models/TTask';
import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from '../store';
import { TApi } from '../TApi';

export interface TaskState {
  tasks: ITask[];
  task: ITask | null;
}

const LIST_TASKS = 'LIST_TASKS';

export const actions = {
  [LIST_TASKS]: () => {
    return async (dispatch: AppDispatch) => {
      const res = await http.get<TApi<ITask>>('/tasks');
      dispatch(setTasks(res.data.data));
    };
  },
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
