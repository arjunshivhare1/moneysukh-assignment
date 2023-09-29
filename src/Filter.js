import { useState } from "react";
import jsonData from "./dataTable.json";

const initialFilter = {
  INSTRUMENT: "",
  SYMBOL: "",
};

const Filters = ({ setData }) => {
  const [filterValue, setFilterValue] = useState(initialFilter);

  const filterDataResult = (val) => {
    const filterData = jsonData.filter((subData) => {
      let meetsFilters = true;
      if (val["INSTRUMENT"]) {
        meetsFilters =
          meetsFilters &&
          subData["INSTRUMENT"]?.toLowerCase() ===
            val["INSTRUMENT"]?.toLowerCase();
      }
      if (val["SYMBOL"]) {
        meetsFilters =
          meetsFilters &&
          subData["SYMBOL"]?.toLowerCase() === val["SYMBOL"]?.toLowerCase();
      }
      return meetsFilters;
    });
    setData(filterData);
  };

  const handleFilter = (e) => {
    const { name, value } = e.target;
    const newFilterValue = { ...filterValue, [name]: value };
    setFilterValue(newFilterValue);
    filterDataResult(newFilterValue);
  };

  return (
    <div className="filter-section">
      <div style={{ width: "15%" }}>
        <div>-</div>
      </div>
      <div style={{ width: "15%" }}>
        <div>-</div>
        <input
          type="text"
          value={filterValue.INSTRUMENT}
          name="INSTRUMENT"
          placeholder="FUTIDX, FUTSTK, etc."
          onChange={handleFilter}
        />
      </div>
      <div style={{ width: "15%" }}>
        <div>-</div>
        <input
          type="text"
          value={filterValue.SYMBOL}
          name="SYMBOL"
          placeholder="NIFTY, FINNIFTY, etc."
          onChange={handleFilter}
        />
      </div>
      <div style={{ width: "10%" }}>-</div>
      <div style={{ width: "10%" }}>-</div>
      <div style={{ width: "5%" }}>-</div>
      <div style={{ width: "5%" }}>-</div>
      <div style={{ width: "5%" }}>-</div>
      <div style={{ width: "10%" }}>-</div>
      <div style={{ width: "10%" }}>-</div>
    </div>
  );
};
export default Filters;
