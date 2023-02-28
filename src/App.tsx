import React from "react";
import { Header } from "./components/header/header";
import { Table } from "./components/table/table";

function App() {
  return (
    <div className="todo">
      <Header />
      <Table />
    </div>
  );
}

export default App;
