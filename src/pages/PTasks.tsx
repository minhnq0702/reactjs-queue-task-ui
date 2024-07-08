import TaskTable from '@/components/blocks/TaskTable';
import CPagiLimitCtrl from '@/components/shared/PagiLimitCtrl';
import CPagiPageCtrl from '@/components/shared/PagiPageCtrl';
import CSideModal from '@/components/shared/SideModal';
import { actions } from '@/models/slices/SliceTask';
import { useAppDispath, useAppSelector } from '@/models/store';
import { TApi } from '@/models/TApi';
import { ITask } from '@/models/TTask';
import { useDisclosure } from '@nextui-org/react';
import { useCallback, useEffect, useMemo, useState } from 'react';

const PAGE = 1;
const LIMIT = 20;

const PTask = () => {
  const dispath = useAppDispath();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const tasks = useAppSelector((state) => state.task.tasks);
  const [limit, setLimit] = useState(LIMIT);
  const [totalItem, setTotalItem] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const fetchTasks = useCallback((limit: number, page: number) => {
    void dispath(actions.LIST_TASKS({ limit: limit, page: page })).then((res) => {
      const total = (res.payload as TApi<ITask>).total ?? 0;
      setTotalItem(total);
      setTotalPage(Math.ceil(total / limit));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchTasks(limit, PAGE);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit]);

  const pageChange = useCallback(
    (page: number) => {
      fetchTasks(limit, page);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [limit],
  );

  const limitChange = useCallback((val: number) => {
    setLimit(val);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _limitCtrl = useMemo(() => {
    return <CPagiLimitCtrl total={totalItem} limit={limit} onLimitChange={limitChange} />;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalItem]);

  const _pageCtrl = useMemo(() => {
    // TODO reset currentPage on limit change => use currentPage as state instead of constant 1
    return totalPage > 0 ? <CPagiPageCtrl currentPage={1} totalPage={totalPage} onPageChange={pageChange} /> : null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalPage]);

  const rowClick = (taskId: string) => {
    console.log('clicked task==>', taskId);
    onOpen();
  };

  return (
    <>
      <CSideModal isOpen={isOpen} onOpenChange={onOpenChange} />
      <div className="max-w-screen-xl m-auto">
        <div className="rounded-md">
          <TaskTable tasks={tasks} limitCtrl={_limitCtrl} pageCtrl={_pageCtrl} onRowClick={rowClick} />
        </div>
      </div>
    </>
  );
};

export default PTask;
