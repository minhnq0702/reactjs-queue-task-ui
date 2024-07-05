import { ITask } from '@/models/TTask';
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, getKeyValue } from '@nextui-org/react';
import { useMemo } from 'react';
import CChipStatus, { STATUS } from '../shared/ChipStatus';

export interface CTaskTablePros {
  tasks: ITask[];
}

const TaskColumn = [
  {
    key: 'model',
    label: 'Model',
  },
  {
    key: 'func',
    label: 'Func',
  },
  {
    key: 'status',
    label: 'STATUS',
  },
  {
    key: 'createdAt',
    label: 'CREATED AT',
  },
  {
    key: 'updatedAt',
    label: 'UPDATED AT',
  },
];

const CTaskTable = ({ tasks }: CTaskTablePros) => {
  const rows = useMemo(() => {
    return tasks.map((task) => ({
      id: task._id,
      model: task.model,
      func: task.func,
      status: <CChipStatus status={task.state as STATUS} />,
      createdAt: new Date(task.createdAt).toLocaleString('vi'),
      updatedAt: new Date(task.updatedAt).toLocaleString('vi'),
    }));
  }, [tasks]);

  return (
    <div>
      <Table aria-label="Task Summary" isStriped className="table">
        <TableHeader columns={TaskColumn}>
          {(col) => (
            <TableColumn aria-label={col.key} key={col.key} className="text-small">
              {col.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows} emptyContent={'No rows to display.'}>
          {(row) => (
            <TableRow className="h-10" key={row.id}>
              {(colKey) => <TableCell>{getKeyValue(row, colKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default CTaskTable;
