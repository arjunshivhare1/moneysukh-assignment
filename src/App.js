import { useEffect, useState } from "react";
import "./App.css";
import Filters from "./Filter";
import TableData from "./Table";
import jsonData from "./dataTable.json";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  return (
    <div>
      <Filters setData={setData} />
      <TableData data={data} />
    </div>
  );
}

export default App;
