import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import ReactDOM from "react-dom";

function AddCustomerModal({
  onClose,
  darkMode,
  custinsert,
  setCustinsert,
  CustomerSubmit,
}) {
  const modalRootnew = document.getElementById("modal-root");

  useEffect(() => {
    document.documentElement.style.overflowY = "hidden";
    return () => {
      document.documentElement.style.overflowY = "scroll";
    };
  }, []);
  if (!modalRootnew) return null;

  function HandleAdd(e) {
    setCustinsert((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  {
    return ReactDOM.createPortal(
      <form
        onSubmit={(e) => {
          e.preventDefault();
          CustomerSubmit();
          onClose();
        }}
      >
        <div
          onClick={onClose}
          className="fixed inset-0 flex items-center justify-center  bg-opacity-50 z-50  tablet:mt-10 xll:top-6"
          style={{ backgroundColor: "rgba(50,50,50,0.9)" }}
        >
          <div
            className={` ${
              darkMode
                ? "bg-[#1e1e1e] text-white shadow-lg"
                : "text-black bg-white shadow-lg"
            }  sm:overflow-y-scroll inset-shadow-sm  tablet:overflow-auto max-h-[80vh] p-6 rounded shadow-lg sm:w-72 sm:ml-6 sm:mt-14 tablet:mt-2 ml-20 flex flex-col sm:gap-1 tablet:w-144 tablet:gap-1 `}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h2 className="text-xl mb-4 font-bold font-Inter">Add Customer</h2>

            <div className="relative tablet:grid tablet:grid-cols-2 gap-5 mb-2">
              {/* Name */}
              <div className="relative sm:my-4 tablet:my-0">
                <input
                  type="text"
                  placeholder=""
                  required
                  name="Cname"
                  onChange={HandleAdd}
                  className={` inputfield peer block w-full appearance-none border border-gray-300 rounded px-3 py-3 focus:outline-none focus:border-sky-400 focus:shadow-[0_0_5px_rgba(135,206,250,0.5)]`}
                />
                <label
                  className={`${
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
    peer-valid:text-sky-400 `}
                >
                  Name
                </label>
              </div>
              {/* Email */}
              <div className="relative sm:my-4 tablet:my-0">
                <input
                  type="email"
                  placeholder=""
                  required
                  name="CEmail"
                  onChange={HandleAdd}
                  className={` inputfield peer block w-full appearance-none border border-gray-300 rounded px-3 py-3 focus:outline-none focus:border-sky-400 focus:shadow-[0_0_5px_rgba(135,206,250,0.5)]`}
                />
                <label
                  className={` ${
                    darkMode
                      ? "bg-[#1e1e1e] text-slate-200"
                      : "bg-white text-gray-500"
                  } absolute left-3 top-3  px-1 text-gray-500 transition-all duration-200 pointer-events-none
      peer-placeholder-shown:top-3
    peer-placeholder-shown:text-base
  peer-placeholder-shown:text-gray-500
    peer-focus:-top-2
    peer-focus:text-xs
    peer-focus:text-sky-400
    peer-valid:-top-2
    peer-valid:text-xs
    peer-valid:text-sky-400 `}
                >
                  Email
                </label>
              </div>

              {/* Age */}
              <div className="relative sm:my-4 tablet:my-0">
                <input
                  type="number"
                  placeholder=""
                  required
                  name="Age"
                  onChange={HandleAdd}
                  className={` inputfield peer block w-full appearance-none border border-gray-300 rounded px-3 py-3 focus:outline-none focus:border-sky-400 focus:shadow-[0_0_5px_rgba(135,206,250,0.5)]`}
                />
                <label
                  className={`${
                    darkMode
                      ? "bg-[#1e1e1e] text-slate-200"
                      : "bg-white text-gray-500"
                  } absolute left-3 top-3  px-1 text-gray-500 transition-all duration-200 pointer-events-none
      peer-placeholder-shown:top-3
    peer-placeholder-shown:text-base
  peer-placeholder-shown:text-gray-500
    peer-focus:-top-2
    peer-focus:text-xs
    peer-focus:text-sky-400
    peer-valid:-top-2
    peer-valid:text-xs
    peer-valid:text-sky-400 `}
                >
                  Age
                </label>
              </div>

              {/* Phone Number */}
              <div className="relative sm:my-4 tablet:my-0">
                <input
                  type="text"
                  placeholder=""
                  required
                  min="10000000000"
                  name="Phoneno"
                  onChange={HandleAdd}
                  className={` inputfield peer block w-full appearance-none border border-gray-300 rounded px-3 py-3 focus:outline-none focus:border-sky-400 focus:shadow-[0_0_5px_rgba(135,206,250,0.5)]`}
                />
                <label
                  className={`${
                    darkMode
                      ? "bg-[#1e1e1e] text-slate-200"
                      : "bg-white text-gray-500"
                  } absolute left-3 top-3  px-1  transition-all duration-200 pointer-events-none
      peer-placeholder-shown:top-3
    peer-placeholder-shown:text-base
  peer-placeholder-shown:text-gray-500
    peer-focus:-top-2
    peer-focus:text-xs
    peer-focus:text-sky-400
    peer-valid:-top-2
    peer-valid:text-xs
    peer-valid:text-sky-400 `}
                >
                  Cell no
                </label>
              </div>

              {/* City */}
              <div className="relative sm:my-4 tablet:my-0">
                <input
                  type="text"
                  placeholder=""
                  required
                  onChange={HandleAdd}
                  name="City"
                  className={` inputfield peer block w-full appearance-none border border-gray-300 rounded px-3 py-3 focus:outline-none focus:border-sky-400 focus:shadow-[0_0_5px_rgba(135,206,250,0.5)]`}
                />
                <label
                  className={`${
                    darkMode
                      ? "bg-[#1e1e1e] text-slate-200"
                      : "bg-white text-gray-500"
                  } absolute left-3 top-3  px-1 text-gray-500 transition-all duration-200 pointer-events-none
      peer-placeholder-shown:top-3
    peer-placeholder-shown:text-base
  peer-placeholder-shown:text-gray-500
    peer-focus:-top-2
    peer-focus:text-xs
    peer-focus:text-sky-400
    peer-valid:-top-2
    peer-valid:text-xs
    peer-valid:text-sky-400 `}
                >
                  City
                </label>
              </div>

              {/* Country */}

              <div className="relative sm:my-4 tablet:my-0">
                <input
                  type="text"
                  placeholder=""
                  required
                  name="Country"
                  onChange={HandleAdd}
                  className={`  inputfield peer block w-full appearance-none border border-gray-300 rounded px-3 py-3 focus:outline-none focus:border-sky-400 focus:shadow-[0_0_5px_rgba(135,206,250,0.5)]`}
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
    peer-valid:text-sky-400 `}
                >
                  Country
                </label>
              </div>
            </div>

            {/* Gender */}
            <select
              name="Gender"
              onChange={HandleAdd}
              className={`border p-2 tablet:mb-4 w-full rounded tablet:my-0 `}
            >
              <option value="" className="font-sans ">
                Select Gender
              </option>
              <option
                value="Male"
                required
                className={`${darkMode ? "text-black" : "text-black"}`}
              >
                Male
              </option>
              <option
                value="Female"
                required
                className={`${darkMode ? "text-black" : "text-black"}`}
              >
                Female
              </option>
            </select>

            {/* Status */}
            <select
              onChange={HandleAdd}
              name="Status"
              className={`border p-2 w-full tablet:mb-4  rounded sm:my-4 tablet:my-0`}
            >
              <option
                value=""
                className={` ${
                  darkMode ? "text-black" : "text-black"
                }  font-sans`}
              >
                Select Status
              </option>
              <option
                value="VIP"
                required
                className={`${darkMode ? "text-black" : "text-black"}`}
              >
                VIP
              </option>
              <option
                value="Standard"
                required
                className={`${darkMode ? "text-black" : "text-black"}`}
              >
                Standard
              </option>
            </select>
            {/* Buttons */}
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="bg-gray-300  px-4 py-2 mr-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </form>,
      modalRootnew
    );
  }
}

export default AddCustomerModal;
