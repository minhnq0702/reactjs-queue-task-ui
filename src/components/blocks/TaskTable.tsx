import { ITask } from '@/models/types';
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, getKeyValue } from '@nextui-org/react';
import { useMemo } from 'react';
import CChipStatus, { STATUS } from '../shared/ChipStatus';
import CCopyToClipboard from '../shared/CopyToClipboard';
import { CDataTableProps } from '../shared/DataTable';

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
    label: 'CREATED AT',
  },
  {
    key: 'updatedAt',
    label: 'UPDATED AT',
  },
  {
    key: 'id',
    label: 'ID',
  },
  {
    key: 'state',
    label: 'STATUS',
  },
];

const CTaskTable = ({ tasks, limitCtrl, pageCtrl, onRowClick }: CTaskTablePros) => {
  const rows = useMemo(() => {
    return tasks.map((task) => ({
      // index: `#${i + 1}`,
      _id: task._id,
      id: <CCopyToClipboard content={task._id} />,
      model: task.model,
      func: task.func,
      state: <CChipStatus status={task.state as STATUS} />,
      createdAt: new Date(task.createdAt).toLocaleString('vi'),
      updatedAt: new Date(task.updatedAt).toLocaleString('vi'),
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
