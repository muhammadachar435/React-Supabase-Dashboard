import React from "react";
import ReactDOM from "react-dom";
import orderedit from "../Pictures/orderedit.png";

function EditOrderModal({
  formData,
  setFormData,
  onUpdate,
  onClose,
  darkMode,
}) {
  const modalRoot = document.getElementById("modal-order");
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
      className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className={` ${
          darkMode ? "text-black bg-white" : "text-black bg-white"
        } bg-white p-6 rounded shadow-md sm:w-80  tablet:w-144 mt-12  flex flex-col gap-1`}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-semibold mb-1 font-Roboto">Edit Order</h3>
        <img src={orderedit} alt="" className="mb-1 w-fit " />
        {/* Order Number */}
        <input
          type="text"
          name="orderNumber"
          value={formData.orderNumber}
          onChange={handleChange}
          placeholder="Order Number"
          className="p-2 border rounded focus:outline-none focus:border-blue-500"
          required
        />

        {/* Item */}
        <input
          type="text"
          name="item"
          value={formData.item}
          onChange={handleChange}
          placeholder="Item"
          className="p-2 border rounded focus:outline-none focus:border-blue-500"
          required
        />

        {/* Total Amount */}
        <input
          type="number"
          name="totalAmount"
          value={formData.totalAmount}
          onChange={handleChange}
          placeholder="Total Amount"
          className="p-2 border rounded focus:outline-none focus:border-blue-500"
          required
        />

        {/* Promo Code */}
        <input
          type="text"
          name="promoCode"
          value={formData.promoCode}
          onChange={handleChange}
          placeholder="Promo Code"
          className="p-2 border rounded focus:outline-none focus:border-blue-500"
        />

        {/* Customer */}
        <input
          type="text"
          name="customer"
          value={formData.customer}
          onChange={handleChange}
          placeholder="Customer"
          className="p-2 border rounded focus:outline-none focus:border-blue-500"
          required
        />

        {/* Is Delayed */}
        <div className="flex flex-col">
          <label className="mb-1">Is Delayed:</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="isDelayed"
                value="Yes"
                checked={formData.isDelayed === "Yes"}
                onChange={handleChange}
                className="accent-red-500"
              />
              Yes
            </label>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="isDelayed"
                value="No"
                checked={formData.isDelayed === "No"}
                onChange={handleChange}
                className="accent-green-500"
              />
              No
            </label>
          </div>
        </div>

        {/* Status */}
        <div className="flex flex-col">
          <label className="mb-1">Status:</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="status"
                value="Packing"
                checked={formData.status === "Packing"}
                onChange={handleChange}
                className="accent-yellow-500"
              />
              Packing
            </label>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="status"
                value="Shipping"
                checked={formData.status === "Shipping"}
                onChange={handleChange}
                className="accent-blue-500"
              />
              Shipping
            </label>
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-2">
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
      </div>
    </div>,
    modalRoot
  );
}

export default EditOrderModal;
