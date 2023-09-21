import { useEffect, useState } from "react";
import "./App.css";
import Main from "./Components/Man";

const csvFiles = [
  "Skchaunoi.csv",
  "skchiatay.csv",
  "skConLapGiaDinh.csv",
  "skDudoancontuonglai.csv",
  "skGapNhau.csv",
  "skhanhphuc.csv",
  "skkethon.csv",
  "sklyhon.csv",
  "skmaymua.csv",
  "skmuasam.csv",
  "skngoaitinh.csv",
  "sknym.csv",
  "skSinhConDauLong.csv",
  "skSinhConThuHai.csv",
  "skToTinh.csv",
  "skTuoiGia.csv",
  "skvohoacchongchettruoc.csv",
];

const itemsPerPage = 1;

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const totalPages = Math.ceil(csvFiles.length / itemsPerPage);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentFiles = csvFiles.slice(startIndex, endIndex);

  return (
    <div>
      {isLoading ? (
        <div className="skeleton"></div>
      ) : (
        <div>
          {currentFiles && currentFiles.length > 0 ? (
            <div className="App">
              {currentFiles.map((file, index) => (
                <div key={index}>
                  <Main file={file} />
                  {index < currentFiles.length - 1 && <hr />}
                </div>
              ))}
              <div>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                  Previous
                </button>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </div>
          ) : (
            <div className="App">Không có tệp CSV nào.</div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
