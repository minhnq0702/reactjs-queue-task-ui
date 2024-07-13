import { Outlet } from 'react-router-dom';
import CSidebar from '../components/Sidebar';
import './LApp.css';

const LApp = () => {
  return (
    <div>
      <CSidebar></CSidebar>
      <div className="app container">
        <main className="px-14">
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
};

export default LApp;
