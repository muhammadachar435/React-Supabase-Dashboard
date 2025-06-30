import React from "react";
import orderimg from "../Pictures/orderimg.png";

function AddOrderModal({
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
        className={` ${
          darkMode ? "text-black bg-white" : "text-black bg-white"
        } bg-white p-6 rounded shadow sm:w-72 tablet:w-144 mt-12`}
      >
        <h2 className="text-xl font-bold mb-4 font-Roboto transition-all  ">
          New Order
        </h2>
        <div>
          <img src={orderimg} alt="" className=" w-fit mb-4" />
        </div>
        {/* Order Number */}
        <input
          type="text"
          placeholder="Order Number"
          value={formData.orderNumber}
          onChange={(e) =>
            setFormData({ ...formData, orderNumber: e.target.value })
          }
          className={`border p-2 w-full mb-2 ${
            formErrors.orderNumber ? "border-red-500" : ""
          }`}
        />

        {/* Item */}

        <input
          type="text"
          placeholder="Item"
          value={formData.item}
          onChange={(e) => setFormData({ ...formData, item: e.target.value })}
          className={`border p-2 w-full mb-2 ${
            formErrors.item ? "border-red-500" : ""
          }`}
        />

        {/* Total Amount */}
        <input
          type="number"
          placeholder="Total Amount"
          value={formData.totalAmount}
          onChange={(e) =>
            setFormData({ ...formData, totalAmount: e.target.value })
          }
          className={`border p-2 w-full mb-2 ${
            formErrors.totalAmount ? "border-red-500" : ""
          }`}
        />

        {/* Promo Code */}
        <input
          type="text"
          placeholder="Promo Code"
          value={formData.promoCode}
          onChange={(e) =>
            setFormData({ ...formData, promoCode: e.target.value })
          }
          className={`border p-2 w-full mb-2 ${
            formErrors.promoCode ? "border-red-500" : ""
          }`}
        />

        {/* Customer */}
        <input
          type="text"
          placeholder="Customer"
          value={formData.customer}
          onChange={(e) =>
            setFormData({ ...formData, customer: e.target.value })
          }
          className={`border p-2 w-full mb-2 ${
            formErrors.customer ? "border-red-500" : ""
          }`}
        />

        {/* Is Delayed */}
        <select
          value={formData.isDelayed}
          onChange={(e) =>
            setFormData({ ...formData, isDelayed: e.target.value })
          }
          className={`border p-2 w-full mb-2 ${
            formErrors.isDelayed ? "border-red-500" : ""
          }`}
        >
          <option value="">Is Delayed?</option>
          <option value="⌚" className="text-green-500 px-1">
            ⌚
          </option>
          <option value="⌚" className="text-red-500 px-1">
            ⌚
          </option>
        </select>

        {/* Status */}
        <select
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          className={`border p-2 w-full mb-4 ${
            formErrors.status ? "border-red-500" : ""
          }`}
        >
          <option value="">Select Status</option>
          <option value="Packing">Packing</option>
          <option value="Shipping">Shipping</option>
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
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddOrderModal;
