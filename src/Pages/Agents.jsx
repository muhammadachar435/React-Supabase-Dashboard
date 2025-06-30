import React, { useState, useEffect, useRef } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import AddAgentModal from "../AgentComponent/AddAgentModal";
import EditAgentModal from "../AgentComponent/EditAgentModal";
import { FaPlus } from "react-icons/fa";
import imgprofile from "../Pictures/loginimg.png";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.png";

function Agents({ darkMode }) {
  const [agents, setAgents] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
    mobile: "",
    verified: false,
    status: "",
    profile: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [editingIndex, setEditingIndex] = useState(-1);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [openMenuIndex, setOpenMenuIndex] = useState(-1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAgents, setSelectedAgents] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const savedAgents = JSON.parse(localStorage.getItem("agents"));
    if (savedAgents && savedAgents.length > 0) {
      setAgents(savedAgents);
    } else {
      const initialData = [
        {
          name: "Ali Khan",
          company: "Tech Solutions",
          role: "Project Manager",
          mobile: "03001234567",
          verified: true,
          status: "Active",
          profile: profile2,
        },
        {
          name: "Sara Ahmed",
          company: "SoftDev",
          role: "Web Developer",
          mobile: "03111234567",
          verified: false,
          status: "Locked",
          profile: profile1,
        },
        {
          name: "JOhn",
          company: "ProCodg",
          role: "Python Developer",
          mobile: "03111234567",
          verified: false,
          status: "Locked",
          profile: profile3,
        },
        {
          name: "Micheal",
          company: "SoftDev",
          role: "Web Developer",
          mobile: "03111234567",
          verified: true,
          status: "Active",
          profile: profile1,
        },
        {
          name: "Zain",
          company: "SoftDev",
          role: "Project Manager",
          mobile: "03111234237",
          verified: false,
          status: "Locked",
          profile: profile3,
        },
      ];
      setAgents(initialData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("agents", JSON.stringify(agents));
  }, [agents]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenuIndex(-1);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = true;
    if (!formData.company) errors.company = true;
    if (!formData.role) errors.role = true;
    if (!formData.mobile) errors.mobile = true;
    if (!formData.status) errors.status = true;
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleAdd = () => {
    if (!validate()) {
      toast.error("All fields are required", { autoClose: 500 });
      return;
    }
    setAgents([formData, ...agents]);
    toast.success("Agent added successfully!", { autoClose: 500 });
    setTimeout(() => setShowAddModal(false), 500);
    setFormData({
      name: "",
      company: "",
      role: "",
      mobile: "",
      verified: false,
      status: "",
      profile: "",
    });
    setFormErrors({});
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setFormData(agents[index]);
    setFormErrors({});
    setShowEditModal(true);
    setOpenMenuIndex(-1);
  };

  const handleUpdate = () => {
    if (!validate()) {
      toast.error("All fields are required", { autoClose: 500 });
      return;
    }
    const updatedAgents = [...agents];
    updatedAgents[editingIndex] = formData;
    toast.success("Agent updated successfully!", { autoClose: 800 });
    setAgents(updatedAgents);
    setTimeout(() => setShowEditModal(false), 500);
    setFormData({
      name: "",
      company: "",
      role: "",
      mobile: "",
      verified: false,
      status: "",
      profile: "",
    });
    setFormErrors({});
    setEditingIndex(-1);
  };

  const handleDelete = (index) => {
    const updatedAgents = agents.filter((_, i) => i !== index);
    setAgents(updatedAgents);
    toast.success("Agent deleted successfully!", { autoClose: 800 });
  };

  const handleDeleteSelected = () => {
    if (selectedAgents.length === 0) {
      toast.error("No agents selected", { autoClose: 500 });
      return;
    }
    const updatedAgents = agents.filter(
      (_, index) => !selectedAgents.includes(index)
    );
    setAgents(updatedAgents);
    setSelectedAgents([]);
    setSelectAll(false);
    toast.success("Selected agents deleted", { autoClose: 800 });
  };

  const toggleMenu = (index) => {
    setOpenMenuIndex(openMenuIndex === index ? -1 : index);
  };

  const handleSelectAgent = (index) => {
    if (selectedAgents.includes(index)) {
      setSelectedAgents(selectedAgents.filter((i) => i !== index));
    } else {
      setSelectedAgents([...selectedAgents, index]);
    }
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedAgents([]);
    } else {
      setSelectedAgents(agents.map((_, index) => index));
    }
    setSelectAll(!selectAll);
  };

  useEffect(() => {
    setSelectAll(
      selectedAgents.length === agents.length && agents.length !== 0
    );
  }, [selectedAgents, agents]);

  const filteredAgents = agents.filter(
    (agent) =>
      agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agent.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // const tableHeight = `${Math.max(filteredAgents.length, 1) * 55}px`;
  let visibleRows = filteredAgents.length;

  if (visibleRows >= 2) {
    visibleRows += 1; // increase by +1 after 2 rows
  }

  const tableHeight = `${visibleRows * 55 + 110}px`;
  return (
    <div className=" ml-13 sm:w-[260px] mt-20 mymob:w-[320px] myiphone:w-[375px] tablet:ml-16 tablet:w-[690px] desktop:w-[950px]  xll:ml-17 xll:min-w-[1190px] mypc:w-[1250px] mylap:w-[1360px] biglap:w-[2450px] biglap:ml-18 mb-10">
      <div className="flex flex-col  sm:flex-row justify-between items-center mb-4 tablet:mb-8 ">
        <h2 className="text-xl  sm:text-2xl tablet:text-3xl font-bold font-Inter mb-4 sm:mb-0">
          Agents
        </h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-blue-600 flex items-center sm:space-x-1 tablet:space-x-3 font-Inter text-white px-4 py-2 rounded hover:bg-blue-700 w-full sm:w-auto"
        >
          <span>
            <FaPlus />
          </span>
          <span className="uppercase">New Agent</span>
        </button>
      </div>
      <div className="bg-white p-2 shadow-lg rounded-md">
        <div className="sm:flex sm:justify-between sm:items-center  mymob:pr-2 mt-6 mb-10">
          <input
            type="text"
            placeholder="Search Agent..."
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
            <MdDelete />
          </button>
        </div>
        <div
          className={`overflow-x-auto ${filteredAgents.length === 0 ? "" : ""}`}
          style={{ minHeight: tableHeight }}
        >
          <table
            className={` ${
              darkMode ? "text-black bg-white" : "text-black"
            } sm:w-[200px]  tablet:w-[672px] desktop:w-[930px] xll:w-[1170px] mypc:w-[1200px] mylap:w-[1335px] biglap:w-[2432px]`}
          >
            <thead>
              <tr className="text-sm sm:text-base h-18">
                <th className="w-4">
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                    className="accent-green-300"
                  />
                </th>
                <th className="text-left p-2">Name</th>
                <th className="text-left p-2">Company</th>
                <th className="text-left p-2">Role</th>
                <th className="text-left p-2">Mobile</th>
                <th className="text-left p-2">Verified</th>
                <th className="text-left p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredAgents.length === 0 ? (
                <tr>
                  <td
                    colSpan="10"
                    className="text-center text-gray-600   tablet:text-2xl font-Inter font-semibold"
                  >
                    No Agent Found
                  </td>
                </tr>
              ) : (
                filteredAgents.map((agent, index) => (
                  <tr key={index}>
                    <td className=" p-2 text-center">
                      <input
                        type="checkbox"
                        checked={selectedAgents.includes(index)}
                        onChange={() => handleSelectAgent(index)}
                      />
                    </td>
                    <td className=" p-2 flex items-center gap-2">
                      <img
                        src={agent.profile || imgprofile}
                        alt={agent.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span>{agent.name}</span>
                    </td>
                    <td className=" p-2">{agent.company}</td>
                    <td className=" p-2">{agent.role}</td>
                    <td className=" p-2">{agent.mobile}</td>
                    <td className=" p-2">
                      <input
                        type="checkbox"
                        checked={agent.verified}
                        readOnly
                        className=" accent-green-500  "
                      />
                    </td>
                    <td
                      className={` ${
                        agent.status.toLowerCase() === "active"
                          ? "text-green-500  text-base "
                          : agent.status.toLowerCase() === "locked"
                          ? "text-red-500  text-base  "
                          : ""
                      } `}
                    >
                      {agent.status}
                    </td>
                    <td className=" p-2 relative ">
                      <BsThreeDotsVertical
                        onClick={() => toggleMenu(index)}
                        className="cursor-pointer"
                      />
                      {openMenuIndex === index && (
                        <div
                          ref={menuRef}
                          className="absolute right-1  bg-white shadow-lg rounded p-2 z-10"
                        >
                          <button
                            onClick={() => handleEdit(index)}
                            className="flex items-center p-1 font-Inter hover:bg-gray-200 rounded-md"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(index)}
                            className="flex  items-center p-1 font-Inter hover:bg-gray-200 rounded-md"
                          >
                            <span className="text-red-600"> Delete</span>
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
          <AddAgentModal
            formData={formData}
            setFormData={setFormData}
            formErrors={formErrors}
            onAdd={handleAdd}
            onClose={() => setShowAddModal(false)}
          />
        )}

        {showEditModal && (
          <EditAgentModal
            formData={formData}
            setFormData={setFormData}
            formErrors={formErrors}
            onUpdate={handleUpdate}
            onClose={() => setShowEditModal(false)}
          />
        )}
      </div>
    </div>
  );
}

export default Agents;
