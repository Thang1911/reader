import logo from "./logo.svg";
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

function App() {
  return (
    <div>
      {csvFiles && csvFiles.length > 0 ? (
        <div className="App">
          {csvFiles.map((file, index) => (
            <div key={index}>
              <Main file={file} />
              {index < csvFiles.length - 1 && <hr />}{" "}
            </div>
          ))}
        </div>
      ) : (
        <div className="App">Không có tệp CSV nào.</div>
      )}
    </div>
  );
}

export default App;
