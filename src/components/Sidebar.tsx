import { FaBarsProgress, FaCheckDouble } from 'react-icons/fa6';
import './Sidebar.css';

import CSidebarItem from './SidebarItem';
import SidebarItemGroup from './SidebarItemGroup';
const CSidebar = () => {
  return (
    <aside className="sidebar">
      <div className="nav">
        <nav>
          <CSidebarItem startItem={<FaCheckDouble />} to="/dashboard">
            Dashboard
          </CSidebarItem>
          <CSidebarItem startItem={<FaBarsProgress />} to="/tasks">
            Queued Tasks
          </CSidebarItem>
          <SidebarItemGroup title="Groups">
            <CSidebarItem startItem={<FaBarsProgress />} to="/tasks">
              Some others 1
            </CSidebarItem>
            <CSidebarItem startItem={<FaBarsProgress />} to="/tasks">
              Some others 2
            </CSidebarItem>
          </SidebarItemGroup>
        </nav>
      </div>
    </aside>
  );
};

export default CSidebar;
