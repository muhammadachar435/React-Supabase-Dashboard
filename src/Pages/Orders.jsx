import React, { useState, useEffect, useRef } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import AddOrderModal from "../OrderComponent/AddOrder";
import EditOrderModal from "../OrderComponent/EdirOrder";
import { MdDeleteOutline } from "react-icons/md";
import { FaPlus } from "react-icons/fa";

function Orders({ darkMode }) {
  const [orders, setOrders] = useState([]);
  const [formData, setFormData] = useState({
    orderNumber: "",
    item: "",
    totalAmount: "",
    promoCode: "",
    customer: "",
    isDelayed: "",
    status: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [editingIndex, setEditingIndex] = useState(-1);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [openMenuIndex, setOpenMenuIndex] = useState(-1);
  const [selectedOrders, setSelectedOrders] = useState([]);
  const menuRef = useRef(null);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders"));
    if (savedOrders && savedOrders.length > 0) {
      setOrders(savedOrders);
    } else {
      const initialOrders = [
        {
          orderNumber: "ORD001",
          item: "Laptop",
          totalAmount: "1000",
          promoCode: "SAVE10",
          customer: "Ali Khan",
          isDelayed: "⌚",
          status: "Packing",
        },
        {
          orderNumber: "ORD002",
          item: "Phone",
          totalAmount: "500",
          promoCode: "NEW5",
          customer: "Sara Ahmed",
          isDelayed: "⌚",
          status: "Shipping",
        },
        {
          orderNumber: "ORD003",
          item: "Watch",
          totalAmount: "1500",
          promoCode: "NEW",
          customer: "Ahmed",
          isDelayed: "⌚",
          status: "Packing",
        },
        {
          orderNumber: "ORD004",
          item: "Earphone",
          totalAmount: "1000",
          promoCode: "EAR1",
          customer: "John",
          isDelayed: "⌚",
          status: "Shipping",
        },
        {
          orderNumber: "ORD006",
          item: "Purse",
          totalAmount: "2000",
          promoCode: "PS1",
          customer: "Micheal",
          isDelayed: "⌚",
          status: "Shipping",
        },
        {
          orderNumber: "ORD007",
          item: "Fan",
          totalAmount: "5000",
          promoCode: "FAN1",
          customer: "Jawad",
          isDelayed: "⌚",
          status: "Shipping",
        },
      ];
      setOrders(initialOrders);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenuIndex(-1);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const validate = () => {
    let errors = {};
    if (!formData.orderNumber) errors.orderNumber = true;
    if (!formData.item) errors.item = true;
    if (!formData.totalAmount) errors.totalAmount = true;
    if (!formData.customer) errors.customer = true;
    if (!formData.isDelayed) errors.isDelayed = true;
    if (!formData.status) errors.status = true;
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleAdd = () => {
    const valid = validate();

    if (!valid) {
      const toastId = toast.error("All required fields must be filled", {
        autoClose: 500,
      });

      setTimeout(() => {
        toast.dismiss(toastId);
      }, 1000);

      return;
    }
    setOrders([formData, ...orders]);
    toast.success("Order added successfully!", { autoClose: 500 });
    setTimeout(() => setShowAddModal(false), 500);
    setFormData({
      orderNumber: "",
      item: "",
      totalAmount: "",
      promoCode: "",
      customer: "",
      isDelayed: "",
      status: "",
    });
    setFormErrors({});
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setFormData(orders[index]);
    setFormErrors({});
    setShowEditModal(true);
    setOpenMenuIndex(-1);
  };

  const handleUpdate = () => {
    if (!validate()) {
      toast.error("All required fields must be filled", { autoClose: 500 });
      return;
    }
    const updatedOrders = [...orders];
    updatedOrders[editingIndex] = formData;
    setOrders(updatedOrders);
    toast.success("Order updated successfully!", { autoClose: 800 });
    setTimeout(() => setShowEditModal(false), 500);
    setFormData({
      orderNumber: "",
      item: "",
      totalAmount: "",
      promoCode: "",
      customer: "",
      isDelayed: "",
      status: "",
    });
    setFormErrors({});
    setEditingIndex(-1);
  };

  const handleDelete = (index) => {
    toast.success("Order deleted successfully!", { autoClose: 800 });
    setTimeout(() => {
      setOrders(orders.filter((_, i) => i !== index));
      setOpenMenuIndex(-1);
    }, 500);
  };

  const toggleMenu = (index) => {
    setOpenMenuIndex(openMenuIndex === index ? -1 : index);
  };

  const handleCheckboxChange = (orderNumber) => {
    if (selectedOrders.includes(orderNumber)) {
      setSelectedOrders(selectedOrders.filter((num) => num !== orderNumber));
    } else {
      setSelectedOrders([...selectedOrders, orderNumber]);
    }
  };

  const handleSelectAll = () => {
    if (selectedOrders.length === filteredOrders.length) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(filteredOrders.map((order) => order.orderNumber));
    }
  };

  const handleDeleteSelected = () => {
    if (selectedOrders.length === 0) {
      toast.error("No orders selected", { autoClose: 500 });
      return;
    }
    setOrders(
      orders.filter((order) => !selectedOrders.includes(order.orderNumber))
    );
    setSelectedOrders([]);
    toast.success("Selected orders deleted", { autoClose: 800 });
  };

  const filteredOrders = orders.filter(
    (order) =>
      order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const tableHeight = `${Math.max(filteredOrders.length, 1) * 55 + 55}px`;
  return (
    <>
      <div className="  ml-13 sm:w-[260px] mt-20 mymob:w-[320px] myiphone:w-[375px] tablet:ml-16 tablet:w-[690px] desktop:w-[950px]  xll:ml-17 xll:min-w-[1190px] mypc:w-[1250px] mylap:w-[1360px] biglap:w-[2450px] biglap:ml-18 mb-10">
        <div className="flex flex-col  sm:flex-row justify-between items-center mb-4 tablet:mb-8 ">
          <h2 className="text-xl  sm:text-2xl tablet:text-3xl font-bold font-Inter mb-4 sm:mb-0">
            Orders
          </h2>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-blue-600 flex items-center sm:space-x-1 tablet:space-x-3 font-Inter text-white px-4 py-2 rounded hover:bg-blue-700 w-full sm:w-auto"
          >
            <span>
              <FaPlus />
            </span>
            <span className="uppercase">New Order</span>
          </button>
        </div>
        <div className="bg-white p-2 shadow-lg rounded-md">
          <div className="sm:flex sm:justify-between sm:items-center  mymob:pr-2 mt-6 mb-10">
            <input
              type="text"
              placeholder="Search orders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={` ${
                darkMode ? "text-black" : "text-black transparent"
              } p-2 ring rounded mymob:ml-1 tablet:ml-3 sm:w-56 mymob:w-60 myiphone:w-68 tablet:w-72 desktop:h-12`}
            />

            <button
              onClick={handleDeleteSelected}
              className="bg-blue-400 text-white cursor-pointer  sm:w-6 p-1 rounded hover:bg-red-500 desktop:text-2xl desktop:w-8 "
            >
              <MdDeleteOutline />
            </button>
          </div>

          <div
            className={`overflow-x-auto ${
              filteredOrders.length === 0 ? "" : ""
            } `}
            style={{ height: tableHeight }}
          >
            <table
              className={` ${
                darkMode ? "text-black bg-white" : "text-black"
              } sm:w-[200px]  tablet:w-[672px] desktop:w-[930px] xll:w-[1170px] mypc:w-[1200px] mylap:w-[1335px] biglap:w-[2432px]`}
            >
              <thead>
                <tr className="  ">
                  <th className="w-4 ">
                    <input
                      type="checkbox"
                      checked={
                        selectedOrders.length === filteredOrders.length &&
                        filteredOrders.length !== 0
                      }
                      onChange={handleSelectAll}
                    />
                  </th>
                  <th className="p-2 text-left">Order Number</th>
                  <th className="p-2 text-left">Item</th>
                  <th className="p-2 text-left">Total Amount</th>
                  <th className="p-2 text-left">Promo Code</th>
                  <th className="p-2 text-left">Customer</th>
                  <th className="p-2 text-left">IsDelayed</th>
                  <th className="p-2 text-left ">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.length === 0 ? (
                  <tr>
                    <td
                      colSpan="10"
                      className="text-center text-gray-600   tablet:text-2xl font-Inter font-semibold"
                    >
                      No Order Found
                    </td>
                  </tr>
                ) : (
                  filteredOrders.map((order, index) => (
                    <tr key={index} className="border-t text-sm sm:text-base">
                      <td className="p-2">
                        <input
                          type="checkbox"
                          checked={selectedOrders.includes(order.orderNumber)}
                          onChange={() =>
                            handleCheckboxChange(order.orderNumber)
                          }
                        />
                      </td>
                      <td className="p-2">{order.orderNumber}</td>
                      <td className="p-2">{order.item}</td>
                      <td className="p-2">{order.totalAmount}</td>
                      <td className="p-2">{order.promoCode}</td>
                      <td className="p-2">{order.customer}</td>
                      <td className="p-2">{order.isDelayed}</td>
                      <td className="p-2">{order.status}</td>
                      <td className="p-2 relative">
                        <BsThreeDotsVertical
                          onClick={() => toggleMenu(index)}
                          className="cursor-pointer"
                        />
                        {openMenuIndex === index && (
                          <div
                            ref={menuRef}
                            className="absolute right-0 bg-white shadow-lg rounded p-2 z-10"
                          >
                            <button
                              onClick={() => handleEdit(index)}
                              className="w-full flex space-x-1 items-center rounded-md text-left px-4 py-1 hover:bg-gray-200"
                            >
                              <span>
                                <MdModeEditOutline />{" "}
                              </span>
                              <span>Edit</span>
                            </button>
                            <button
                              onClick={() => handleDelete(index)}
                              className="flex items-center space-x-1 rounded-md w-full text-left px-4 py-1 hover:bg-gray-200"
                            >
                              <span>
                                <MdDelete />
                              </span>
                              <span>Delete</span>
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {showAddModal && (
            <AddOrderModal
              darkMode={darkMode}
              formData={formData}
              setFormData={setFormData}
              formErrors={formErrors}
              onAdd={handleAdd}
              onClose={() => setShowAddModal(false)}
            />
          )}

          {showEditModal && (
            <EditOrderModal
              darkMode={darkMode}
              formData={formData}
              setFormData={setFormData}
              onUpdate={handleUpdate}
              onClose={() => setShowEditModal(false)}
            />
          )}

          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default Orders;
