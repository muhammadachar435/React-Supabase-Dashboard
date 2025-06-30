import React, { useState, useEffect, useRef } from "react";
import {
  MdOutlineMenu,
  MdMenuOpen,
  MdDarkMode,
  MdLightMode,
} from "react-icons/md";
{
  // <MdLightMode />
  /* <MdDarkMode /> */
}
import { Link, useLoaderData, useLocation } from "react-router-dom";
import SidebarData from "./SidebarData";
import Logo from "../Pictures/Logo.png";
import Loginimg from "../Pictures/Loginimg.png";
import Githublogo from "../Pictures/github.png";
import Dashboard from "../Pages/Dashboard";

function Navbar({ darkMode, setDarkMode, email }) {
  const [sidebar, setSidebar] = useState(false);
  const [userEmail, setUserEmail] = useState("");
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
    const email = localStorage.getItem("userEmail");
    if (email) {
      setUserEmail(email);
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
                darkMode ? "text-black bg-slate-300" : "text-black"
              } absolute top-18 rounded-lg right-4 sm:w-40 sm:h-18  tablet:w-48 h-20 p-1 shadow-lg text-black`}
              style={{
                backgroundImage:
                  "linear-gradient(to right, #74ebd5 0%, #9face6 100%);",
              }}
              onMouseLeave={() => setProfile(false)}
            >
              <ul className="font-Inter relative p-1 ">
                <li className="  text-xs text-sans sm:flex tablet:hidden ">
                  {userEmail.slice(0, 20)}
                </li>
                <li className="  text-xs text-sans sm:flex tablet:hidden ">
                  {userEmail.slice(20, 35)}
                </li>
                <li className="  text-xs text-sans hidden tablet:flex">
                  {userEmail.slice(0, 25)}
                </li>
                <li className=" text-xs text-sans border-b border-dashed hidden tablet:flex">
                  {userEmail.slice(25, 35)}
                </li>

                <li className="sm:mt-[4px] sm:mx-10 tablet:mt-3 ">
                  <Link
                    to="/Login"
                    className="sm:text-sm tablet:text-base  hover:bg-gray-300 text-gray-700 mx-auto px-3 py-1 rounded-lg shadow-sm transition duration-300 ease-in-out"
                    style={{
                      backgroundImage:
                        "linear-gradient(180deg, #2af598 0%, #009efd 100%)",
                    }}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
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
            console.log(item, index);
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
