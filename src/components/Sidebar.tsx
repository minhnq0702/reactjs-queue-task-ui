import './Sidebar.css';
const CSidebar = () => {
  return (
    <aside className="sidebar">
      This is sidebar placeholder
      <div className="nav">
        <nav>
          <li>Line 1</li>
          <li>Line 2</li>
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
