export const TableHeader = () => {
  const titles = ["ID", "TITLE", "DESCRIPTION", "STATUS"];

  return (
    <div className="table-header">
      {titles.map((title) => (
        <div className="table-header__title">{title}</div>
      ))}
    </div>
  );
};
