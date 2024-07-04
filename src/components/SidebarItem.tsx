import { PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';
import './SidebarItem.css';

interface CSidebarItemProps {
  startItem?: React.ReactNode;
  to?: string;
}

const CSidebarItem = ({ startItem, to = '/', children }: PropsWithChildren<CSidebarItemProps>) => {
  return (
    <li id="sidebar-item-container">
      <NavLink to={to} className="w-full">
        {({ isActive }) => (
          <div id="sidebar-item-inner" className={`${isActive ? 'active' : ''}`}>
            <span id="sidebar-item-logo" className="px-3">
              {startItem ?? null}
            </span>
            <span id="sidebar-item-label" className="flex-1 truncate text-medium">
              {children}
            </span>
          </div>
        )}
      </NavLink>
    </li>
  );
};

export default CSidebarItem;
