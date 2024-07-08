import { IMessage } from '@/models/TMessage';
import { getKeyValue, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react';
import { useMemo } from 'react';
import { FaCopy } from 'react-icons/fa6';
import CChipStatus, { STATUS } from '../shared/ChipStatus';
import { CDataTableProps } from '../shared/DataTable';

export interface CMessageTableProps extends CDataTableProps {
  messages: IMessage[];
}

const MessageColumn = [
  {
    key: 'sender',
    label: 'Sender',
  },
  {
    key: 'receiver',
    label: 'Receiver',
  },
  {
    key: 'content',
    label: 'Content',
  },
  {
    key: 'failReason',
    label: 'Fail Reason',
  },
  {
    key: 'id',
    label: 'ID',
  },
  {
    key: 'state',
    label: 'Status',
  },
];

const CMessageTable = ({ messages, limitCtrl, pageCtrl, onRowClick }: CMessageTableProps) => {
  const rows = useMemo(() => {
    return messages.map((message) => ({
      _id: message._id,
      id: (
        <div className="flex items-center">
          <span>{message._id}</span>{' '}
          <span className="ml-3 hover:cursor-pointer">
            <FaCopy />
          </span>
        </div>
      ),
      receiver: message.receiver,
      sender: message.sender,
      content: message.content,
      failReason: message.failReason,
      state: <CChipStatus status={message.state as STATUS} />,
    }));
  }, [messages]);

  return (
    <div className="">
      <Table
        aria-label="Message Summary"
        isStriped
        topContent={limitCtrl}
        topContentPlacement="outside"
        bottomContent={pageCtrl}
        bottomContentPlacement="outside"
      >
        <TableHeader columns={MessageColumn}>
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

export default CMessageTable;
