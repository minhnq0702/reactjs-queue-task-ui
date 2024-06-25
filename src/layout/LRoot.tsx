import { Outlet } from 'react-router-dom';
import CHeader from '../components/Header';

const LRoot = () => {
  return (
    <div id="root-layout" className="min-h-svh">
      <CHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default LRoot;
