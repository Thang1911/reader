import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import Table from "./Table";

function Main({ file }) {
  const [csvData, setCsvData] = useState([]);
  const [dataFetched, setDataFetched] = useState(false); // Sử dụng biến này để kiểm tra xem dữ liệu đã được fetch hay chưa

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/csvFiles/${file}`);
        if (response.ok) {
          const textData = await response.text();
          console.log(textData);
          const results = [];

          Papa.parse(textData, {
            header: true,
            delimiter: ",",
            complete: (result) => {
              results.push(result.data);
            },
          });

          console.log(results);
          setCsvData(results);
          setDataFetched(true); // Đặt biến dataFetched thành true khi dữ liệu đã được fetch thành công
        } else {
          console.error(`Error reading ${file}: HTTP ${response.status}`);
        }
      } catch (error) {
        console.error(`Error reading ${file}:`, error);
      }
    };

    // Chỉ fetch dữ liệu khi dataFetched là false hoặc csvData[0].length <= 0
    if (!dataFetched || csvData[0].length <= 0) {
      fetchData();
    }
  }, [file, csvData, dataFetched]);

  return (
    <div>
      <h3>Data from File {file}</h3>
      <Table data={csvData[0]} />
    </div>
  );
}

export default Main;
