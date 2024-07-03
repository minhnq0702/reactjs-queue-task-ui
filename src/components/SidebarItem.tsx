import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

interface CSidebarItemProps {
  startItem?: React.ReactNode;
}

const CSidebarItem = ({ children }: PropsWithChildren<CSidebarItemProps>) => {
  return (
    <li className="flex flex-col pr-2 text-left py-1">
      <Link to="#" className="flex flex-1">
        <span id="sidebar-item-logo" className="px-3"></span>
        <span id="sidebar-item-label" className="flex-1 truncate">
          {children}
        </span>
      </Link>
    </li>
  );
};

export default CSidebarItem;
