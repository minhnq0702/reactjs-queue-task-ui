import { PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';
import './SidebarItem.css';

interface CSidebarItemProps {
  startItem?: React.ReactNode;
  to?: string;
}

const CSidebarItem = ({ startItem, to = '/', children }: PropsWithChildren<CSidebarItemProps>) => {
  return (
    <li className="flex text-left">
      <NavLink to={to} className="w-full">
        {({ isActive }) => (
          <div id="sidebar-item" className={`flex items-center py-1 pr-2 ${isActive ? 'active' : ''}`}>
            <span id="sidebar-item-logo" className="px-3">
              {startItem ?? null}
            </span>
            <span id="sidebar-item-label" className="flex-1 truncate">
              {children}
            </span>
          </div>
        )}
      </NavLink>
    </li>
  );
};

export default CSidebarItem;
