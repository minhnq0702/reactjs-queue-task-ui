import CSideModal from '@/components/shared/SideModal';
import { actions } from '@/models/slices/SliceTask';
import { useAppDispath } from '@/models/store';
import { Button, useDisclosure } from '@nextui-org/react';
import { useEffect } from 'react';

const PTask = () => {
  // const tasks = useAppSelector((state) => state.task.tasks);
  const dispath = useAppDispath();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    // TODO remove void
    void dispath(actions.LIST_TASKS(10));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <CSideModal isOpen={isOpen} onOpenChange={onOpenChange} />
      <div>
        <h1>PTask</h1>
        <Button onClick={onOpen}></Button>
      </div>
    </>
  );
};

export default PTask;
