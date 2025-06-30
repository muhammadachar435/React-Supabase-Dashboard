import React from "react";
import { ToastContainer, toast } from "react-toastify";

function AddCustomerModal({
  formData,
  setFormData,
  formErrors,
  onAdd,
  onClose,
  darkMode,
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 z-50  tablet:mt-10 xll:top-6">
      <div
        className={` ${
          darkMode ? "text-black bg-white" : "text-black bg-white"
        } bg-white p-6 rounded shadow sm:w-72 tablet:w-144 tablet:gap-1 `}
      >
        <h2 className="text-xl font-bold mb-4 font-Inter">Add Customer</h2>

        {/* Name */}
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`border p-2 w-full mb-2 ${
            formErrors.name ? "border-red-800" : ""
          }`}
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={`border p-2 w-full mb-2 ${
            formErrors.email ? "border-red-500" : ""
          }`}
        />

        {/* Age */}
        <input
          type="number"
          placeholder="Age"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          className={`border p-2 w-full mb-2 ${
            formErrors.age ? "border-red-500" : ""
          }`}
        />

        {/* Phone */}
        <input
          type="text"
          placeholder="Phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className={`border p-2 w-full mb-2 ${
            formErrors.phone ? "border-red-500" : ""
          }`}
        />

        {/* Gender */}
        <select
          value={formData.gender}
          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
          className={`border p-2 w-full mb-2 ${
            formErrors.gender ? "border-red-500" : ""
          }`}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        {/* City */}
        <input
          type="text"
          placeholder="City"
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          className={`border p-2 w-full mb-2 ${
            formErrors.city ? "border-red-500" : ""
          }`}
        />

        {/* Country */}
        <input
          type="text"
          placeholder="Country"
          value={formData.country}
          onChange={(e) =>
            setFormData({ ...formData, country: e.target.value })
          }
          className={`border p-2 w-full mb-2 ${
            formErrors.country ? "border-red-500" : ""
          }`}
        />

        {/* Status */}
        <select
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          className={`border p-2 w-full mb-4 ${
            formErrors.status ? "border-red-500" : ""
          }`}
        >
          <option value="">Select Status</option>
          <option value="VIP">VIP</option>
          <option value="Standard">Standard</option>
        </select>

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
            <ToastContainer />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddCustomerModal;
