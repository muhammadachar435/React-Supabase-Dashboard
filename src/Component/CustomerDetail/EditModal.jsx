import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer, toast } from "react-toastify";

function EditModal({ formData, setFormData, onUpdate, onClose, darkMode }) {
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className={` ${
          darkMode ? "text-black bg-white" : "text-black bg-white"
        } bg-white p-6 rounded shadow-md sm:w-80 sm:ml-10 mt-20 ml-20 flex flex-col gap-3 tablet:w-144 tablet:gap-1`}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-semibold mb-1 font-Inter">Edit Customer</h3>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter name"
          className="p-2 border rounded focus:outline-none focus:border-blue-500"
          required
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
          className="p-2 border rounded focus:outline-none focus:border-blue-500"
          required
        />

        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter age"
          min="1"
          className="p-2 border rounded focus:outline-none focus:border-blue-500"
          required
        />

        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter phone number"
          className="p-2 border rounded focus:outline-none focus:border-blue-500"
          required
        />

        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Enter city"
          className="p-2 border rounded focus:outline-none focus:border-blue-500"
          required
        />

        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="Enter country"
          className="p-2 border rounded focus:outline-none focus:border-blue-500"
          required
        />

        <div className="flex flex-col">
          <label className="mb-1">Gender:</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
                className="accent-blue-500"
              />
              Male
            </label>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
                className="accent-pink-500"
              />
              Female
            </label>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="mb-1">Status:</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="status"
                value="VIP"
                checked={formData.status === "VIP"}
                onChange={handleChange}
                className="accent-green-500"
              />
              VIP
            </label>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="status"
                value="Standard"
                checked={formData.status === "Standard"}
                onChange={handleChange}
                className="accent-yellow-500"
              />
              Standard
            </label>
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-2">
          <button
            onClick={onUpdate}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Update
            <ToastContainer />
          </button>
          <button
            onClick={onClose}
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
}

export default EditModal;
