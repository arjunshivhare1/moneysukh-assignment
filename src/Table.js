import { useState } from "react";

const TableData = ({ data = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 200;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th style={{ width: "15%" }}>Segment</th>
            <th style={{ width: "15%" }}>Instrument Type</th>
            <th style={{ width: "15%" }}>Symbol</th>
            <th style={{ width: "10%" }}>Option Type</th>
            <th style={{ width: "10%" }}>Expiry Date</th>
            <th style={{ width: "5%" }}>Strike Price</th>
            <th style={{ width: "5%" }}>Bf Qty</th>
            <th style={{ width: "5%" }}>Bf Rate</th>
            <th style={{ width: "15%" }}>Carried Net Value</th>
            <th style={{ width: "5%" }}>Day Buy Qty</th>
          </tr>
        </thead>
        <tbody>
          {currentItems?.map((dataObj, index) => (
            <tr key={index * Math.random()}>
              <td>{dataObj["SYMBOL"]}</td>
              <td>{dataObj["INSTRUMENT"]}</td>
              <td>{dataObj["SYMBOL"]}</td>
              <td>{dataObj["OPTION_TYP"]}</td>
              <td>{dataObj["EXPIRY_DT"]}</td>
              <td>{dataObj["STRIKE_PR"]}</td>
              <td>{0}</td>
              <td>{0}</td>
              <td>{dataObj["VAL_INLAKH"]}</td>
              <td>{0}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button
          onClick={() =>
            handlePageChange(currentPage > 1 ? currentPage - 1 : currentPage)
          }
        >
          Previous
        </button>
        {Array.from(
          { length: Math.ceil(data.length / itemsPerPage) },
          (_, index) => (
            <button key={index} onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </button>
          )
        )}
        <button
          onClick={() =>
            handlePageChange(
              currentPage < Math.ceil(data.length / itemsPerPage)
                ? currentPage + 1
                : currentPage
            )
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TableData;
