import { Pagination, PaginationProps } from '@nextui-org/react';

export interface CPaginationProps {
  total: PaginationProps['total'];
  page: PaginationProps['page'];
  onChange: PaginationProps['onChange'];
}

const CPagination = ({ page, total, onChange }: CPaginationProps) => {
  return <Pagination isCompact showControls size="md" total={total} page={page} onChange={onChange} />;
};

export default CPagination;
