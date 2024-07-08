import { Pagination, PaginationProps } from '@nextui-org/react';

export interface CPagiPageCtrlProps {
  totalPage: PaginationProps['total'];
  currentPage: PaginationProps['page'];
  onPageChange: PaginationProps['onChange'];
}

const CPagiPageCtrl = ({ currentPage, totalPage, onPageChange }: CPagiPageCtrlProps) => {
  return (
    <div className="py-2 flex justify-end items-end mb-4">
      {totalPage > 0 ? (
        <Pagination isCompact showControls size="md" total={totalPage} page={currentPage} onChange={onPageChange} />
      ) : null}
    </div>
  );
};

export default CPagiPageCtrl;
