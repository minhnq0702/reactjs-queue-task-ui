import { Outlet } from 'react-router-dom';
import CHeader from '../components/Header';
import './LRoot.css';

interface LRootProps {
  allowSearch: boolean;
}

const LRoot = ({ allowSearch }: LRootProps) => {
  return (
    <div id="root-layout" className="">
      <CHeader allowSearch={allowSearch} />
      <main className="flex flex-col">
        <Outlet />
      </main>
    </div>
  );
};

export default LRoot;
