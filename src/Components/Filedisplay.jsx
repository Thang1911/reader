import React from "react";
import Main from "./Man";
import { useParams, Link } from "react-router-dom";

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

const Filedisplay = () => {
  const { fileName } = useParams();
  console.log(fileName);

  const fileIndex = csvFiles.indexOf(fileName);

  const handlePrevFile = () => {
    if (fileIndex > 0) {
      const prevFile = csvFiles[fileIndex - 1];
      window.location.href = `/${prevFile}`;
    }
  };

  const handleNextFile = () => {
    if (fileIndex < csvFiles.length - 1) {
      const nextFile = csvFiles[fileIndex + 1];
      window.location.href = `/${nextFile}`;
    }
  };

  return (
    <div>
      <Main file={fileName} />
      <div>
        <button
          className="custom-button"
          onClick={handlePrevFile}
          disabled={fileIndex === 0}
        >
          Trang trước
        </button>
        <button
          className="custom-button"
          onClick={handleNextFile}
          disabled={fileIndex === csvFiles.length - 1}
        >
          Trang tiếp theo
        </button>
        <Link to="/">
          <button className="custom-button">Trở về trang chính</button>
        </Link>
      </div>
    </div>
  );
};

export default Filedisplay;
