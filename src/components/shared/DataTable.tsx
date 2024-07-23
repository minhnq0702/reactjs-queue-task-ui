import { ReactNode } from 'react';

export type TableActionType = 'view' | 'delete';

export interface CDataTableProps {
  isLoading?: boolean;
  limitCtrl?: ReactNode;
  pageCtrl?: ReactNode;
  onRowClick?: (id: string) => void;
  onView?: (id: string) => void;
  onDelete?: (id: string) => void;
}
