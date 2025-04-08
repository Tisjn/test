import React, { useState, useEffect } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    color: "black",
    padding: "40px",
    borderRadius: "12px",
    backgroundColor: "#fff",
    width: "600px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
};

Modal.setAppElement("#root");

const statuses = ["New", "In-progress", "Completed"];
const statusMap = {
  "New": 0,
  "In-progress": 1,
  "Completed": 2,
};

const MyModal = ({ isOpen, closeModal, content, onUpdate, mode = "edit" }) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    orderValue: "",
    orderDate: "",
    status: "New",
    avatar: "",
  });

  useEffect(() => {
    if (mode === "edit" && content) {
      setFormData({
        ...content,
        status: typeof content.status === "number" ? statuses[content.status] : content.status,
        orderDate: content.orderDate ? content.orderDate.split("T")[0] : "",
      });
    } else if (mode === "add") {
      setFormData({
        name: "",
        company: "",
        orderValue: "",
        orderDate: "",
        status: "New",
        avatar: "",
      });
    }
  }, [content, mode]);

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSave = async () => {
    if (!formData.name || !formData.company || !formData.orderValue || !formData.orderDate) {
      alert("Please fill in all fields.");
      return;
    }

    const updatedData = {
      ...formData,
      status: statusMap[formData.status],
      orderValue: parseInt(formData.orderValue, 10),
      orderDate: new Date(formData.orderDate).toISOString(),
    };

    try {
      const response = await fetch(
        `https://67f540fc913986b16fa3e59e.mockapi.io/users/${formData.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedData),
        }
      );
      if (response.ok) {
        closeModal();
        onUpdate?.();
      }
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  const handleAddCustomer = async () => {
    if (!formData.name || !formData.company || !formData.orderValue || !formData.orderDate) {
      alert("Please fill in all fields.");
      return;
    }

    const newCustomer = {
      ...formData,
      status: statusMap[formData.status],
      orderValue: parseInt(formData.orderValue, 10),
      orderDate: new Date(formData.orderDate).toISOString(),
    };

    try {
      const response = await fetch(
        `https://67f540fc913986b16fa3e59e.mockapi.io/users`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newCustomer),
        }
      );
      if (response.ok) {
        closeModal();
        onUpdate?.();
      }
    } catch (error) {
      console.error("Add failed:", error);
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <h2 className="text-2xl font-bold mb-6 text-center">
        {mode === "edit" ? "Edit Customer" : "Add New Customer"}
      </h2>
      <form className="flex flex-col gap-4 text-base">
        <div className="flex flex-col">
          <label className="font-medium mb-1">Avatar</label>
          <input
            type="file"
            onChange={(e) => handleInputChange("avatar", e.target.files[0]?.name || "")}
            className="border rounded px-3 py-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium mb-1">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className="border rounded px-3 py-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium mb-1">Company</label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => handleInputChange("company", e.target.value)}
            className="border rounded px-3 py-2"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium mb-1">Order Value</label>
          <input
            type="number"
            value={formData.orderValue}
            onChange={(e) => handleInputChange("orderValue", e.target.value)}
            className="border rounded px-3 py-2"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="font-medium mb-1">Order Date</label>
            <input
              type="date"
              value={formData.orderDate}
              onChange={(e) => handleInputChange("orderDate", e.target.value)}
              className="border rounded px-3 py-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1">Status</label>
            <select
              value={formData.status}
              onChange={(e) => handleInputChange("status", e.target.value)}
              className="border rounded px-3 py-2"
            >
              <option value="New">New</option>
              <option value="In-progress">In-progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>
      </form>
      <div className="flex justify-end mt-6 gap-3">
        <button
          onClick={closeModal}
          className="px-5 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
        <button
          onClick={mode === "edit" ? handleSave : handleAddCustomer}
          className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          {mode === "edit" ? "Save" : "Add"}
        </button>
      </div>
    </Modal>
  );
};

export default MyModal;
