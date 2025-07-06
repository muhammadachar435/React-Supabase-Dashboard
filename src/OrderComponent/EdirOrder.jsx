import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { supabase } from "../Database/Supabase";
import { toast } from "react-toastify";

function EditOrderModal({ onClose2, darkMode, user2, setUser2, fetchData }) {
  const modalRoot = document.getElementById("modal-order");

  useEffect(() => {
    document.documentElement.style.overflowY = "hidden";
    return () => {
      document.documentElement.style.overflowY = "scroll";
    };
  }, []);

  if (!modalRoot) return null;

  // handleChange => To add Data
  function handleChange(e) {
    setUser2((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  async function ChangeEdit(UserId) {
    const { data, error } = await supabase
      .from("Order")
      .update({
        Item: user2.Item,
        TotalAmount: user2.TotalAmount,
        PromoCode: user2.PromoCode,
        IsDelayed: user2.IsDelayed,
        CustomerID: user2.CustomerID,
        Status: user2.Status,
      })
      .eq("id", UserId);

    if (error) {
      console.log(error);
    } else {
      await fetchData();
      onClose2();
      toast.success("Data Modify Successfully", { autoClose: 500 });
    }
  }

  return ReactDOM.createPortal(
    <form
      onSubmit={(e) => {
        e.preventDefault();
        ChangeEdit(user2.id);
      }}
    >
      <div
        className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50"
        style={{ backgroundColor: "rgba(50,50,50,0.9)" }}
        onClick={onClose2}
      >
        <div
          className={` ${
            darkMode
              ? "bg-[#1e1e1e] text-white rounded-lg shadow-xl"
              : "text-black bg-white rounded-lg shadow-xl"
          }   p-6 rounded sm:overflow-y-scroll sm:mt-24 sm:ml-8 sm:w-72 tablet:overflow-hidden max-h-[95vh] tablet:mt-14 tablet:h-[550px]  shadow-md  tablet:w-144 desktop:w-[900px]  `}
          onClick={(e) => e.stopPropagation()}
        >
          <h3
            className={` ${
              darkMode ? "text-white" : "text-black"
            } text-xl font-semibold  mb-1 font-Roboto`}
          >
            Edit Order
          </h3>

          <div className="hidden relative mt-8 mb-18 tablet:grid grid-cols-4 gap-x-1">
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
            <div className="absolute top-[12px] left-23 tablet:w-24 desktop:w-44 h-1 rounded-lg bg-slate-400"></div>
            <div className=" w-36 grid grid-cols-1 place-items-center">
              <p className="bg-blue-400 w-6 h-6 text-center rounded-full ">2</p>
              <p
                className={`${
                  darkMode ? "text-slate-200 " : "text-black"
                }text-slate-200`}
              >
                Shipping
              </p>
            </div>
            <div className="absolute tablet:w-24 tablet:top-[12px] tablet:left-56 desktop:top-[12px] desktop:left-76 desktop:w-44 h-1 rounded-lg bg-slate-400"></div>
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
            <div className="absolute tablet:w-24 tablet:top-[12px] tablet:right-18 desktop:top-[12px] desktop:right-39   desktop:w-44 h-1 rounded-lg bg-slate-400"></div>
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

          {/* start */}
          <div className="relative tablet:grid tablet:grid-cols-2 gap-5 mb-2 tablet:mt-4 ">
            {/* Item */}
            <div className="relative sm:my-4 tablet:my-0">
              <input
                type="text"
                name="Item"
                onChange={handleChange}
                placeholder=""
                value={user2.Item || ""}
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
                onChange={handleChange}
                value={user2.TotalAmount || ""}
                placeholder=""
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
                onChange={handleChange}
                placeholder=""
                value={user2.PromoCode || ""}
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

            {/* Customer name*/}
            <div className="relative sm:my-4 tablet:my-0">
              <input
                type="number"
                name="CustomerID"
                defaultValue={user2.CustomerID}
                onChange={handleChange}
                placeholder=""
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
                Customer ID
              </label>
            </div>
            {/* end div below */}
          </div>
          {/* Is Delayed */}
          <div className="flex  flex-col-2 space-x-5 mt-4 items-center">
            <label className="mb-1 font-sans ml-1 text-sky-400">
              IsDelayed:
            </label>
            <div className="flex space-x-2">
              <label className="flex  items-center gap-1 ">
                <input
                  type="radio"
                  name="IsDelayed"
                  value="⌚"
                  checked={user2.IsDelayed === "⌚"}
                  onChange={handleChange}
                  className="accent-red-500"
                />
                ⌚
              </label>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="IsDelayed"
                  value=" -"
                  checked={user2.IsDelayed === " -"}
                  onChange={handleChange}
                  className="accent-green-500 text-red-500"
                />
                -
              </label>
            </div>
          </div>

          {/* Status */}
          <div className="flex flex-col-2 space-x-5 mt-4 items-center">
            <label className="mb-1 font-sans ml-1 text-sky-400">Status:</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="Status"
                  value="Packing"
                  checked={user2.Status === "Packing"}
                  onChange={handleChange}
                  className="accent-yellow-500"
                />
                Packing
              </label>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="Status"
                  value="Shipping"
                  checked={user2.Status === "Shipping"}
                  onChange={handleChange}
                  className="accent-blue-500"
                />
                Shipping
              </label>
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-2 sm:mt-6 tablet:mt-20">
            <button
              onClick={onClose2}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
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

export default EditOrderModal;
