import React from 'react'
import DataTable from 'react-data-table-component'

const columns = [
  {
    name: "id",
    selector: (row) => row.id,
  },
  {
    name: "image",
    cell: (row) => (
      <img
        src={row.image}
        alt={`Image`}
        style={{ width: "150px", height: "200px", objectFit: "contain" }}
      />
    ),
  },
  {
    name: "nu",
    cell: (row) => (
      <img
        src={row.nu}
        alt={`Image for female`}
        style={{ width: "150px", height: "200px", objectFit: "contain" }}
      />
    ),
  },
  {
    name: "nam",
    cell: (row) => (
      <img
        src={row.nam}
        alt={`Image for male`}
        style={{ width: "150px", height: "200px", objectFit: "contain" }}
      />
    ),
  },
  {
    name: "vitrinam",
    selector: (row) => row.vtrinam,
  },
];

const customStyles = {
  table: {
    style: {
      minWidth: "100%",
    },
  },
  columns: {
    style: {
      maxWidth: "20%",
    },
  },
  rows: {
    style: {
      minHeight: "56px", // Adjust the row height as needed
    },
  },
  headRow: {
    style: {
      backgroundColor: "#f2f2f2", // Background color of the header row
    },
  },
  headCells: {
    style: {
      fontWeight: "bold",
      justifyContent: "center", // Font weight of header cells
    },
  },
  cells: {
    style: {
      padding: "8px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center", // Adjust cell padding as needed
    },
  },
};

const Table = ({data}) => {
  return (
    <DataTable
      title="Data from CSV File"
      columns={columns}
      data={data}
      customStyles={customStyles}
    />
  );
}

export default Table
