import { ReactNode } from 'react';

export interface CDataTableProps {
  limitCtrl?: ReactNode;
  pageCtrl?: ReactNode;
  onRowClick?: (id: string) => void;
}
