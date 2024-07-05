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
const GET_TASK_BY_ID = 'GET_TASK_BY_ID';

export const actions = {
  [LIST_TASKS]: (limit: number) => {
    return async (dispatch: AppDispatch) => {
      const res = await http.get<TApi<ITask>>('/tasks', { limit });
      dispatch(setTasks(res.data.data));
    };
  },
  [GET_TASK_BY_ID]: (id: string) => {
    return async (dispatch: AppDispatch) => {
      const res = await http.get<TApi<ITask>>(`/tasks/${id}`);
      if (res.data.data === null) {
        return;
      }

      // TODO: remove [0]
      dispatch(setTask(res.data.data[0]));
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
