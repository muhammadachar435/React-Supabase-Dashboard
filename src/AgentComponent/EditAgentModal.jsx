import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { ToastContainer, toast } from "react-toastify";
import { supabase } from "../Database/Supabase";

function EditAgentModal({
  Agent2,
  setAgent2,
  onClose2,
  AgentfetchData,
  darkMode,
}) {
  const modalRoot = document.getElementById("modal-agent");

  useEffect(() => {
    document.documentElement.style.overflowY = "hidden";
    return () => {
      document.documentElement.style.overflowY = "scroll";
    };
  }, []);

  if (!modalRoot) return null;

  function handleAgent(e) {
    setAgent2((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  const handleupdateValue = async (UserId) => {
    const { data, error } = await supabase
      .from("Agents")
      .update({
        Agentname: Agent2.Agentname,
        Company: Agent2.Company,
        Role: Agent2.Role,
        Phoneno: Agent2.Phoneno,
        Verified: Agent2.Verified,
        Status: Agent2.Status,
      })
      .eq("id", UserId);

    if (error) {
      console.log(error);
    } else {
      await AgentfetchData();
      onClose2();
      toast.success("Data Added Successfully", { autoClose: 500 });
    }
  };

  return ReactDOM.createPortal(
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleupdateValue(Agent2.id);
      }}
    >
      <div
        className={` fixed inset-0 ${
          darkMode ? "bg-[rgba(50,50,50,0.7)]" : "bg-[#323232e6]"
        }  bg-opacity-50 flex justify-center items-center z-50`}
        onClick={onClose2}
      >
        <div
          className={`${
            darkMode
              ? "bg-[#1e1e1e] text-white rounded-lg shadow-xl  "
              : "rounded-lg shadow-xl text-black bg-white"
          } p-6 rounded sm:overflow-y-scroll sm:mt-36 sm:ml-6 sm:w-72 tablet:overflow-hidden max-h-[95vh] tablet:mt-14 desktop:mt-32 tablet:h-[450px]  shadow-md  tablet:w-144 desktop:w-[900px]  `}
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-xl font-semibold mb-8">Edit Agent</h3>

          {/* start */}
          <div className="relative tablet:grid tablet:grid-cols-2 gap-5 mb-2  ">
            {/* Name */}
            <div className="relative sm:my-4 tablet:my-0 ">
              <input
                type="text"
                name="Agentname"
                value={Agent2.Agentname || ""}
                onChange={handleAgent}
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
                Agent name
              </label>
            </div>

            {/* Company */}
            <div className="relative sm:my-4 tablet:my-0 ">
              <input
                type="text"
                name="Company"
                value={Agent2.Company || ""}
                onChange={handleAgent}
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
                Company
              </label>
            </div>

            {/* Cell no */}
            <div className="relative sm:my-4 tablet:my-0 ">
              <input
                type="number"
                name="Phoneno"
                value={Agent2.Phoneno}
                onChange={handleAgent}
                min="1000000000"
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
                Cell no
              </label>
            </div>

            {/* Role */}
            <select
              name="Role"
              value={Agent2.Role}
              onChange={handleAgent}
              className={` border border-gray-300 p-2  w-full mb-2 tablet:w-[254px] tablet:h-[50px] font-sans desktop:w-[416px] rounded `}
            >
              <option
                defaultValue=""
                className={`${darkMode ? "text-black" : ""}`}
              >
                Select Role
              </option>
              <option
                value="Project Manager"
                className={`${darkMode ? "text-black" : ""}`}
              >
                Project Manager
              </option>
              <option
                value="Web Developer"
                className={`${darkMode ? "text-black" : ""}`}
              >
                Web Developer
              </option>
              <option
                value="Mobile Developer"
                className={`${darkMode ? "text-black" : ""}`}
              >
                Mobile Developer
              </option>
              <option
                value="Python Developer"
                className={`${darkMode ? "text-black" : ""}`}
              >
                Python Developer
              </option>
              <option
                value="Java Developer"
                className={`${darkMode ? "text-black" : ""}`}
              >
                Java Developer
              </option>
              <option
                value="Flutter Developer"
                className={`${darkMode ? "text-black" : ""}`}
              >
                Flutter Developer
              </option>
            </select>

            {/* Status */}
            <select
              name="Status"
              value={Agent2.Status}
              onChange={handleAgent}
              className={`border border-gray-300 p-2  w-full mb-2 tablet:w-[254px] tablet:h-[50px] font-sans desktop:w-[416px] rounded`}
            >
              <option
                defaultValue=""
                className={`${darkMode ? "text-black" : ""}`}
              >
                Select Status
              </option>
              <option
                value="Active"
                className={`${darkMode ? "text-black" : ""}`}
              >
                Active
              </option>
              <option
                value="Locked"
                className={`${darkMode ? "text-black" : ""}`}
              >
                Locked
              </option>
            </select>

            {/*  */}
          </div>
          {/* Verified */}
          <select
            name="Verified"
            value={Agent2.Verified}
            onChange={handleAgent}
            className={`border border-gray-300 p-2  w-full mb-2 tablet:w-[254px] tablet:h-[50px] font-sans desktop:w-[416px] rounded `}
          >
            <option value="">Select Verification</option>
            <option
              value="✔"
              className={`${darkMode ? "text-black" : "text-black"}`}
            >
              ✔
            </option>
            <option
              value="❌"
              className={`${darkMode ? "text-black" : "text-black"}`}
            >
              ❌
            </option>
          </select>

          <div className="flex justify-end gap-2 mt-10">
            <button
              onClick={onClose2}
              className="bg-gray-400 font-sans text-white px-4 py-2 rounded hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 font-sans text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Update
            </button>
          </div>
          <ToastContainer />
        </div>
      </div>
    </form>,
    modalRoot
  );
}

export default EditAgentModal;
