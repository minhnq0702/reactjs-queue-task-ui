import { Card } from '@nextui-org/react';

export interface CTaskItemProps {
  id: string;
  state: string;
  model: string;
  func: string;
  createdAt: Date;
  updatedAt: Date;
}

const CTaskItem = (props: CTaskItemProps) => {
  return (
    <>
      <Card>
        <div key={props.id}>
          <h3 className="text-lg font-semibold">{props.model}</h3>
          <p className="text-sm text-gray-500">{props.func}</p>
        </div>
      </Card>
    </>
  );
};

export default CTaskItem;
