import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import Table from "./Table";

function Main({ file }) {
  const [csvData, setCsvData] = useState([]);

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
          setCsvData(results[0]);

        } else {
          console.error(`Error reading ${file}: HTTP ${response.status}`);
        }
      } catch (error) {
        console.error(`Error reading ${file}:`, error);
      }
    };
    fetchData();
  }, [file]);

  return (
    <div>
      <h3>Data from File {file}</h3>
      <Table data={csvData} />
    </div>
  );
}

export default Main;
