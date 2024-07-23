import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import CHeader from '../components/Header';
import './LRoot.css';

const CLoading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-2xl font-bold">Loading...</div>
    </div>
  );
};

interface LRootProps {
  allowSearch?: boolean;
}

const LRoot = ({ allowSearch = false }: LRootProps) => {
  return (
    <div id="root-layout" className="">
      <CHeader allowSearch={allowSearch} />
      <main className="flex flex-col">
        <Suspense fallback={<CLoading />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default LRoot;
