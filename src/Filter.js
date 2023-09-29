import { useState } from "react";
import jsonData from "./dataTable.json";

const initialFilter = {
  INSTRUMENT: "",
  SYMBOL: "",
  VAL_INLAKH: "",
};

const Filters = ({ setData }) => {
  const [filterValue, setFilterValue] = useState(initialFilter);

  const filterDataResult = (val) => {
    const filterData = jsonData.filter((subData) => {
      let matchFilters = true;
      if (val["INSTRUMENT"]) {
        matchFilters =
          matchFilters &&
          subData["INSTRUMENT"]?.toLowerCase() ===
            val["INSTRUMENT"]?.toLowerCase();
      }
      if (val["SYMBOL"]) {
        matchFilters =
          matchFilters &&
          subData["SYMBOL"]?.toLowerCase() === val["SYMBOL"]?.toLowerCase();
      }
      if (val["VAL_INLAKH"]) {
        const filterParts = val["VAL_INLAKH"].match(/([^0-9.]+)([0-9.]+)/);
        const operator = filterParts[1];
        const filterNumber = parseFloat(filterParts[2]);

        if (!operator || isNaN(filterNumber)) {
          return matchFilters;
        }

        if (operator === ">")
          matchFilters = matchFilters && subData["VAL_INLAKH"] > filterNumber;
        else if (operator === "<")
          matchFilters = matchFilters && subData["VAL_INLAKH"] < filterNumber;
        else if (operator === "=")
          matchFilters = matchFilters && subData["VAL_INLAKH"] === filterNumber;
      }
      return matchFilters;
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
          placeholder="NIFTY, SBIN, etc."
          onChange={handleFilter}
        />
      </div>
      <div style={{ width: "10%" }}>-</div>
      <div style={{ width: "10%" }}>-</div>
      <div style={{ width: "5%" }}>-</div>
      <div style={{ width: "5%" }}>-</div>
      <div style={{ width: "5%" }}>-</div>
      <div style={{ width: "15%" }}>
        <div>-</div>
        <input
          type="text"
          value={filterValue.VAL_INLAKH}
          name="VAL_INLAKH"
          placeholder=">100, <100, =100"
          onChange={handleFilter}
        />
      </div>
      <div style={{ width: "5%" }}>-</div>
    </div>
  );
};
export default Filters;
