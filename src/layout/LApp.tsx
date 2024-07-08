import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import CSidebar from '../components/Sidebar';
import './LApp.css';

const CLoading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-2xl font-bold">Loading...</div>
    </div>
  );
};

const LApp = () => {
  return (
    <div className="pt-8">
      <CSidebar></CSidebar>
      <div className="container app">
        <main className="px-14">
          <Suspense fallback={<CLoading />}>
            <Outlet></Outlet>
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default LApp;
