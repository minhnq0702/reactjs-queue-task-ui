import { IMessage } from '@/models/TMessage';
import { getKeyValue, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react';
import { useCallback, useMemo } from 'react';
// import { AiOutlineEdit } from 'react-icons/ai';
import { FaCopy, FaEye, FaTrashCan } from 'react-icons/fa6';
import { toast } from 'sonner';
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
  {
    key: 'action',
    label: 'Action',
  },
];

const CMessageTable = ({ messages, limitCtrl, pageCtrl, onRowClick }: CMessageTableProps) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        toast.info('Copied to clipboard', { duration: 700 });
      },
      (err) => {
        // do what with error
        console.error('Failed to copy: ', err);
      },
    );
  };
  const handleClick = useCallback((msgId: string, action: string) => {
    console.log('click', msgId, action);
  }, []);

  const rows = useMemo(() => {
    return messages.map((message) => ({
      _id: message._id,
      id: (
        <div className="flex items-center">
          <span>{message._id}</span>
          <span
            className="ml-3 text-medium cursor-pointer hover:text-primary-500"
            onClick={() => copyToClipboard(message._id)}
          >
            <FaCopy />
          </span>
        </div>
      ),
      receiver: message.receiver,
      sender: message.sender,
      content: message.content,
      failReason: message.failReason,
      state: <CChipStatus status={message.state as STATUS} />,
      action: (
        <div className="relative flex items-center gap-2">
          <span
            className="text-lg text-default-400 cursor-pointer active:opacity-50 hover:text-primary-500"
            onClick={() => handleClick(message._id, 'view')}
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
            onClick={() => handleClick(message._id, 'detele')}
          >
            <FaTrashCan />
          </span>
        </div>
      ),
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
