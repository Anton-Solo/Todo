import "./table.scss";
import { TableHeader } from "./tableHeader";
import { TableInfo } from "./tableInfo";

export const Table = () => {
  return (
    <div className="table">
      <TableHeader />
      <TableInfo />
    </div>
  );
};
