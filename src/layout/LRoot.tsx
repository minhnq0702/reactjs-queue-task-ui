import { Outlet } from 'react-router-dom';
import CHeader from '../components/Header';
import './LRoot.css';

const LRoot = () => {
  return (
    <div id="root-layout" className="">
      <CHeader />
      <main className="flex flex-col">
        <Outlet />
      </main>
    </div>
  );
};

export default LRoot;
