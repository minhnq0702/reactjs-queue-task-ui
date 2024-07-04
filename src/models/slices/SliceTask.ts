import { createSlice } from '@reduxjs/toolkit';
import { ITask } from '../TTask';

export interface TaskState {
  tasks: ITask[];
  task: ITask | null;
}

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
