import React from "react";
import { Link } from "react-router-dom";

const csvFiles = [
  "Skchaunoi.csv",
  "skchiatay.csv",
  "skConLapGiaDinh.csv",
  "skDudoancontuonglai.csv",
  "skGapNhau.csv",
  "skhaihuoc.csv",
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

const Home = () => {
  return (
    <div>
      {csvFiles.map((file, index) => (
        <div key={index}>
          <Link to={`/${file}`}>
            <button className="custom-button">{file}</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
