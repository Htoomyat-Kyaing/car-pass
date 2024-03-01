import DataTable from "react-data-table-component";
import Pagination from "./Pagination";

const Table = () => {
  const customStyles = {
    table: {
      style: {
        fontSize: "20px",
      },
    },
    responsiveWrapper: {
      style: {
        borderRadius: "10px",
        boxShadow: "0 5px 5px 0px rgba(0, 0, 0,0.2)",
      },
    },
    headRow: {
      style: {
        backgroundColor: "#FFCC00",
        fontSize: "20px",
      },
    },
    rows: {
      style: {
        fontSize: "20px",
      },
    },
  };
  const columns = [
    {
      name: "ID",
      selector: (row: { id: number }) => row.id,
    },
    {
      name: "Date",
      selector: (row: { date: string }) => row.date,
    },
    {
      name: "Vehicle Type",
      selector: (row: { vtype: string }) => row.vtype,
    },
    {
      name: "Vehicle Number",
      selector: (row: { vnumber: string }) => row.vnumber,
    },
    {
      name: "Time",
      selector: (row: { time: string }) => row.time,
    },
    {
      name: "Amount",
      selector: (row: { amount: number }) => row.amount,
    },
    {
      name: "",
      cell: () => (
        <div className="flex gap-7">
          <img src="/eye.svg" alt="eye.svg" />
          <img src="/trash-2.svg" alt="trash-2.svg" />
        </div>
      ),
    },
  ];
  const data = [
    {
      id: 1,
      date: "28/2/2024",
      vtype: "Medium",
      vnumber: "1F-1010",
      time: "9:45 AM",
      amount: 1000,
    },
    {
      id: 1,
      date: "28/2/2024",
      vtype: "Medium",
      vnumber: "1F-1010",
      time: "9:45 AM",
      amount: 1000,
    },
    {
      id: 1,
      date: "28/2/2024",
      vtype: "Medium",
      vnumber: "1F-1010",
      time: "9:45 AM",
      amount: 1000,
    },
    {
      id: 1,
      date: "28/2/2024",
      vtype: "Medium",
      vnumber: "1F-1010",
      time: "9:45 AM",
      amount: 1000,
    },
  ];
  return (
    <>
      <DataTable
        columns={columns}
        data={data}
        customStyles={customStyles}
        // pagination
        paginationComponent={Pagination}
      />
    </>
  );
};

export default Table;
