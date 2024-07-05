import { useEffect } from 'react';

const PDashboard = () => {
  useEffect(() => {
    console.log('PDashboard');
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default PDashboard;
