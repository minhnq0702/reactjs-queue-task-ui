import TaskTable from '@/components/blocks/TaskTable';
import CPagiLimitCtrl from '@/components/shared/PagiLimitCtrl';
import CPagiPageCtrl from '@/components/shared/PagiPageCtrl';
import CSideModal from '@/components/shared/SideModal';
import { actions } from '@/models/slices/SliceTask';
import { useAppDispath, useAppSelector } from '@/models/store';
import { ITask, TApi } from '@/models/types';
import { useDisclosure } from '@nextui-org/react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { toast } from 'sonner';

const PAGE = 1;
const LIMIT = 20;

const PTask = () => {
  const dispath = useAppDispath();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const tasks = useAppSelector((state) => state.task.tasks);
  const [limit, setLimit] = useState(LIMIT);
  const [currentPage, setCurrentPage] = useState(PAGE);
  const [totalItem, setTotalItem] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const fetchTasks = useCallback((_limit: number, _page: number) => {
    void dispath(actions.LIST_TASKS({ limit: _limit, page: _page })).then((res) => {
      const total = (res.payload as TApi<ITask>).total ?? 0;
      setTotalItem(total);
      setTotalPage(Math.ceil(total / _limit));
    });
  }, []);

  useEffect(() => {
    // * initial fetch on page load
    fetchTasks(limit, currentPage);
  }, [limit, currentPage]);

  const pageChange = (page: number) => {
    setCurrentPage(page);
  };

  const limitChange = (val: number) => {
    setLimit(val);
    pageChange(PAGE);
  };

  const _limitCtrl = useMemo(() => {
    return <CPagiLimitCtrl total={totalItem} limit={limit} onLimitChange={limitChange} />;
  }, [totalItem]);

  const _pageCtrl = useMemo(() => {
    return <CPagiPageCtrl currentPage={currentPage} totalPage={totalPage} onPageChange={pageChange} />;
  }, [totalPage, currentPage]);

  const onViewTask = useCallback((taskId: string) => {
    console.log('open modal task', taskId, limit, currentPage);
    onOpen();
  }, []);

  const onDeleteTask = useCallback(
    (taskId: string) => {
      dispath(actions.DELETE_TASK_BY_ID(taskId))
        .unwrap()
        .then(() => {
          toast.success('Task deleted');
          fetchTasks(limit, currentPage);
        })
        .catch((err: Error) => {
          toast.error(err.message);
        });
    },
    [limit, currentPage],
  );

  return (
    <>
      <CSideModal isOpen={isOpen} onOpenChange={onOpenChange} />
      {/* <div className="max-w-screen-xl m-auto"> */}
      <TaskTable
        tasks={tasks}
        limitCtrl={_limitCtrl}
        pageCtrl={_pageCtrl}
        onView={onViewTask}
        onDelete={onDeleteTask}
      />
      {/* </div> */}
    </>
  );
};

export default PTask;
