import { useCustomSelector } from "../../hooks/useStore";
import { todoList } from "../../store/selectors";
import { TableInfoItem } from "./tableInfoItem";

export const TableInfo = () => {
  const todos = useCustomSelector(todoList);

  return (
    <>
      {todos?.map(({ id, title, description, status }) => (
        <TableInfoItem
          id={id}
          title={title}
          description={description}
          status={status}
        />
      ))}
    </>
  );
};
