import React from 'react';
import { Outlet } from 'react-router-dom';

const LRoot: React.FC = () => {
  return (
    <div id="root-layout">
      Cai gi day
      <Outlet />
    </div>
  );
};

export default LRoot;
