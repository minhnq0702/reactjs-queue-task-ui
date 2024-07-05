import { Outlet } from 'react-router-dom';
import CSidebar from '../components/Sidebar';
import './LApp.css';

const LApp = () => {
  return (
    <div className="pt-8">
      <CSidebar></CSidebar>
      <div className="container app">
        <main className="px-10">
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
};

export default LApp;
