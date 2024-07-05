import { Outlet } from 'react-router-dom';
import CSidebar from '../components/Sidebar';
import './LApp.css';

const LApp = () => {
  return (
    <div className="pt-8">
      <CSidebar></CSidebar>
      <div className="container app">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default LApp;
