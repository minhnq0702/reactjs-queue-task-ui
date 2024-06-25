import { FC } from 'react';

const CHeader: FC = () => {
  return (
    <div className="top-0 py-2 h-14 bg-gray-400 gap-2 flex flex-row items-center justify-between">
      <div className="px-2 justify-start">Logo Holder</div>
      <div>Search Holder</div>
      <div className="px-2 justify-end">User Holder</div>
    </div>
  );
};

export default CHeader;
