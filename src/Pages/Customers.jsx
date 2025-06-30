import React, { useState, useEffect, useRef } from "react";
// import AddCustomerModal from "../Component/CustomerDetail/AddCustomerModal";
import EditModal from "../Component/CustomerDetail/EditModal";
import { BsThreeDotsVertical } from "react-icons/bs";
import AddCustomerModal from "../Component/CustomerDetail/AddCustomerModal";
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";

function Customers({ darkMode }) {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    phone: "",
    gender: "",
    city: "",
    country: "",
    status: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [editingIndex, setEditingIndex] = useState(-1);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [openMenuIndex, setOpenMenuIndex] = useState(-1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const menuRef = useRef(null);

  // ✅ Load users from localStorage or dummy data
  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users"));
    if (savedUsers && savedUsers.length > 0) {
      setUsers(savedUsers);
    } else {
      const initialData = [
        {
          name: "Ali Khan",
          email: "ali.khan@example.com",
          age: "24",
          phone: "03001234567",
          gender: "Male",
          city: "Karachi",
          country: "Pakistan",
          status: "VIP",
        },
        {
          name: "Sara Ahmed",
          email: "sara.ahmed@example.com",
          age: "28",
          phone: "03111234567",
          gender: "Female",
          city: "Lahore",
          country: "Pakistan",
          status: "Standard",
        },
        {
          name: " Ahmed",
          email: "ahmed@example.com",
          age: "22",
          phone: "031112345634",
          gender: "Male",
          city: "Lahore",
          country: "Pakistan",
          status: "Standard",
        },
        {
          name: "John",
          email: "john@example.com",
          age: "32",
          phone: "0312345623",
          gender: "Male",
          city: "Karachi",
          country: "Pakistan",
          status: "Standard",
        },
        {
          name: "Micheal",
          email: "micheal@example.com",
          age: "21",
          phone: "03045334542",
          gender: "Male",
          city: "NewYork",
          country: "USA",
          status: "VIP",
        },
      ];
      setUsers(initialData);
    }
  }, []);

  // ✅ Save users to localStorage whenever users change
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // Close menu on outside click
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

  // Validate form fields
  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = true;
    if (!formData.email) errors.email = true;
    if (!formData.age) errors.age = true;
    if (!formData.phone) errors.phone = true;
    if (!formData.gender) errors.gender = true;
    if (!formData.city) errors.city = true;
    if (!formData.country) errors.country = true;
    if (!formData.status) errors.status = true;
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // ✅ Add customer
  const handleAdd = () => {
    const valid = validate();
    if (!valid) {
      toast.error("All fields are required", { autoClose: 500 });
      return;
    }
    if (!formData.age || formData.age <= 0) {
      setFormErrors({ ...formErrors, age: "Age must be greater than 0" });
      toast.warn("Age must be greater than 0.", { autoClose: 500 });
      return;
    }
    setUsers([formData, ...users]);
    toast.success("Customer added successfully!", { autoClose: 500 });
    setTimeout(() => {
      setShowAddModal(false);
    }, 500);
    setFormData({
      name: "",
      email: "",
      age: "",
      phone: "",
      gender: "",
      city: "",
      country: "",
      status: "",
    });
    setFormErrors({});
  };

  // Edit customer
  const handleEdit = (index) => {
    setEditingIndex(index);
    setFormData(users[index]);

    setFormErrors({});
    setShowEditModal(true);
    setOpenMenuIndex(-1);
  };

  const handleUpdate = () => {
    const isValid = validate();

    if (!isValid) {
      toast.error("All fields are required", { autoClose: 500 });
      return;
    }
    const updatedUsers = [...users];
    updatedUsers[editingIndex] = formData;

    toast.success("Customer updated successfully!", { autoClose: 800 });
    setUsers(updatedUsers);
    console.log("running");

    setTimeout(() => {
      setShowEditModal(false);
    }, 500);

    setFormData({
      name: "",
      email: "",
      age: "",
      phone: "",
      gender: "",
      city: "",
      country: "",
      status: "",
    });

    setFormErrors({});
    setEditingIndex(-1);
  };

  // Delete customer
  const handleDelete = (index) => {
    toast.success("Customer deleted successfully!", { autoClose: 800 });

    setTimeout(() => {
      const updatedUsers = users.filter((_, i) => i !== index);
      setUsers(updatedUsers);
      setOpenMenuIndex(-1);
    }, 500);
  };

  // Delete selected customers
  const handleDeleteSelected = () => {
    const updatedUsers = users.filter(
      (_, index) => !selectedRows.includes(index)
    );
    toast.success("All records deleted successfully!", { autoClose: 800 });
    setTimeout(() => {
      setUsers(updatedUsers);

      setSelectedRows([]);
      setSelectAll(false);
    }, 800);
  };

  // Toggle actions menu
  const toggleMenu = (index) => {
    setOpenMenuIndex(openMenuIndex === index ? -1 : index);
  };

  // Filtered users based on search
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle checkbox selection per user
  const handleCheckboxChange = (index) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((i) => i !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  // Handle select all checkbox
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      const allIndexes = filteredUsers.map((user) =>
        users.findIndex((u) => u.email === user.email)
      );
      setSelectedRows(allIndexes);
    }
    setSelectAll(!selectAll);
  };

  // ✅ Calculate dynamic table minHeight
  const minRows =
    filteredUsers.length >= 5 ? 7 : filteredUsers.length >= 3 ? 5 : 3;
  const rowHeight = 50;
  const headerHeight = 50;
  const calculatedMinHeight = headerHeight + minRows * rowHeight;

  return (
    <div
      className={` p-5  min-h-screen sm:w-[280px] sm:ml-10 sm:mt-16 mymob:w-[340px] mymob:ml-8 myiphone:w-[390px] tablet:w-[700px] tablet:ml-10 tablet:mt-16  desktop:w-[862px] desktop:ml-10 desktop:mt-16 xll:w-[1260px] xll:mx-auto biglap:w-[2400px] biglap:mt-20 `}
    >
      <h2 className="text-2xl  font-bold mb-4 tablet:text-3xl font-Inter">
        Customers
      </h2>

      <div className="mb-4 desktop:mt-10">
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Customer
        </button>

        <div className="mt-4 flex justify-between items-center">
          <input
            type="text"
            placeholder="Search User...."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border-none ring-2 rounded sm:w-32 mymob:w-44 myiphone:w-56 desktop:w-72 "
          />

          <div>
            <button
              onClick={handleDeleteSelected}
              className="bg-blue-500 text-white hover:text-red-500 hover:bg-slate-200 sm:text-sm sm:px-0 mymob:py-1 mymob:px-1 myiphone:py-2 myiphone:px-1 sm:py-1  px-4 py-2 rounded  mr-2 cursor-pointer"
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>

      <div
        className={` ${
          darkMode ? "bg-white text-black shadow-lg " : "bg-white "
        }bg-white shadow  overflow-x-auto  rounded-md p-[2px] `}
        style={{ minHeight: `${calculatedMinHeight}px` }}
      >
        <table
          className={`sm:w-[280px] tablet:w-[700px] xll:w-[1156px] biglap:w-[2356px]   tablet:ml-0 mx-auto rounded-md  ${
            darkMode ? "bg-white text-black" : "text-black bg-white "
          } `}
        >
          <thead>
            <tr className="bg-white">
              <th className="w-4 ">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className="accent-green-300 text-white"
                />
              </th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Age</th>
              <th className="p-2 text-left">Phone</th>
              <th className="p-2 text-left">Gender</th>
              <th className="p-2 text-left">City</th>
              <th className="p-2 text-left">Country</th>
              <th className="p-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length === 0 ? (
              <tr>
                <td
                  colSpan="10"
                  className="text-center text-gray-600 py-16 tablet:text-2xl font-Inter font-semibold"
                >
                  No customers found
                </td>
              </tr>
            ) : (
              filteredUsers.map((user) => {
                const originalIndex = users.findIndex(
                  (u) => u.email === user.email
                );

                return (
                  <tr
                    key={originalIndex}
                    className={`border-b hover:bg-gray-50 ${
                      selectedRows.includes(originalIndex)
                        ? "bg-gray-100"
                        : "bg-white"
                    }`}
                  >
                    <td className="p-1">
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(originalIndex)}
                        onChange={() => handleCheckboxChange(originalIndex)}
                        className="accent-green-300 "
                      />
                    </td>
                    <td className="p-2 font-medium">{user.name}</td>
                    <td className="p-2">{user.email}</td>
                    <td className="p-2">{user.age}</td>
                    <td className="p-2">{user.phone}</td>
                    <td className="p-2">{user.gender}</td>
                    <td className="p-2">{user.city}</td>
                    <td className="p-2">{user.country}</td>
                    <td className="p-2">{user.status}</td>
                    <td className="p-2 relative">
                      <BsThreeDotsVertical
                        onClick={() => toggleMenu(originalIndex)}
                        className="cursor-pointer"
                      />
                      {openMenuIndex === originalIndex && (
                        <div
                          ref={menuRef}
                          className="absolute top-6 right-0 bg-white mr-1  shadow-lg rounded-lg p-2 flex flex-col z-10"
                        >
                          <button
                            onClick={() => handleEdit(originalIndex)}
                            className="hover:bg-gray-300 flex items-center rounded-md px-4 py-1 text-center m-1  font-Inter "
                          >
                            <MdModeEditOutline className="mx-1" /> Edit
                          </button>
                          <button
                            onClick={() => handleDelete(originalIndex)}
                            className="hover:bg-gray-300 flex items-center  rounded-md px-4 py-1 text-center m-1  font-Inter"
                          >
                            <MdDelete className="mx-1 " /> Delete
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {showAddModal && (
        <AddCustomerModal
          darkMode={darkMode}
          formData={formData}
          setFormData={setFormData}
          formErrors={formErrors}
          onAdd={handleAdd}
          onClose={() => setShowAddModal(false)}
        />
      )}

      {showEditModal && (
        <EditModal
          darkMode={darkMode}
          formData={formData}
          setFormData={setFormData}
          formErrors={formErrors}
          onUpdate={handleUpdate}
          onClose={() => setShowEditModal(false)}
        />
      )}
    </div>
  );
}

export default Customers;
