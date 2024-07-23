import { ITask } from '@/models/types';
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, getKeyValue } from '@nextui-org/react';
import { useMemo } from 'react';
import { FaEye, FaTrashCan } from 'react-icons/fa6';
import CChipStatus, { STATUS } from '../shared/ChipStatus';
import CCopyToClipboard from '../shared/CopyToClipboard';
import { CDataTableProps, TableActionType } from '../shared/DataTable';

export interface CTaskTablePros extends CDataTableProps {
  tasks: ITask[];
}

const TaskColumn = [
  // {
  //   key: 'index',
  //   label: '#',
  // },
  {
    key: 'model',
    label: 'Model',
  },
  {
    key: 'func',
    label: 'Func',
  },
  {
    key: 'createdAt',
    label: 'Created at',
  },
  {
    key: 'updatedAt',
    label: 'Updated at',
  },
  {
    key: 'id',
    label: 'ID',
  },
  {
    key: 'state',
    label: 'Status',
  },
  {
    key: 'action',
    label: 'Action',
  },
];

const CTaskTable = ({ tasks, limitCtrl, pageCtrl, onRowClick, ...props }: CTaskTablePros) => {
  const handleClick = (taskId: string, action: TableActionType) => {
    if (action === 'view' && props.onView) {
      props.onView(taskId);
    }
    if (action === 'delete' && props.onDelete) {
      props.onDelete(taskId);
    }
  };

  const rows = useMemo(() => {
    return tasks.map((task) => ({
      _id: task._id,
      id: <CCopyToClipboard content={task._id} />,
      model: task.model,
      func: task.func,
      state: <CChipStatus status={task.state as STATUS} />,
      createdAt: new Date(task.createdAt).toLocaleString('vi'),
      updatedAt: new Date(task.updatedAt).toLocaleString('vi'),
      action: (
        <div>
          <div className="relative flex items-center gap-2">
            <span
              className="text-lg text-default-400 cursor-pointer active:opacity-50 hover:text-primary-500"
              onClick={() => handleClick(task._id, 'view')}
            >
              <FaEye />
            </span>
            {/* <span
            className="text-lg text-default-400 cursor-pointer active:opacity-50 hover:text-primary-500"
            onClick={() => handleClick(message._id, 'edit')}
          >
            <AiOutlineEdit />
          </span> */}
            <span
              className="text-medium text-danger-400 cursor-pointer active:opacity-70"
              onClick={() => handleClick(task._id, 'delete')}
            >
              <FaTrashCan />
            </span>
          </div>
        </div>
      ),
    }));
  }, [tasks]);

  return (
    <div className="">
      <Table
        aria-label="Task Summary"
        isStriped
        topContent={limitCtrl}
        topContentPlacement="outside"
        bottomContent={pageCtrl}
        bottomContentPlacement="outside"
      >
        <TableHeader columns={TaskColumn}>
          {(col) => (
            <TableColumn aria-label={col.key} key={col.key} className="text-small">
              {col.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows} emptyContent={'No rows to display.'}>
          {(row) => (
            <TableRow className="h-10" key={row._id} onClick={() => (onRowClick ? onRowClick(row._id) : null)}>
              {(colKey) => <TableCell>{getKeyValue(row, colKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default CTaskTable;
