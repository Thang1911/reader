import logo from './logo.svg';
import './App.css';
import Main from './Components/Man';

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
    <div className="App">
      {csvFiles.map((file, index) => (
        <div key={index}>
          <Main file={file} />
          <p>----------------------------</p>
        </div>
      ))}
    </div>
  );
}

export default App;
