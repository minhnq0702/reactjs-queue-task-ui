import TaskTable from '@/components/blocks/TaskTable';
import CSideModal from '@/components/shared/SideModal';
import { actions } from '@/models/slices/SliceTask';
import { useAppDispath, useAppSelector } from '@/models/store';
import { Button, useDisclosure } from '@nextui-org/react';
import { useEffect } from 'react';

const PTask = () => {
  const tasks = useAppSelector((state) => state.task.tasks);
  const dispath = useAppDispath();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    // TODO remove void
    void dispath(actions.LIST_TASKS(20));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <CSideModal isOpen={isOpen} onOpenChange={onOpenChange} />
      <div className="max-w-screen-xl m-auto">
        <div className="rounded-md">
          <TaskTable tasks={tasks} />
        </div>
        <Button onClick={onOpen}></Button>
      </div>
    </>
  );
};

export default PTask;
