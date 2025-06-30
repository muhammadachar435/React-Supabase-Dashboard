import React from "react";
import { ToastContainer } from "react-toastify";

function AddAgentModal({
  formData,
  setFormData,
  formErrors,
  onAdd,
  onClose,
  darkMode,
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
      <div
        className={`${
          darkMode ? "text-black bg-white" : "text-black bg-white"
        } p-6 rounded shadow sm:w-72 tablet:w-144`}
      >
        <h2 className="text-xl font-bold mb-4">Add Agent</h2>

        {/* Name */}
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`border p-2 w-full mb-2 ${
            formErrors.name ? "border-red-500" : ""
          }`}
        />

        {/* Company */}
        <input
          type="text"
          placeholder="Company"
          value={formData.company}
          onChange={(e) =>
            setFormData({ ...formData, company: e.target.value })
          }
          className={`border p-2 w-full mb-2 ${
            formErrors.company ? "border-red-500" : ""
          }`}
        />

        {/* Role */}
        <select
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          className={`border p-2 w-full mb-2 ${
            formErrors.role ? "border-red-500" : ""
          }`}
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
          placeholder="Mobile"
          value={formData.mobile}
          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
          className={`border p-2 w-full mb-2 ${
            formErrors.mobile ? "border-red-500" : ""
          }`}
        />

        {/* Status */}
        <select
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          className={`border p-2 w-full mb-4  ${
            formErrors.status ? "border-red-500" : ""
          }`}
        >
          <option value="">Select Status</option>
          <option value="Active">Active</option>
          <option value="Locked">Locked</option>
        </select>
        {/* Verified */}
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={formData.verified}
            onChange={(e) =>
              setFormData({ ...formData, verified: e.target.checked })
            }
            className="mr-2"
          />
          <label>Verified</label>
        </div>

        {/* Buttons */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-300 px-4 py-2 mr-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={onAdd}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add
          </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default AddAgentModal;
