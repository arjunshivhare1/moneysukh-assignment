import { useState } from "react";
import "./App.css";
import Filters from "./Filter";
import TableData from "./Table";

function App() {
  const [data, setData] = useState([]);

  return (
    <div>
      <Filters setData={setData} />
      <TableData data={data} />
    </div>
  );
}

export default App;
