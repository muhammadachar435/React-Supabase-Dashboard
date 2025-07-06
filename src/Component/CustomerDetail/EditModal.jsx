import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { toast, ToastContainer } from "react-toastify";
import { supabase } from "../../Database/Supabase";

function EditModal({
  Customer2,
  setCustomer2,
  onClose2,
  customerFetchData,
  darkMode,
}) {
  const modalRoot = document.getElementById("modal-root");
  useEffect(() => {
    document.documentElement.style.overflowY = "hidden";
    return () => {
      document.documentElement.style.overflowY = "scroll";
    };
  }, []);

  if (!modalRoot) return null;

  function handleEdit(e) {
    setCustomer2((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  const handleEditSubmit = async (CustID) => {
    const { data, error } = await supabase
      .from("Customer")
      .update({
        Cname: Customer2.Cname,
        CEmail: Customer2.CEmail,
        Age: Customer2.Age,
        Phoneno: Customer2.Phoneno,
        Gender: Customer2.Gender,
        City: Customer2.City,
        Country: Customer2.Country,
        Status: Customer2.Status,
      })
      .eq("id", CustID);

    if (error) {
      console.log("Editcustomer", error);
    } else {
      await customerFetchData();
      toast.success("Data Store Successfully", { autoClose: 500 });
    }
  };

  return ReactDOM.createPortal(
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleEditSubmit(Customer2.id);
        onClose2();
      }}
    >
      <div
        className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50"
        onClick={onClose2}
        style={{ backgroundColor: "rgba(50,50,50,0.9)" }}
      >
        <div
          className={`${
            darkMode
              ? "bg-[#1e1e1e] text-white shadow-lg"
              : "text-black bg-white shadow-lg"
          } sm:overflow-y-scroll tablet:overflow-auto inset-shadow-sm  max-h-[80vh] p-6 rounded shadow-md sm:w-72 sm:ml-6 sm:mt-14 tablet:mt-2 ml-20 flex flex-col sm:gap-1 tablet:w-144 tablet:gap-1`}
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-xl mb-4 font-semibold font-Inter">
            Edit Customer
          </h3>

          {/* Name Field */}
          <div className="relative tablet:grid tablet:grid-cols-2 gap-5 mb-2">
            <div className="relative sm:my-4 tablet:my-0">
              <input
                type="text"
                name="Cname"
                value={Customer2.Cname || ""}
                onChange={handleEdit}
                required
                placeholder=""
                className="inputfield peer block w-full appearance-none border border-gray-300 rounded px-3 py-3 focus:outline-none focus:border-sky-400 focus:shadow-[0_0_5px_rgba(135,206,250,0.5)]"
              />
              <label
                className={` ${
                  darkMode
                    ? "bg-[#1e1e1e] text-slate-200"
                    : "bg-white text-gray-500"
                }  absolute left-3 top-3  px-1 text-gray-500 transition-all duration-200 pointer-events-none
    peer-placeholder-shown:top-3
    peer-placeholder-shown:text-base
    peer-placeholder-shown:text-gray-500
    peer-focus:-top-2
    peer-focus:text-xs
    peer-focus:text-sky-400
    peer-valid:-top-2
    peer-valid:text-xs
    peer-valid:text-sky-400`}
              >
                Name
              </label>
            </div>

            {/* Email Field */}
            <div className="relative sm:my-4 tablet:my-0">
              <input
                type="email"
                name="CEmail"
                placeholder=""
                value={Customer2.CEmail || ""}
                onChange={handleEdit}
                required
                className="inputfield peer block w-full appearance-none border border-gray-300 rounded px-3 py-3 focus:outline-none focus:border-sky-400 focus:shadow-[0_0_5px_rgba(135,206,250,0.5)]"
              />
              <label
                className={`${
                  darkMode
                    ? "bg-[#1e1e1e] text-slate-200"
                    : "bg-white text-gray-500"
                }  absolute left-3 top-3 px-1  transition-all duration-200 pointer-events-none
    peer-placeholder-shown:top-3
    peer-placeholder-shown:text-base
    peer-placeholder-shown:text-gray-500
    peer-focus:-top-2
    peer-focus:text-xs
    peer-focus:text-sky-400
    peer-valid:-top-2
    peer-valid:text-xs
    peer-valid:text-sky-400`}
              >
                Email
              </label>
            </div>

            {/* Age Field */}
            <div className="relative sm:my-4 tablet:my-0">
              <input
                type="number"
                name="Age"
                placeholder=""
                value={Customer2.Age || ""}
                onChange={handleEdit}
                min="1"
                required
                className="inputfield peer block w-full appearance-none border border-gray-300 rounded px-3 py-3 focus:outline-none focus:border-sky-400 focus:shadow-[0_0_5px_rgba(135,206,250,0.5)]"
              />
              <label
                className={` ${
                  darkMode
                    ? "bg-[#1e1e1e] text-slate-200"
                    : "bg-white text-gray-500"
                }  absolute left-3 top-3  px-1  transition-all duration-200 pointer-events-none
    peer-placeholder-shown:top-3
    peer-placeholder-shown:text-base
    peer-placeholder-shown:text-gray-500
    peer-focus:-top-2
    peer-focus:text-xs
    peer-focus:text-sky-400
    peer-valid:-top-2
    peer-valid:text-xs
    peer-valid:text-sky-400`}
              >
                Age
              </label>
            </div>

            {/* Phone Field */}
            <div className="relative sm:my-4 tablet:my-0">
              <input
                type="text"
                name="Phoneno"
                placeholder=""
                min="10000000000"
                value={Customer2.Phoneno || ""}
                onChange={handleEdit}
                required
                className="inputfield peer block w-full appearance-none border border-gray-300 rounded px-3 py-3 focus:outline-none focus:border-sky-400 focus:shadow-[0_0_5px_rgba(135,206,250,0.5)]"
              />
              <label
                className={`${
                  darkMode
                    ? "bg-[#1e1e1e] text-slate-200"
                    : "bg-white text-gray-500"
                }  absolute left-3 top-3 px-1 text-gray-500 transition-all duration-200 pointer-events-none
    peer-placeholder-shown:top-3
    peer-placeholder-shown:text-base
    peer-placeholder-shown:text-gray-500
    peer-focus:-top-2
    peer-focus:text-xs
    peer-focus:text-sky-400
    peer-valid:-top-2
    peer-valid:text-xs
    peer-valid:text-sky-400`}
              >
                Cell no
              </label>
            </div>

            {/* City Field */}
            <div className="relative sm:my-4 tablet:my-0">
              <input
                type="text"
                name="City"
                placeholder=""
                value={Customer2.City || ""}
                onChange={handleEdit}
                required
                className="inputfield peer block w-full appearance-none border border-gray-300 rounded px-3 py-3 focus:outline-none focus:border-sky-400 focus:shadow-[0_0_5px_rgba(135,206,250,0.5)]"
              />
              <label
                className={` ${
                  darkMode
                    ? "bg-[#1e1e1e] text-slate-200"
                    : "bg-white text-gray-500"
                } absolute left-3 top-3 px-1 transition-all duration-200 pointer-events-none
    peer-placeholder-shown:top-3
    peer-placeholder-shown:text-base
    peer-placeholder-shown:text-gray-500
    peer-focus:-top-2
    peer-focus:text-xs
    peer-focus:text-sky-400
    peer-valid:-top-2
    peer-valid:text-xs
    peer-valid:text-sky-400`}
              >
                City
              </label>
            </div>

            {/* Country Field */}
            <div className="relative sm:my-4 tablet:my-0">
              <input
                type="text"
                name="Country"
                placeholder=""
                value={Customer2.Country || ""}
                onChange={handleEdit}
                required
                className="inputfield peer block w-full appearance-none border border-gray-300 rounded px-3 py-3 focus:outline-none focus:border-sky-400 focus:shadow-[0_0_5px_rgba(135,206,250,0.5)]"
              />
              <label
                className={` ${
                  darkMode
                    ? "bg-[#1e1e1e] text-slate-200"
                    : "bg-white text-gray-500"
                } absolute left-3 top-3 px-1  transition-all duration-200 pointer-events-none
    peer-placeholder-shown:top-3
    peer-placeholder-shown:text-base
    peer-placeholder-shown:text-gray-500
    peer-focus:-top-2
    peer-focus:text-xs
    peer-focus:text-sky-400
    peer-valid:-top-2
    peer-valid:text-xs
    peer-valid:text-sky-400`}
              >
                Country
              </label>
            </div>
          </div>

          {/* Gender Radio */}
          <div className="flex flex-row space-x-4">
            <label className="mb-1 text-sky-400 font-sans">Gender:</label>
            <div className="flex gap-2">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="Gender"
                  value="Male"
                  checked={Customer2.Gender === "Male"}
                  onChange={handleEdit}
                  className="accent-blue-500"
                />
                Male
              </label>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="Gender"
                  value="Female"
                  checked={Customer2.Gender === "Female"}
                  onChange={handleEdit}
                  className="accent-pink-500"
                />
                Female
              </label>
            </div>
          </div>

          {/* Status Radio */}
          <div className="flex flex-row space-x-6">
            <label className="mb-1 font-sans text-sky-400">Status:</label>
            <div className="flex gap-[14px]">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="Status"
                  value="VIP"
                  checked={Customer2.Status === "VIP"}
                  required
                  onChange={handleEdit}
                  className="accent-green-500"
                />
                VIP
              </label>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="Status"
                  value="Standard"
                  required
                  checked={Customer2.Status === "Standard"}
                  onChange={handleEdit}
                  className="accent-yellow-500"
                />
                Standard
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-2 mt-2">
            <button
              onClick={onClose2}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              type="Submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </form>,
    modalRoot
  );
}

export default EditModal;
