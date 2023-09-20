import React from "react";

const Table = ({ dataFile }) => {
  return (
    <div className="data-list">
      {dataFile?.map((item) => (
        <div key={item.id} className="data-item">
          <p className="data-name">{item.id}</p>
          <img className="data-image" src={item.image} />
          {item.vitrinam === 1 ? (
            <>
              <img className="data-image" src={item.nam} alt="Ảnh nam" />
              <img className="data-image" src={item.nu} alt="Ảnh nữ" />
            </>
          ) : (
            <>
              <img className="data-image" src={item.nu} alt="Ảnh nữ" />
              <img className="data-image" src={item.nam} alt="Ảnh nam" />
            </>
          )}
          <p className="data-name">{item.vtrinam}</p>
        </div>
      ))}
    </div>
  );
};

export default Table;
