import { useEffect, useState } from "react";
import { supabase } from "../Database/Supabase";
import { FaPlus } from "react-icons/fa";
import { MdDeleteOutline, MdModeEditOutline, MdDelete } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";
import AddCustomerModal from "../Component/CustomerDetail/AddCustomerModal";
import EditModal from "../Component/CustomerDetail/EditModal";

function Customers({ darkMode }) {
  const [customerData, setCustData] = useState([]);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [showAddModal, setShowModal] = useState(false);
  const [showEditModal, setEditModal] = useState(false);
  const [SelectedOrder, setSelectedOrder] = useState([]);
  const [searchquery, setSearchQuery] = useState("");
  const [custinsert, setCustinsert] = useState({
    Cname: "",
    CEmail: "",
    Age: "",
    Phoneno: "",
    Gender: "",
    City: "",
    Country: "",
    Status: "",
  });
  const [Customer2, setCustomer2] = useState({
    id: "",
    Cname: "",
    CEmail: "",
    Age: "",
    Phoneno: "",
    Gender: "",
    City: "",
    Country: "",
    Status: "",
  });

  useEffect(() => {
    customerFetchData();
  }, []);

  const customerFetchData = async () => {
    try {
      const { data, error } = await supabase
        .from("Customer")
        .select("*")
        .order("id", { ascending: true });
      if (error) {
        alert(error.message);
        return;
      }
      setCustData(data);
    } catch (err) {
      console.log("Unexpected error message:", err.message);
    }
  };

  const rowCount = customerData.length;
  const rowHeight = 60;
  const maxHeight = rowCount * rowHeight;

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".menu-button") &&
        !event.target.closest(".menu-options")
      ) {
        setOpenMenuId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDelete = async (UserId) => {
    const { data, error } = await supabase
      .from("Customer")
      .delete()
      .eq("id", UserId);

    if (data) {
      console.log(data);
    } else {
      console.log(error);
      customerFetchData();
      toast.success("Data Delete Successfully", { autoClose: 500 });
    }
  };

  async function CustomerSubmit() {
    await supabase.from("Customer").insert([custinsert]);
    customerFetchData();
    toast.success("Data Modify Successfully", { autoClose: 500 });
  }

  const handleDeleteSelected = async () => {
    if (SelectedOrder.length === 0) {
      toast.warn("Selected Order Empty", { autoClose: 500 });
      return;
    }
    const { data, error } = await supabase
      .from("Customer")
      .delete()
      .in("id", SelectedOrder);

    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
    setSelectedOrder([]);
    customerFetchData();
  };

  return (
    <>
      <div className="sm:mb-20 tablet:mb-36 ml-13 sm:w-[260px] sm:h-[420px] mt-20 mymob:w-[320px] myiphone:w-[375px] tablet:ml-16 tablet:w-[690px] desktop:w-[950px] xll:ml-17 xll:min-w-[1190px] mypc:w-[1250px] mylap:w-[1360px] biglap:w-[2450px] biglap:ml-18">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 tablet:mb-8">
          <h2 className="text-xl sm:text-2xl tablet:text-3xl font-bold font-Inter mb-4 sm:mb-0">
            Customers
          </h2>
          <button
            className={` ${
              darkMode ? "text-white " : "text-black hover:text-white  "
            }  bg-[#8fcaf9] hover:cursor-pointer flex items-center sm:space-x-1 tablet:space-x-3 px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto`}
            onClick={() => {
              setShowModal(!showAddModal);
            }}
          >
            <span>
              <FaPlus />
            </span>
            <span className="uppercase ">New Customer</span>
          </button>
        </div>

        <div
          className={`${
            darkMode
              ? "bg-[#1e1e1e] text-white rounded-lg shadow-xl"
              : "bg-white text-black  "
          } p-2  relative shadow-lg rounded-md  `}
        >
          <div className="sm:flex sm:justify-between sm:items-center mymob:pr-2 mt-6 mb-10">
            <input
              type="text"
              placeholder="Search Customers..."
              value={searchquery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
              className={`${
                darkMode ? "text-white" : "text-black"
              } p-2 ring rounded mymob:ml-1 tablet:ml-3 sm:w-56 mymob:w-60 myiphone:w-68 tablet:w-72 desktop:h-12`}
            />
            <button
              className="text-blue-400 sm:text-2xl cursor-pointer sm:w-6  rounded  hover:text-red-400 tablet:text-3xl desktop:w-8"
              onClick={handleDeleteSelected}
            >
              <MdDeleteOutline />
            </button>
          </div>

          <div
            className={`sm:overflow-x-scroll   xll:overflow-x-hidden  ${
              customerData.length < 3 ? "h-[30vh]" : ""
            }`}
            style={{ height: `${maxHeight}px` }}
          >
            <table
              className={`${
                darkMode ? "bg-[#1e1e1e] text-white" : "bg-white text-black"
              } sm:w-[200px] font-sans tablet:w-[672px] desktop:w-[930px] xll:w-[1170px] mypc:w-[1200px] mylap:w-[1335px] biglap:w-[2432px]`}
            >
              <thead>
                <tr>
                  <th className="w-4  text-left px-2 py-[6px]">
                    <input
                      type="checkbox"
                      checked={
                        SelectedOrder.length === customerData.length &&
                        customerData.length > 0
                      }
                      className="accent-green-500 cursor-pointer"
                      onChange={(e) => {
                        if (e.target.checked) {
                          const allIds = customerData.map((user) => user.id);
                          setSelectedOrder(allIds);
                        } else {
                          setSelectedOrder([]);
                        }
                      }}
                    />
                  </th>
                  <th className=" text-left px-2 py-[6px]">CustomerId</th>
                  <th className="text-left px-2 py-[6px]">Customer name </th>
                  <th className="text-left px-2 py-[6px]">Email</th>
                  <th className="text-left px-2 py-[6px]">Age</th>
                  <th className="text-left px-2 py-[6px] ">Cell no</th>
                  <th className="text-left px-2 py-[6px]">Gender</th>
                  <th className="text-left px-2 py-[6px]">City</th>
                  <th className="text-left px-2 py-[6px]">Country</th>
                  <th className="text-left px-2 py-[6px]">Status</th>
                </tr>
              </thead>
              <tbody>
                {customerData
                  .filter((user) => {
                    return user.Cname.toLowerCase().includes(
                      searchquery.toLowerCase()
                    );
                  })
                  .map((user) => (
                    <tr key={user.id}>
                      <td className="w-4 border-b border-slate-400 text-left px-2 py-[6px]">
                        <input
                          type="checkbox"
                          checked={SelectedOrder.includes(user.id)}
                          className="accent-green-500 cursor-pointer"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedOrder([...SelectedOrder, user.id]);
                            } else {
                              setSelectedOrder(
                                SelectedOrder.filter((id) => id !== user.id)
                              );
                            }
                          }}
                        />
                      </td>
                      <td className="border-b border-slate-400 px-10 py-[6px]">
                        {user.id}
                      </td>
                      <td className="border-b border-slate-400 text-left px-2 py-[6px]">
                        {user.Cname}
                      </td>
                      <td className="border-b border-slate-400 text-left px-2 py-[6px]">
                        {user.CEmail}
                      </td>
                      <td className="border-b border-slate-400 text-left px-2 py-[6px]">
                        {user.Age}
                      </td>
                      <td className="border-b  border-slate-400  text-left px-2 py-[6px]">
                        {user.Phoneno}
                      </td>
                      <td className="border-b border-slate-400 text-left px-2 py-[6px]">
                        {user.Gender}
                      </td>
                      <td className="border-b border-slate-400 text-left px-2 py-[6px]">
                        {user.City}
                      </td>
                      <td className="border-b border-slate-400 text-left px-2 py-[6px]">
                        {user.Country}
                      </td>
                      <td
                        className={`border-b border-slate-400 text-left  px-2 py-[6px] 
                        ${
                          user.Status === "VIP"
                            ? "text-[#57CA85] "
                            : user.Status === "Standard"
                            ? "text-[#4cc3ed]"
                            : "text-black"
                        } `}
                      >
                        {user.Status}
                      </td>
                      <td className="border-b w-3 border-slate-400 text-left px-2 py-[6px] relative">
                        <BsThreeDotsVertical
                          onClick={() =>
                            setOpenMenuId(
                              openMenuId === user.id ? null : user.id
                            )
                          }
                          className="cursor-pointer menu-button"
                        />
                        {openMenuId === user.id && (
                          <div
                            className={`absolute right-0 ${
                              darkMode
                                ? "bg-white text-black"
                                : "bg-white text-black"
                            } shadow-lg rounded p-2 z-20 menu-options`}
                          >
                            <button
                              onClick={() => {
                                setEditModal(!showEditModal);
                                setCustomer2(user);
                              }}
                              className="w-full flex space-x-1 items-center rounded-md text-left px-4 py-1 hover:bg-gray-200"
                            >
                              <span>
                                <MdModeEditOutline />
                              </span>
                              <span>Edit</span>
                            </button>
                            <button
                              onClick={() => handleDelete(user.id)}
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
                  ))}
              </tbody>
            </table>
          </div>
          {customerData.length === 0 ? (
            <>
              <div className="sm:text-xl tablet:text-2xl font-bold font-Inter absolute top-56 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                No Customers
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      {showAddModal && (
        <AddCustomerModal
          custinsert={custinsert}
          setCustinsert={setCustinsert}
          CustomerSubmit={CustomerSubmit}
          onClose={() => {
            setShowModal(!showAddModal);
          }}
          darkMode={darkMode}
        />
      )}
      {showEditModal && (
        <EditModal
          Customer2={Customer2}
          setCustomer2={setCustomer2}
          onClose2={() => {
            setEditModal(!showEditModal);
          }}
          customerFetchData={customerFetchData}
          darkMode={darkMode}
        />
      )}
      <ToastContainer />
    </>
  );
}

export default Customers;
