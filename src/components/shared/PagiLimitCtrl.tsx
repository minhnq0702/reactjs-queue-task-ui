export interface CPagiLimitCtrlProps {
  limit: number;
  total: number;
  onLimitChange: (val: number) => void;
}

const CPagiLimitCtrl = ({ limit, total, onLimitChange }: CPagiLimitCtrlProps) => {
  return (
    <div className="flex justify-between text-default-400">
      <span className="text-medium">Total {total} tasks</span>
      <label className="items-center text-medium">
        Rows per page:
        <select
          className="bg-transparent outline-none hover:cursor-pointer"
          defaultValue={limit}
          onChange={(e) => onLimitChange(parseInt(e.target.value))}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </label>
    </div>
  );
};

export default CPagiLimitCtrl;
