import { useEffect, useState } from "react";
import { supabase } from "../Database/Supabase";
import { FaPlus } from "react-icons/fa";
import { MdDeleteOutline, MdModeEditOutline, MdDelete } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";
import img1 from "../Pictures/profile2.png";
import img2 from "../Pictures/user18.png";
import AddAgentModal from "../AgentComponent/AddAgentModal";
import EditAgentModal from "../AgentComponent/EditAgentModal";

function Agents({ darkMode }) {
  const [AgentData, setAgentData] = useState([]);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [showAddModal, setShowModal] = useState(false);
  const [showEditModal, setEditModal] = useState(false);
  const [SelectedOrder, setSelectedOrder] = useState([]);
  const [searchquery, setSearchQuery] = useState("");
  const [Agentinsert, setAgentinsert] = useState({
    Agentname: "",
    Company: "",
    Phoneno: "",
    Role: "",
    Verified: "",
    Status: "",
  });
  const [Agent2, setAgent2] = useState({
    id: "",
    Agentname: "",
    Company: "",
    Role: "",
    Phoneno: "",
    Verified: "",
    Status: "",
  });

  useEffect(() => {
    AgentfetchData();
  }, []);

  const AgentfetchData = async () => {
    const { data } = await supabase
      .from("Agents")
      .select("*")
      .order("id", { ascending: true });

    setAgentData(data);
  };

  const rowCount = AgentData.length;
  const rowHeight = 65;
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
      .from("Agents")
      .delete()
      .eq("id", UserId);

    AgentfetchData();

    if (data) {
      console.log(data);
    }
    if (error) {
      console.log(error);
    }
  };

  async function AgentSubmit() {
    await supabase.from("Agents").insert([Agentinsert]);
    AgentfetchData();
    toast.success("Data Store Successfully", { autoClose: 500 });
  }

  const handleDeleteSelected = async () => {
    if (SelectedOrder.length === 0) {
      toast.warn("Selected Order Empty", { autoClose: 500 });
      return;
    }
    const { data, error } = await supabase
      .from("Agents")
      .delete()
      .in("id", SelectedOrder);

    if (error) {
      console.log(error);
    } else {
    }
    setSelectedOrder([]);
    AgentfetchData();
  };

  return (
    <>
      <div className="sm:mb-20 tablet:mb-36  ml-13 sm:w-[260px] sm:h-[420px] mt-20 mymob:w-[320px] myiphone:w-[375px] tablet:ml-16 tablet:w-[690px] desktop:w-[950px] xll:ml-17 xll:min-w-[1190px] mypc:w-[1250px] mylap:w-[1360px] biglap:w-[2450px] biglap:ml-18">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 tablet:mb-8">
          <h2 className="text-xl sm:text-2xl tablet:text-3xl font-bold font-Inter mb-4 sm:mb-0">
            Agents
          </h2>
          <button
            className={` ${
              darkMode ? "text-white " : "text-black hover:text-white"
            }  bg-[#8fcaf9] hover:cursor-pointer flex items-center sm:space-x-1 tablet:space-x-3 px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto`}
            onClick={() => {
              setShowModal(!showAddModal);
            }}
          >
            <span>
              <FaPlus />
            </span>
            <span className="uppercase ">New Agent</span>
          </button>
        </div>

        <div
          className={`${
            darkMode
              ? "bg-[#1e1e1e] text-white rounded-lg shadow-xl"
              : "bg-white text-black"
          } p-2 relative shadow-lg rounded-md`}
        >
          <div className="sm:flex sm:justify-between sm:items-center mymob:pr-2 mt-6 mb-10">
            <input
              type="text"
              placeholder="Search Agents..."
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
            className={`sm:overflow-x-scroll desktop:overflow-hidden ${
              AgentData.length < 3 ? "h-[30vh]" : ""
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
                        SelectedOrder.length === AgentData.length &&
                        AgentData.length > 0
                      }
                      className="accent-green-500"
                      onChange={(e) => {
                        if (e.target.checked) {
                          const allIds = AgentData.map((user) => user.id);
                          setSelectedOrder(allIds);
                        } else {
                          setSelectedOrder([]);
                        }
                      }}
                    />
                  </th>
                  <th className=" text-left px-2 py-[6px]">Agent Id</th>
                  <th className="text-left px-2 py-[6px]">Agent name</th>
                  <th className="text-left px-2 py-[6px]">Company</th>
                  <th className="text-left px-2 py-[6px]">Role</th>
                  <th className="text-left px-2 py-[6px] ">Cell no</th>
                  <th className="text-left px-2 py-[6px]">Verified</th>
                  <th className="text-left px-2 py-[6px]">Status</th>
                </tr>
              </thead>
              <tbody>
                {AgentData.filter((user) => {
                  return user.Agentname.toLowerCase().includes(
                    searchquery.toLowerCase()
                  );
                }).map((user) => (
                  <tr key={user.id}>
                    <td className="w-4 border-b border-slate-400 text-left px-2 py-[6px]">
                      <input
                        type="checkbox"
                        checked={SelectedOrder.includes(user.id)}
                        className="accent-green-500"
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
                    <td className="border-b border-slate-400 text-left px-6 py-[6px]">
                      {user.id}
                    </td>
                    <td className="border-b  border-slate-400 text-left px-2 py-[6px]">
                      <div className="flex items-center">
                        <td>
                          {user.id % 2 === 0 ? (
                            <img
                              src={img1}
                              alt=""
                              className="w-8 h-8 rounded-full"
                            />
                          ) : (
                            <img
                              src={img2}
                              alt=""
                              className="w-8 h-8 rounded-full"
                            />
                          )}
                        </td>
                        &nbsp; {user.Agentname}
                      </div>
                    </td>
                    <td className="border-b border-slate-400 text-left px-2 py-[6px]">
                      {user.Company}
                    </td>
                    <td className="border-b border-slate-400 text-left px-2 py-[6px]">
                      {user.Role}
                    </td>
                    <td className="border-b  border-slate-400  text-left px-2 py-[6px]">
                      {user.Phoneno}
                    </td>
                    <td className="border-b border-slate-400 text-left px-8 py-[6px]">
                      {user.Verified}
                    </td>
                    <td
                      className={`border-b border-slate-400 text-left  px-2 py-[6px] 
                        ${
                          user.Status === "Active"
                            ? "text-[#46a2f3] "
                            : user.Status === "Locked"
                            ? "text-yellow-400"
                            : "text-black"
                        } `}
                    >
                      {user.Status}
                    </td>
                    <td className="border-b w-3 border-slate-400 text-left px-2 py-[6px] relative">
                      <BsThreeDotsVertical
                        onClick={() =>
                          setOpenMenuId(openMenuId === user.id ? null : user.id)
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
                              setAgent2(user);
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
          {AgentData.length === 0 ? (
            <>
              <div className="sm:text-xl tablet:text-2xl font-bold font-Inter absolute top-56 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                No Agents
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      {showAddModal && (
        <AddAgentModal
          Agentinsert={Agentinsert}
          setAgentinsert={setAgentinsert}
          AgentSubmit={AgentSubmit}
          onClose={() => {
            setShowModal(!showAddModal);
          }}
          darkMode={darkMode}
        />
      )}
      {showEditModal && (
        <EditAgentModal
          Agent2={Agent2}
          setAgent2={setAgent2}
          AgentData={AgentData}
          onClose2={() => {
            setEditModal(!showEditModal);
          }}
          AgentfetchData={AgentfetchData}
          darkMode={darkMode}
        />
      )}
      <ToastContainer />
    </>
  );
}

export default Agents;
