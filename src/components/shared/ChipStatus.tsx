import { Chip, ChipProps } from '@nextui-org/react';

export type STATUS = 'draft' | 'started' | 'failed' | 'success' | 'queued';

export interface CChipStatusProps {
  status: STATUS;
}

const getStatusColor = (status: STATUS): ChipProps['color'] => {
  switch (status) {
    case 'draft':
      return 'default';
    case 'started':
      return 'primary';
    case 'queued':
      return 'secondary';
    case 'success':
      return 'success';
    case 'failed':
      return 'danger';
    default:
      return 'default';
  }
};

const CChipStatus = ({ status }: CChipStatusProps) => {
  return (
    <div>
      <Chip radius="lg" color={getStatusColor(status)} className="capitalize">
        {status}
      </Chip>
    </div>
  );
};

export default CChipStatus;
