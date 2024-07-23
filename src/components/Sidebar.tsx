import { FaBarsProgress, FaCheckDouble } from 'react-icons/fa6';
import './Sidebar.css';

import CSidebarItem from './SidebarItem';
import SidebarItemGroup from './SidebarItemGroup';
const CSidebar = () => {
  return (
    <aside className="sidebar">
      <div className="nav">
        <nav>
          <SidebarItemGroup title="Main">
            <CSidebarItem startItem={<FaCheckDouble />} to="/dashboard">
              Dashboard
            </CSidebarItem>
            <CSidebarItem startItem={<FaBarsProgress />} to="/tasks">
              Queued Tasks
            </CSidebarItem>
            <CSidebarItem startItem={<FaBarsProgress />} to="/messages">
              Messages
            </CSidebarItem>
          </SidebarItemGroup>
          <SidebarItemGroup title="Groups">
            <CSidebarItem startItem={<FaBarsProgress />} to="/auth/login">
              Some others 1
            </CSidebarItem>
            <CSidebarItem startItem={<FaBarsProgress />} to="/todo2">
              Some others 2
            </CSidebarItem>
          </SidebarItemGroup>
        </nav>
      </div>
    </aside>
  );
};

export default CSidebar;
