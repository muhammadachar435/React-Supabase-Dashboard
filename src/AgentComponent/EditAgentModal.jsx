import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";

function EditAgentModal({
  formData,
  setFormData,
  onUpdate,
  onClose,
  darkMode,
}) {
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className={`${
          darkMode ? "text-black bg-white" : "text-black bg-white"
        } p-6 rounded shadow-md sm:w-80 tablet:w-144`}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-semibold mb-4">Edit Agent</h3>

        {/* Name */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter name"
          className="p-2 border rounded w-full mb-2"
        />

        {/* Company */}
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Enter company"
          className="p-2 border rounded w-full mb-2"
        />

        {/* Role */}
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="p-2 border rounded w-full mb-2"
        >
          <option value="">Select Role</option>
          <option value="Project Manager">Project Manager</option>
          <option value="Web Developer">Web Developer</option>
          <option value="Mobile Developer">Mobile Developer</option>
          <option value="Python Developer">Python Developer</option>
          <option value="Java Developer">Java Developer</option>
          <option value="Flutter Developer">Flutter Developer</option>
        </select>

        {/* Mobile */}
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Enter mobile number"
          className="p-2 border rounded w-full mb-2"
        />

        {/* Verified */}
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            name="verified"
            checked={formData.verified}
            onChange={handleChange}
            className="mr-2"
          />
          <label>Verified</label>
        </div>

        {/* Status */}
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="p-2 border rounded w-full mb-4"
        >
          <option value="">Select Status</option>
          <option value="Active">Active</option>
          <option value="Locked">Locked</option>
        </select>

        <div className="flex justify-end gap-2">
          <button
            onClick={onUpdate}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Update
          </button>
          <button
            onClick={onClose}
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
          >
            Cancel
          </button>
        </div>
        <ToastContainer />
      </div>
    </div>,
    modalRoot
  );
}

export default EditAgentModal;
