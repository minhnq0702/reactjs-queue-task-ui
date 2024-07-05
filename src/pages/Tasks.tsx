import { actions } from '@/models/slices/SliceTask';
import { useAppDispath } from '@/models/store';
import { useEffect } from 'react';

const PTask = () => {
  // const tasks = useAppSelector((state) => state.task.tasks);
  const dispath = useAppDispath();

  useEffect(() => {
    // TODO remove void
    void dispath(actions.LIST_TASKS(10));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>PTask</h1>
    </div>
  );
};

export default PTask;
