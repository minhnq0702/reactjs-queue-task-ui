import { Pagination, PaginationProps } from '@nextui-org/react';

export interface CPagiPageCtrlProps {
  totalPage: PaginationProps['total'];
  currentPage: PaginationProps['page'];
  onPageChange: PaginationProps['onChange'];
}

const CPagiPageCtrl = ({ currentPage, totalPage, onPageChange }: CPagiPageCtrlProps) => {
  return (
    <div className="py-2 flex justify-end items-end">
      <Pagination isCompact showControls size="md" total={totalPage} page={currentPage} onChange={onPageChange} />
    </div>
  );
};

export default CPagiPageCtrl;
