import { FaBarsProgress, FaCheckDouble } from 'react-icons/fa6';
import './Sidebar.css';

import CSidebarItem from './SidebarItem';
const CSidebar = () => {
  return (
    <aside className="sidebar">
      <div className="nav">
        <nav>
          <CSidebarItem startItem={<FaCheckDouble />}>Dashboard</CSidebarItem>
          <CSidebarItem startItem={<FaBarsProgress />}>Queued Tasks</CSidebarItem>
          <ul>
            <li>Line ext 1</li>
            <li>Line ext 2</li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default CSidebar;
