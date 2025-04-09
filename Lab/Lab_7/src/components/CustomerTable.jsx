import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import MyModal from "./MyModal";

const CustomerTable = () => {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [selectRow, setSelectRow] = useState(null);
  const [modalMode, setModalMode] = useState("edit");

  const fetchData = async () => {
    try {
      const response = await fetch("https://67f540fc913986b16fa3e59e.mockapi.io/users");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openModal = (row) => {
    setSelectRow(row);
    setModalMode("edit");
    setModalShow(true);
  };

  const openAddModal = () => {
    setSelectRow(null);
    setModalMode("add");
    setModalShow(true);
  };

  const closeModal = () => {
    setModalShow(false);
    setSelectRow(null);
  };

  const statuses = ["New", "In-progress", "Completed"];

  const columns = [
    {
      name: "CUSTOMER NAME",
      cell: (row) => (
        <div className="flex gap-3 items-center">
          <img src={row.avatar} alt="Avatar" className="w-8 h-8 rounded-full" />
          <span className="text-base font-medium">{row.name}</span>
        </div>
      ),
      sortable: true,
    },
    {
      name: "COMPANY",
      selector: (row) => row.company,
      sortable: true,
    },
    {
      name: "ORDER VALUE",
      selector: (row) => `$${row.orderValue}`,
      sortable: true,
    },
    {
      name: "ORDER DATE",
      selector: (row) => new Date(row.orderDate).toLocaleDateString("vi-VN"),
      sortable: true,
    },
    {
      name: "STATUS",
      selector: (row) => statuses[row.status],
      cell: (row) => {
        const status = statuses[row.status];
        const colorMap = {
          "New": "bg-blue-100 text-blue-600",
          "In-progress": "bg-yellow-100 text-yellow-700",
          "Completed": "bg-green-100 text-green-600",
        };
        return (
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${colorMap[status]}`}>
            {status}
          </span>
        );
      },
    },
    {
      cell: (row) => (
        <button onClick={() => openModal(row)} className="hover:opacity-80">
          <img
            src="/src/assets/edit.png"
            alt="Edit"
            className="w-[40px] h-[40px]"
          />
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  return (
    <div className="mt-10 space-y-6 px-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Customer List</h2>
        <button
          className="bg-white text-pink-500 border-2 border-pink-500 text-lg font-semibold px-5 py-3 rounded-xl hover:bg-pink-100 hover:text-pink-600 hover:border-pink-600 shadow"
          onClick={openAddModal}
        >
          Import
        </button>
      </div>

      <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
        <DataTable
          columns={columns}
          data={data}
          pagination
          selectableRows
          customStyles={{
            rows: {
              style: {
                fontSize: "16px",
                paddingTop: "14px",
                paddingBottom: "14px",
              },
            },
            headCells: {
              style: {
                fontSize: "16px",
                fontWeight: "700",
                backgroundColor: "#f9fafb",
              },
            },
          }}
        />
      </div>

      <MyModal
        key={selectRow?.id}
        isOpen={modalShow}
        closeModal={closeModal}
        content={selectRow}
        onUpdate={() => fetchData()}
        mode={modalMode}
      />
    </div>
  );
};

export default CustomerTable;
