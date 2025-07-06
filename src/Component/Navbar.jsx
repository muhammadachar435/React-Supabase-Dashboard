import React, { useState, useEffect, useRef } from "react";
import {
  MdOutlineMenu,
  MdMenuOpen,
  MdDarkMode,
  MdLightMode,
} from "react-icons/md";

import { Link, useLoaderData, useLocation } from "react-router-dom";
import SidebarData from "./SidebarData";
import Logo from "../Pictures/Logo.png";
import Loginimg from "../Pictures/Loginimg.png";
import Githublogo from "../Pictures/github.png";
import { FaGreaterThan } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdHelp } from "react-icons/md";
import { RiLogoutBoxRFill } from "react-icons/ri";

// Navbar
function Navbar({ darkMode, setDarkMode, firstName }) {
  const [sidebar, setSidebar] = useState(false);
  const [firstname, setfirstname] = useState("");
  const [showprofile, setProfile] = useState(false);
  const profileRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const firstNme = localStorage.getItem("firstName");
    if (firstNme) {
      setfirstname(firstNme);
    }
  }, []);

  const location = useLocation();
  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);
  const toggleSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <nav
        className={`${
          darkMode
            ? "bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white border-b-2 border-b-[#dfe0e1] shadow-lg shadow-gray-800/40"
            : "bg-white text-black border-b-2 border-b-[#dfe0e1] shadow-md "
        } navbar fixed top-0 left-0  right-0 h-16 bg- flex px-3 z-50 justify-between rounded-xs `}
      >
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className=" text-2xl cursor-pointer focus:outline-none"
            aria-label={sidebar ? "Collapse sidebar" : "Expand sidebar"}
          >
            {sidebar ? <MdMenuOpen /> : <MdOutlineMenu />}
          </button>
          <div className="flex items-center">
            <span className="p-1">
              <img src={Logo} alt="" className="w-7 h-7 " />
            </span>
            <Link to="/dashboard">
              <span className="text-blue-500 sm:text-[12px] tablet:text-2xl font-Inter font-bold">
                React Demo V6
              </span>
            </Link>
          </div>
          {/* ligthmode */}
        </div>
        <div className="flex items-center space-x-5  ">
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <MdLightMode className="text-sky-400 w-6 h-6  p-[1px] cursor-pointer " />
            ) : (
              <MdDarkMode className="text-[#1963bf] w-6 h-6  p-[1px] cursor-pointer" />
            )}
          </button>
          <Link
            to=""
            className="p-1"
            onClick={() => {
              setProfile(!showprofile);
            }}
          >
            <img src={Loginimg} alt="" className="w-8 h-8  " />
          </Link>
          {showprofile && (
            <div
              ref={profileRef}
              className={`${
                darkMode
                  ? " text-black bg-white"
                  : "text-slate-100 bg-[rgba(50,50,50,0.8)] "
              } absolute top-18  right-4 sm:w-52 sm:h-64 rounded-xl   tablet:w-52 h p-2 shadow-xl text-black`}
              // onMouseLeave={() => setProfile(false)}
            >
              {/* img div */}
              <div className="flex   space-x-4 pb-2 border-b border-slate-500 items-center">
                <img src={Loginimg} alt="" className="w-10 h-10 rounded-full" />
                <p className="text-[14px] font-Inter ">{firstname}</p>
              </div>
              {/* Link  */}
              <div>
                {/* 1st div */}
                <div className="flex justify-between items-center mt-2 mr-[2px] hover:bg-slate-200 p-1 rounded-md">
                  <div className=" flex items-center space-x-2">
                    <span className="p-[2px] bg-[#e5e5e5] rounded-full">
                      <CgProfile className="w-6 h-6 text-[#535353]" />
                    </span>
                    <Link
                      className={`${
                        darkMode
                          ? "duration-200 transition-all"
                          : "active:text-black duration-200 transition-all"
                      } text-sm font-Roboto`}
                    >
                      Edit Profile
                    </Link>
                  </div>
                  <span>
                    <FaGreaterThan className="text-xs font-normal text-gray-400" />
                  </span>
                </div>
                {/*1st end div */}
                {/* 2nd div */}
                <div className=" flex justify-between items-center mt-2 mr-[2px] hover:bg-slate-200 p-1 rounded-md">
                  <div className="   flex items-center space-x-2">
                    <span className="p-[2px] bg-[#e5e5e5] rounded-full">
                      <IoIosSettings className="w-6 h-6 text-[#535353]" />
                    </span>
                    <Link
                      className={`${
                        darkMode
                          ? "duration-200 transition-all"
                          : "active:text-black duration-200 transition-all"
                      } text-sm font-Roboto`}
                    >
                      Setting & Privacy
                    </Link>
                  </div>
                  <span>
                    <FaGreaterThan className="text-xs font-normal text-gray-400" />
                  </span>
                </div>
                {/* 2nd end div */}
                {/* 3rd div */}
                <div className="flex justify-between items-center mt-2 mr-[2px] hover:bg-slate-200 p-1 rounded-md">
                  <div className="flex items-center space-x-2">
                    <span className="p-[2px] bg-[#e5e5e5] rounded-full">
                      <MdHelp className="w-6 h-6 text-[#535353]  " />
                    </span>
                    <Link
                      className={`${
                        darkMode
                          ? "duration-200 transition-all"
                          : "active:text-black duration-200 transition-all"
                      } text-sm font-Roboto`}
                    >
                      Help & Support
                    </Link>
                  </div>
                  <span>
                    <FaGreaterThan className="text-xs font-normal text-gray-400" />
                  </span>
                </div>
                {/* 3rd end div */}
                {/* 4th div */}
                <div className="flex justify-between items-center mt-2 mr-[2px] hover:bg-slate-200 p-1 rounded-md">
                  <div className="flex items-center space-x-2">
                    <span className="p-[2px] bg-[#e5e5e5] rounded-full">
                      <RiLogoutBoxRFill className="w-6 h-6 text-[#535353]" />
                    </span>
                    <Link
                      to="/login"
                      className={`${
                        darkMode
                          ? "duration-200 transition-all"
                          : "active:text-black duration-200 transition-all"
                      } text-sm font-Roboto`}
                    >
                      Logout
                    </Link>
                  </div>
                  <span>
                    <FaGreaterThan className="text-xs font-normal text-gray-400" />
                  </span>
                </div>
                {/* 4th end div */}
              </div>

              {/* end link */}
            </div>
          )}
          <Link to="https://github.com/muhammadachar435" target="blank">
            {darkMode ? (
              <img
                src={Githublogo}
                alt=""
                className="w-8 h-8 bg-white rounded-full p-[2px] hover:ring-1 hover:ring-white"
              />
            ) : (
              <img
                src={Githublogo}
                alt=""
                className="w-8 h-8 p-[2px] border-1 border-black rounded-full hover:bg-blue-400"
              />
            )}
          </Link>
        </div>
      </nav>

      {/* Sidebar fixed */}
      <div
        className={` ${
          darkMode
            ? "bg-[#1a1a1b] text-white border-r-2  border-r-slate-700  "
            : "bg-white text-black  border-r-2  border-r-slate-300 shadow-md "
        }fixed top-[63px] left-0  h-[1000px]  transition-all duration-300 ease-in-out z-40 flex flex-col rounded`}
        style={{ width: sidebar ? "300px" : "50px" }}
      >
        <ul className="flex flex-col mt-8 space-y-4">
          {SidebarData.map((item, index) => {
            const isActive = location.pathname === item.path;

            return (
              <li key={index} className="w-full">
                <Link
                  to={item.path}
                  className={`flex items-center m-2  hover:transform active:bg-blue-500 active:transition-all active:duration-1000 duration-200 rounded-md py-3 px-4 ${
                    sidebar ? "justify-start" : "justify-center"
                  } ${
                    isActive ? "bg-blue-500 text-white" : "hover:bg-slate-300"
                  }`}
                  onClick={() => setSidebar(false)} // optional: close on menu click
                >
                  <span className="text-xl">{item.icon}</span>
                  {sidebar && (
                    <span className="ml-4 text-lg font-Roboto ">
                      {index === 4 ? (
                        <div className="absolute top-[354px] left-2 ">
                          <p
                            className={`${
                              darkMode ? "text-slate-150" : "text-slate-700"
                            }  text-xs  font-semibold ml-2 font-Inter`}
                          >
                            Market & Sales
                          </p>{" "}
                          <span>
                            <hr className="w-[280px]  text-slate-300" />
                          </span>
                        </div>
                      ) : (
                        ""
                      )}

                      {item.title}
                    </span>
                  )}
                  {index === 3 ? (
                    <>
                      <div className="">
                        <br />
                      </div>
                    </>
                  ) : (
                    <div></div>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
