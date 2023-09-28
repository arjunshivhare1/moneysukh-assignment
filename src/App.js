import "./App.css";
import TableData from "./Table";
import jsonData from "./dataTable.json";

function App() {
  return <TableData data={jsonData} />;
}

export default App;
