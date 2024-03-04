import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import CheckBox from "./CheckBox";

const Table = () => {
  const [carPassTicket, setCarPassTicket] = useState({
    view: false,
    add: false,
    edit: false,
    delete: false,
  });
  const [dashboard, setDashboard] = useState({
    view: false,
    add: false,
    edit: false,
    delete: false,
  });
  const [report, setReport] = useState({
    view: false,
    add: false,
    edit: false,
    delete: false,
  });
  const [allusers, setAllusers] = useState({
    view: false,
    add: false,
    edit: false,
    delete: false,
  });
  const [addNewUser, setAddNewUser] = useState({
    view: false,
    add: false,
    edit: false,
    delete: false,
  });
  const [rolePermission, setRolePermission] = useState({
    view: false,
    add: false,
    edit: false,
    delete: false,
  });
  const handleCarPassTicket = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCarPassTicket({
      ...carPassTicket,
      [e.target.name]: e.target.checked,
    });
  };
  const handleDashboard = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDashboard({
      ...dashboard,
      [e.target.name]: e.target.checked,
    });
  };
  const handleReport = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReport({
      ...report,
      [e.target.name]: e.target.checked,
    });
  };
  const handleAllUsers = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAllusers({
      ...allusers,
      [e.target.name]: e.target.checked,
    });
  };
  const handleAddNewUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddNewUser({
      ...addNewUser,
      [e.target.name]: e.target.checked,
    });
  };
  const handleRowPermission = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRolePermission({
      ...rolePermission,
      [e.target.name]: e.target.checked,
    });
  };
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
    headCells: {
      style: {
        display: "flex",
        justifyContent: "center",
      },
    },
    rows: {
      style: {
        fontSize: "20px",
        height: "60px",
        "&:not(:last-of-type)": {
          borderBottomStyle: "solid",
          borderBottomWidth: "0px",
        },
      },
    },
    cells: {
      style: {
        display: "flex",
        justifyContent: "center",
      },
    },
  };
  const columns = [
    {
      name: "Module name",
      selector: (row: { module: string }) => row.module,
    },
    {
      name: "View",
      selector: (row: { view: any }) => row.view,
    },
    {
      name: "Add",
      selector: (row: { add: any }) => row.add,
    },
    {
      name: "Edit",
      selector: (row: { edit: any }) => row.edit,
    },
    {
      name: "Delete",
      selector: (row: { delete: any }) => row.delete,
    },
  ];
  const data = [
    {
      module: "Car Pass Ticket",
      view: <CheckBox name={"view"} handleCheckBox={handleCarPassTicket} />,
      add: <CheckBox name={"add"} handleCheckBox={handleCarPassTicket} />,
      edit: <CheckBox name={"edit"} handleCheckBox={handleCarPassTicket} />,
      delete: <CheckBox name={"delete"} handleCheckBox={handleCarPassTicket} />,
    },
    {
      module: "Dashboard",
      view: <CheckBox name={"view"} handleCheckBox={handleDashboard} />,
      add: <CheckBox name={"add"} handleCheckBox={handleDashboard} />,
      edit: <CheckBox name={"edit"} handleCheckBox={handleDashboard} />,
      delete: <CheckBox name={"delete"} handleCheckBox={handleDashboard} />,
    },
    {
      module: "Report",
      view: <CheckBox name={"view"} handleCheckBox={handleReport} />,
      add: <CheckBox name={"add"} handleCheckBox={handleReport} />,
      edit: <CheckBox name={"edit"} handleCheckBox={handleReport} />,
      delete: <CheckBox name={"delete"} handleCheckBox={handleReport} />,
    },
    {
      module: "All Users",
      view: <CheckBox name={"view"} handleCheckBox={handleAllUsers} />,
      add: <CheckBox name={"add"} handleCheckBox={handleAllUsers} />,
      edit: <CheckBox name={"edit"} handleCheckBox={handleAllUsers} />,
      delete: <CheckBox name={"delete"} handleCheckBox={handleAllUsers} />,
    },
    {
      module: "Add New User",
      view: <CheckBox name={"view"} handleCheckBox={handleAddNewUser} />,
      add: <CheckBox name={"add"} handleCheckBox={handleAddNewUser} />,
      edit: <CheckBox name={"edit"} handleCheckBox={handleAddNewUser} />,
      delete: <CheckBox name={"delete"} handleCheckBox={handleAddNewUser} />,
    },
    {
      module: "Role Permission",
      view: <CheckBox name={"view"} handleCheckBox={handleRowPermission} />,
      add: <CheckBox name={"add"} handleCheckBox={handleRowPermission} />,
      edit: <CheckBox name={"edit"} handleCheckBox={handleRowPermission} />,
      delete: <CheckBox name={"delete"} handleCheckBox={handleRowPermission} />,
    },
  ];

  useEffect(() => {
    console.log({
      carPassTicket: carPassTicket,
      dashboard: dashboard,
      report: report,
      allusers: allusers,
      addNewUser: addNewUser,
      rolePermission: rolePermission,
    });
  }, [carPassTicket, dashboard, report, allusers, addNewUser, rolePermission]);

  return (
    <>
      <DataTable columns={columns} data={data} customStyles={customStyles} />
      <button className="bg-[#FFCC00] text-base w-full max-w-[120px] min-h-[44px] rounded shadow-md">
        Update
      </button>
    </>
  );
};

export default Table;
