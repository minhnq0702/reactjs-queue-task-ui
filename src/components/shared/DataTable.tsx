import { ReactNode } from 'react';

export interface CDataTableProps {
  isLoading?: boolean;
  limitCtrl?: ReactNode;
  pageCtrl?: ReactNode;
  onRowClick?: (id: string) => void;
}
