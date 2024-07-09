import { PropsWithChildren } from 'react';

interface CSidebarItemGroupProps {
  title: string;
  // children: JSX.Element[];
}

const CSidebarItemGroup = ({ title, children }: PropsWithChildren<CSidebarItemGroupProps>) => {
  return (
    <div className="">
      <h3 className="pl-3 font-normal text-default-500 text-small">{title}</h3>
      <ul>{children}</ul>
    </div>
  );
};

export default CSidebarItemGroup;
