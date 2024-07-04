import { createSlice } from '@reduxjs/toolkit';
import { ITask } from '../TTask';

const taskSlice = createSlice({
  name: 'task',
  initialState: {
    tasks: [] as ITask[],
    task: {} as ITask,
  },
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

export default taskSlice.reducer;
