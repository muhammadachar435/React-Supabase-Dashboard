import React from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { toast } from "react-toastify";

function AddOrderModal({ darkMode, onClose, setuserinsert, userSubmit }) {
  // Modal
  const AddmodalRoot = document.getElementById("modal-order");
  useEffect(() => {
    document.documentElement.style.overflowY = "hidden";
    return () => {
      document.documentElement.style.overflowY = "scroll";
    };
  }, []);

  if (!AddmodalRoot) return null;

  // HandleInsert
  async function handleInsert(e) {
    setuserinsert((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  return ReactDOM.createPortal(
    <form
      onSubmit={(e) => {
        e.preventDefault();
        userSubmit();
        onClose();
        toast.success("Data Added Successfully", { autoClose: 500 });
      }}
    >
      <div
        className="fixed inset-0 flex items-center justify-center  bg-opacity-100 z-50"
        style={{ backgroundColor: "rgba(50,50,50,0.9)" }}
        onClick={onClose}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`${
            darkMode
              ? "bg-[#1e1e1e] text-white rounded-lg shadow-xl "
              : "text-black bg-white shadow-xl rounded-lg "
          } p-6 sm:overflow-y-scroll sm:mt-24 sm:ml-8 tablet:overflow-hidden max-h-[95vh] rounded-lg tablet:mt-16  shadow-lg sm:w-72 tablet:w-144 tablet:h-[550px]  desktop:w-[900px] `}
        >
          <h2 className="text-xl font-bold mb-4 font-Roboto transition-all">
            New Order
          </h2>

          <div className="sm:hidden relative mt-8 mb-16 tablet:grid grid-cols-4 gap-x-1">
            <div className=" w-36 grid grid-cols-1 place-items-center">
              <p className="bg-blue-400 w-6 h-6 text-center rounded-full ">1</p>
              <p
                className={`${
                  darkMode ? "text-slate-200 " : "text-black"
                }text-slate-200`}
              >
                Packaging
              </p>
            </div>
            <div className="absolute top-[13px] left-23 tablet:w-24 desktop:w-44 h-1 rounded-lg bg-slate-400"></div>
            <div className=" w-36 grid grid-cols-1 place-items-center">
              <p className="bg-slate-300 w-6 h-6 text-center rounded-full ">
                2
              </p>
              <p
                className={`${
                  darkMode ? "text-slate-200 " : "text-black"
                }text-slate-200`}
              >
                Shipping
              </p>
            </div>
            <div className="absolute tablet:w-24 tablet:top-[13px] tablet:left-56 desktop:top-[13px] desktop:left-76 desktop:w-44 h-1 rounded-lg bg-slate-400"></div>
            <div className=" w-36 grid grid-cols-1 place-items-center">
              <p className="bg-slate-300 w-6 h-6 text-center rounded-full ">
                3
              </p>
              <p
                className={`${
                  darkMode ? "text-slate-200 " : "text-black"
                }text-slate-200`}
              >
                Customs Clearance
              </p>
            </div>
            <div className="absolute tablet:w-24 tablet:top-[13px] tablet:right-18 desktop:top-[13px] desktop:right-39   desktop:w-44 h-1 rounded-lg bg-slate-400"></div>
            <div className=" w-36 grid grid-cols-1 place-items-center">
              <p className={` w-6 h-6 text-center rounded-full bg-slate-300 `}>
                4
              </p>
              <p
                className={`${
                  darkMode ? "text-slate-200 " : "text-black"
                }text-slate-200`}
              >
                Delivered
              </p>
            </div>
          </div>

          <div className="relative tablet:grid tablet:grid-cols-2 gap-5 mb-2">
            {/* Item */}
            <div className="relative sm:my-4 tablet:my-0">
              <input
                type="text"
                placeholder=""
                onChange={handleInsert}
                name="Item"
                required
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
                Item
              </label>
            </div>

            {/* Total Amount */}
            <div className="relative sm:my-4 tablet:my-0">
              <input
                type="number"
                name="TotalAmount"
                placeholder=""
                onChange={handleInsert}
                required
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
                Total Amount
              </label>
            </div>

            {/* Promo Code */}
            <div className="relative sm:my-4 tablet:my-0">
              <input
                type="text"
                name="PromoCode"
                placeholder="Promo Code"
                onChange={handleInsert}
                required
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
                Promo Code
              </label>
            </div>

            {/* CustomerID */}
            <div className="relative sm:my-4 tablet:my-0">
              <input
                type="number"
                placeholder=""
                onChange={handleInsert}
                name="CustomerID"
                required
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
                CustomerID
              </label>
            </div>

            {/* Is Delayed */}
            <select
              onChange={handleInsert}
              name="IsDelayed"
              className={`border border-gray-300 p-2  w-full mb-2 tablet:w-[254px] tablet:h-[50px] font-sans desktop:w-[416px] rounded  `}
            >
              <option value="">IsDelayed</option>
              <option
                value="⌚"
                onChange={handleInsert}
                className={`${
                  darkMode ? "text-green-500 px-1" : "text-green-500 px-1"
                }`}
              >
                ⌚
              </option>
              <option value="  -" className="text-red-500 px-1 text-2xl">
                &nbsp;-
              </option>
              <option
                defaultValue="IsDelayed"
                onChange={handleInsert}
                className="text-red-500 px-1"
              ></option>
            </select>

            {/* Status */}
            <select
              onChange={handleInsert}
              name="Status"
              className={`border border-gray-300 p-2 w-full mb-4 tablet:w-[254px] tablet:h-[50px] font-sans desktop:w-[416px] rounded `}
            >
              <option value="">Select Status</option>
              <option
                value="Packing"
                className={`${darkMode ? "text-black" : "text-black"}`}
              >
                Packing
              </option>
              <option
                value="Shipping"
                className={`${darkMode ? "text-black" : "text-black"}`}
              >
                Shipping
              </option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-end tablet:mt-20">
            <button
              onClick={onClose}
              className="bg-gray-300 font-sans px-6 py-2 mr-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 font-sans text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </form>,
    AddmodalRoot
  );
}

export default AddOrderModal;
