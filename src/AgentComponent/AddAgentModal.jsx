import React, { useEffect } from "react";
import ReactDOM from "react-dom";

function AddAgentModal({ setAgentinsert, AgentSubmit, onClose, darkMode }) {
  const modalRoot = document.getElementById("modal-agent");

  useEffect(() => {
    document.documentElement.style.overflowY = "hidden";
    return () => {
      document.documentElement.style.overflowY = "scroll";
    };
  }, []);

  if (!modalRoot) return null;

  function handleAgent(e) {
    setAgentinsert((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  return ReactDOM.createPortal(
    <form
      onSubmit={(e) => {
        e.preventDefault();
        AgentSubmit();
        onClose();
      }}
    >
      <div
        className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50"
        style={{ backgroundColor: "rgba(50,50,50,0.9)" }}
        onClick={onClose}
      >
        <div
          className={`${
            darkMode
              ? "bg-[#1e1e1e] text-white rounded-lg shadow-xl  "
              : "rounded-lg shadow-xl text-black bg-white"
          } p-6 sm:overflow-y-scroll sm:mt-24 sm:ml-8 tablet:overflow-hidden max-h-[95vh] rounded-lg tablet:mt-16  shadow-lg sm:w-72 tablet:w-144 tablet:h-[450px]  desktop:w-[900px] `}
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-xl font-semibold mb-8">Add Agent</h2>

          <div className="relative tablet:grid tablet:grid-cols-2 gap-5 mb-2">
            {/* Name */}
            <div className="relative sm:my-4 tablet:my-0">
              <input
                type="text"
                placeholder=""
                name="Agentname"
                onChange={handleAgent}
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
            <div className="relative sm:my-4 tablet:my-0">
              <input
                type="text"
                placeholder=""
                name="Company"
                onChange={handleAgent}
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
            <div className="relative sm:my-4 tablet:my-0">
              <input
                type="number"
                placeholder=""
                name="Phoneno"
                onChange={handleAgent}
                min="1000000000"
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
              onChange={handleAgent}
              className={`border border-gray-300 p-2  w-full mb-2 tablet:w-[254px] tablet:h-[50px] font-sans desktop:w-[416px] rounded `}
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
              onChange={handleAgent}
              className={`border border-gray-300 p-2  w-full mb-2 tablet:w-[254px] tablet:h-[50px] font-sans desktop:w-[416px] rounded `}
            >
              <option value="">Select Status</option>
              <option
                value="Active"
                className={`${darkMode ? "text-black" : "text-black"}`}
              >
                Active
              </option>
              <option
                value="Locked"
                className={`${darkMode ? "text-black" : "text-black"}`}
              >
                Locked
              </option>
            </select>

            {/* end */}
          </div>

          {/* Verified */}
          <select
            name="Verified"
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
          {/* Buttons */}
          <div className="flex justify-end gap-2 mt-10">
            <button
              onClick={onClose}
              className="bg-gray-400 px-4 font-sans py-2 mr-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white font-sans px-4 py-2 rounded hover:bg-blue-700"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </form>,
    modalRoot
  );
}

export default AddAgentModal;
