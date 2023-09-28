import { useState } from "react";

const TableData = ({ data = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 500;

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
            <th>Segment</th>
            <th>Instrument Type</th>
            <th>Symbol</th>
            <th>Option Type</th>
            <th>Expiry Date</th>
            <th>Strike Price</th>
            <th>Bf Qty</th>
            <th>Bf Rate</th>
            <th>Carried Net Value</th>
            <th>Day Buy Qty</th>
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
