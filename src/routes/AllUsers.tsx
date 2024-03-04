import { useState } from "react";
import DataTable from "react-data-table-component";
const columns = [
  {
    name: "No",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "အမည်",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "ဖုန်းနံပါတ်",
    selector: (row) => row.phone,
    sortable: true,
  },
  {
    name: "အီးမေးလ်",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "ရာထူး",
    selector: (row) => row.type,
    sortable: true,
  },
  {
    name: "",
    selector: (row) => row.icon,
  },
];
const data = [
  {
    id: 1,
    name: "အောင်",
    phone: "09 123456789",
    email: "umya@gmail.com",
    type: "Admin",
    icon: "",
  },
  {
    id: 2,
    name: "အိုး",
    phone: "09 123456789",
    email: "oohla@gmail.com",
    type: "Staff",
    icon: "",
  },
  {
    id: 3,
    name: "ဒေါ်",
    phone: "09 123456789",
    email: "dawhlala@gmail.com",
    type: "Admin",
    icon: "",
  },
  {
    id: 4,
    name: "Beetlejuice",
    phone: "09123456789",
    email: "umya@gmail.com",
    type: "Staff",
    icon: "",
  },
  {
    id: 5,
    name: "juice",
    phone: "09123456789",
    email: "juice@gmail.com",
    type: "Admin",
    icon: "",
  },
];

const allusers = () => {
  const [searchText, setSearchText] = useState("");
  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };
  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.phone.includes(searchText) ||
      item.email.toLowerCase().includes(searchText.toLowerCase()) ||
      item.type.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <section className="p-4">
      <div className="flex flex-col h-auto" style={{ width: "1146px" }}>
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={handleSearch}
        />
        <DataTable
          columns={columns}
          data={filteredData}
          pagination
          sortIcon
          paginationPerPage={3}
          paginationComponentOptions={{
            rowsPerPageText: "Rows per page:",
            rangeSeparatorText: "of",
            noRowsPerPage: false,
            selectAllRowsItem: false,
          }}
          className="mt-2 bg-white rounded-md "
        />
      </div>
    </section>
  );
};

export default allusers;
