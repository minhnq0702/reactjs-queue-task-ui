import { actions } from '@/models/slices/SliceTask';
import { useAppDispath, useAppSelector } from '@/models/store';
import { useEffect } from 'react';

const PTask = () => {
  const tasks = useAppSelector((state) => state.task.tasks);
  const dispath = useAppDispath();

  useEffect(() => {
    // actions.listTasks();
    console.log('tasks', tasks);
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    dispath(actions.LIST_TASKS());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>PTask</h1>
    </div>
  );
};

export default PTask;
