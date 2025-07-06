import React from "react";
import { img1, img2, img3, img4, img5,Doughjsx,Radarjsx,Barchart,HorizontalBarChart,Salesprice  } from "../Charts/Imagesdashboard";
import { redcircle,bluecircle,greencircle,orangecircle,fb,google,twitter,likedin,Checkform } from "../Charts/Imagesdashboard";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

// Function Dashboard
function Dashboard({ darkMode }) {

  return (
    <>
      <div className="">
        <p className="mt-22 sm:ml-[60px] font-Roboto sm:text-xl tablet:text-3xl  desktop:text-3xl tablet:mb-6 biglap:text-5xl font-bold">
          Dashboard
        </p>
        <div className="sm:mt-10 tablet:grid tablet:grid-cols-2 tablet:gap-x-4 tablet:w-[700px] tablet:mt-6 tablet:ml-[54px] ipad:w-[710px] ipad:mt-[20] ipad:ml-auto ipad:mr-auto desktop:w-[900px] desktop:h-[390px] desktop:ml-auto desktop:mr-auto xll:w-[1150px] xll:h-[400px] xll:gap-x-36 mylap:w-[1300px] biglap:w-[2000px] biglap:h-[550px] biglap:p-5 ">
          <div>
            {darkMode ? (
              <div className=" bg-[#1e1e1e] text-white rounded-lg shadow-xl p-1 sm:ml-[50px] mymob:ml-[56px] sm:w-[262px] sm:h-[260px] mymob:w-[300px] mymob:h-[330px]  myiphone:ml-14 myiphone:mx-auto myiphone:w-[350px] tablet:mt-0 tablet:ml-0 tablet:w-[330px] tablet:h-[330px]  desktop:w-[450px] desktop:h-[350px] desktop:ml-0 xll:w-[500px] xll:h-[390px] mylap:mx-4 mylap:w-[550px]  biglap:w-[680px] biglap:h-[520px]  ">
                <p className="text-white text-xl ml-1 font-Inter xll:text-[22px] mylap:text-3xl font-bold  desktop:p-1">
                  Conversion rates
                </p>
                <p className="text-base font-sans ml-1 xll:ml-2 mylap:text-base text-slate-300">
                  (+43%) than last year
                </p>
                <HorizontalBarChart darkMode={darkMode} />
              </div>
            ) : (
              <div className="p-1 sm:ml-[50px] mymob:ml-[56px] bg-white sm:w-[262px] sm:h-[260px] mymob:w-[300px] mymob:h-[330px]  myiphone:ml-14 myiphone:mx-auto myiphone:w-[350px] tablet:mt-0 tablet:ml-0 tablet:w-[330px] tablet:h-[330px]  desktop:w-[450px] desktop:h-[350px] desktop:ml-0 xll:w-[500px] xll:h-[390px] mylap:mx-4 mylap:w-[550px]  biglap:w-[680px] biglap:h-[520px]  rounded-lg shadow-lg">
                <div className="p-1 ">
                  <p className="text-xl xll:text-[22px] ml-1 font-Inter mylap:text-3xl biglap:text-4xl  text-black ">
                    Conversion rates
                  </p>
                  <p className="text-base font-sans ml-1 xll:ml-2 mylap:text-base biglap:text-xl text-slate-500">
                    (+43%) than last year
                  </p>
                </div>
                <HorizontalBarChart darkMode={darkMode} />
              </div>
            )}
          </div>

          <div
            className={`${
              darkMode
                ? "bg-[#1e1e1e] text-white rounded-lg shadow-xl p-1 "
                : "bg-white rounded-lg shadow-lg "
            }mt-10 sm:p-1 sm:ml-[50px] sm:w-[262px] sm:h-[380px]  mymob:ml-[56px] mymob:h-[380px] mymob:w-[300px] myiphone:ml-14 myiphone:w-[340px] myiphone:h-[380px]  my-auto  rounded-lg shadow-lg   tablet:w-[330px] tablet:mt-0 tablet:h-[370px]  tablet:ml-0 desktop:w-[430px] desktop:h-[380px]  xll:w-[500px] xll:h-[390px] mylap:w-[550px]  biglap:w-[750px] biglap:h-[520px]   `}
          >
            <div className="tablet:p-1">
              <div className="p-1">
                <p
                  className={`${
                    darkMode ? " text-white " : "text-black "
                  }text-xl xll:text-[22px] ml-1 font-Inter mylap:text-3xl biglap:text-4xl  text-black `}
                >
                  Order Timeline
                </p>
              </div>

              <div className="  sm:mt-6 sm:w-[240px] sm:h-[300px] mymob:w-[290px] mymob:h-[300px] myiphone:w-[330px] tablet:mt-5 tablet:w-[320px] desktop:w-[400px] desktop:mt-6 xll:mt-6 xll:w-[440px] mypc:mt-4 mypc:w-[470px] biglap:mt-14 biglap:w-[700px]   mx-auto">
                {/* 1st box */}
                <div className=" px-2 sm:h-16  biglap:h-[70px] ">
                  <div className="flex items-center space-x-2 ">
                    <div>
                      <img
                        src={bluecircle}
                        alt=""
                        className="w-[10px] h-[10px]"
                      />
                    </div>
                    <div className="">
                      <p
                        className={`${
                          darkMode
                            ? " text-white text-sm font-sans"
                            : "text-gray-900 text-sm font-sans"
                        }`}
                      >
                        1983, orders, $4220
                      </p>
                    </div>
                  </div>
                  <div className=" flex  space-x-[13px]">
                    <div className="w-[2px] h-9 rounded-md bg-slate-300 ml-1"></div>
                    <div className="w-44 h-4">
                      <p className="text-xs text-[#b6b6b6] font-sans">
                        08 Nov 2023 12:00 am
                      </p>
                    </div>
                  </div>
                </div>
                {/* end 1st */}

                {/* 2nd box */}
                <div className=" px-2 h-16 biglap:h-[70px]">
                  <div className="flex items-center space-x-2 ">
                    <div>
                      <img
                        src={greencircle}
                        alt=""
                        className="w-[10px] h-[10px]"
                      />
                    </div>
                    <div className="">
                      <p
                        className={`${
                          darkMode
                            ? " text-white text-sm font-sans"
                            : "text-gray-900 text-sm font-sans"
                        }`}
                      >
                        12 Invoices have been paid
                      </p>
                    </div>
                  </div>
                  <div className=" flex  space-x-[13px]">
                    <div className="w-[2px] h-9 rounded-md bg-slate-300 ml-1"></div>
                    <div className=" w-44 h-4">
                      <p className="text-xs text-[#b6b6b6] font-sans">
                        09 Apr 2024 12:00 am
                      </p>
                    </div>
                  </div>
                </div>
                {/* end 2nd */}

                {/* 3rd box */}
                <div className=" px-2 h-16  biglap:h-[70px]">
                  <div className="flex items-center space-x-2 ">
                    <div>
                      <img
                        src={bluecircle}
                        alt=""
                        className="w-[10px] h-[10px]"
                      />
                    </div>
                    <div className="">
                      <p
                        className={`${
                          darkMode
                            ? " text-white text-sm font-sans"
                            : "text-gray-900 text-sm font-sans"
                        }`}
                      >
                        Order #37745 from September
                      </p>
                    </div>
                  </div>
                  <div className=" flex  space-x-[13px]">
                    <div className="w-[2px] h-9 rounded-md bg-slate-300 ml-1"></div>
                    <div className=" w-44 h-4">
                      <p className="text-xs text-[#b6b6b6] font-sans">
                        12 Sep 2023 12:00 am
                      </p>
                    </div>
                  </div>
                </div>
                {/* end 3rd */}

                {/* 4th box */}
                <div className=" px-2 h-16  biglap:h-[70px]">
                  <div className="flex items-center space-x-2 ">
                    <div>
                      <img
                        src={orangecircle}
                        alt=""
                        className="w-[10px] h-[10px]"
                      />
                    </div>
                    <div className="">
                      <p
                        className={`${
                          darkMode
                            ? " text-white text-sm font-sans"
                            : "text-gray-900 text-sm font-sans"
                        }`}
                      >
                        New order placed #XF-2356
                      </p>
                    </div>
                  </div>
                  <div className=" flex  space-x-[13px]">
                    <div className="w-[2px] h-9 rounded-md bg-slate-300 ml-1"></div>
                    <div className="w-44 h-4">
                      <p className="text-xs text-[#b6b6b6] font-sans">
                        01 Jan 2024 12:00 am
                      </p>
                    </div>
                  </div>
                </div>
                {/* end 4th */}

                {/* 5th box */}
                <div className=" px-2 h-16  biglap:h-[70px]">
                  <div className="flex items-center space-x-2 ">
                    <div>
                      <img
                        src={redcircle}
                        alt=""
                        className="w-[10px] h-[10px]"
                      />
                    </div>
                    <div className="">
                      <p
                        className={`${
                          darkMode
                            ? " text-white text-sm font-sans"
                            : "text-gray-900 text-sm font-sans"
                        }`}
                      >
                        New order placed #XF-2346
                      </p>
                    </div>
                  </div>

                  <div className=" flex  space-x-[13px]">
                    <div className="w-[2px] h-9 rounded-md ml-1"></div>
                    <div className=" w-44 h-4">
                      <p className="text-xs text-[#b6b6b6] font-sans">
                        {" "}
                        23 Apr 2024 12:00 am
                      </p>
                    </div>
                  </div>
                </div>
                {/* end 5th*/}
              </div>
              {/* box border div */}
              {/* end box */}
            </div>
          </div>
        </div>

        {/* salesprice component */}
        <Salesprice darkMode={darkMode} className="" />
        {/* end salesprice */}

        {/* radar */}
        <div className=" sm:mt-10 tablet:grid tablet:grid-cols-2 tablet:gap-x-4 tablet:w-[700px] tablet:h-[430px] tablet:mt-6 tablet:ml-[54px] ipad:w-[710px] ipad:mt-[20] ipad:ml-auto ipad:mr-auto desktop:w-[900px] desktop:h-[450px] desktop:ml-auto desktop:mr-auto xll:w-[1150px] xll:h-[460px] xll:gap-x-36 mylap:w-[1300px] biglap:w-[2000px] biglap:h-[550px] biglap:p-5 ">
          <div>
            {darkMode ? (
              <div className="bg-[#1e1e1e] text-white rounded-lg shadow-xl p-1 sm:ml-[50px] mymob:ml-[56px] sm:w-[262px] sm:h-[310px] mymob:w-[300px] mymob:h-[310px]  myiphone:ml-14 myiphone:mx-auto myiphone:w-[350px] tablet:mt-0 tablet:ml-0 tablet:w-[330px] tablet:h-[410px]  desktop:w-[450px] desktop:h-[440px] desktop:ml-0 xll:w-[500px] xll:h-[450px] mylap:mx-4 mylap:w-[550px]   biglap:w-[680px] biglap:h-[520px]  ">
                <p className="text-xl text-white  ml-1 font-Inter xll:text-[22px] mylap:text-3xldesktop:p-1">
                  Current Subject
                </p>

                <Radarjsx darkMode={darkMode} />
              </div>
            ) : (
              <div className="p-1 sm:ml-[50px] mymob:ml-[56px] bg-white sm:w-[262px] sm:h-[310px] mymob:w-[300px] mymob:h-[310px]  myiphone:ml-14 myiphone:mx-auto myiphone:w-[350px] tablet:mt-0 tablet:ml-0 tablet:w-[330px] tablet:h-[410px]  desktop:w-[450px] desktop:h-[440px] desktop:ml-0 xll:w-[500px] xll:h-[450px] mylap:mx-4 mylap:w-[550px]   biglap:w-[680px] biglap:h-[520px]  rounded-lg shadow-lg">
                <div className="p-1 ">
                  <p className="text-xl xll:text-[22px] ml-1 font-Inter mylap:text-3xl biglap:text-4xl  text-black ">
                    Current Subject
                  </p>
                </div>
                <Radarjsx darkMode={darkMode} />
              </div>
            )}
          </div>
          {/* radar end */}
          {/* compnany */}

          <div className="sm:mt-6 tablet:mt-0 ">
            {darkMode ? (
              <div className="bg-[#1e1e1e] text-white rounded-lg shadow-xl p-1 sm:ml-[50px] mymob:ml-[56px] sm:w-[262px] sm:h-[380px] mymob:w-[300px] mymob:h-[380px]  myiphone:ml-14 myiphone:mx-auto myiphone:w-[350px] tablet:mt-0 tablet:ml-0 tablet:w-[330px] tablet:h-[380px]  desktop:w-[430px] desktop:h-[350px] desktop:ml-0 xll:w-[500px] xll:h-[450px] mylap:mx-4 mylap:w-[550px]  biglap:w-[750px] biglap:h-[520px] ">
                <p className="text-xl text-white  ml-1 font-Inter xll:text-[22px] mylap:text-3xl   desktop:p-1">
                  Website visits
                </p>
                <p className="text-base font-sans ml-1 xll:ml-2 mylap:text-base text-slate-200">
                  (+43%) than last year
                </p>

                <Barchart darkMode={darkMode} />
              </div>
            ) : (
              <div className="p-1 sm:ml-[50px] mymob:ml-[56px] bg-white sm:w-[262px] sm:h-[380px] mymob:w-[300px] mymob:h-[380px]  myiphone:ml-14 myiphone:mx-auto myiphone:w-[350px] tablet:mt-0 tablet:ml-0 tablet:w-[330px] tablet:h-[410px]  desktop:w-[430px] desktop:h-[440px] desktop:ml-0 xll:w-[500px] xll:h-[450px] mylap:mx-4 mylap:w-[550px]  biglap:w-[750px] biglap:h-[520px]  rounded-lg shadow-lg">
                <div className="p-1 ">
                  <p className="text-xl xll:text-[22px] ml-1 font-Inter mylap:text-3xl biglap:text-4xl font-bold text-black ">
                    Website visits
                  </p>
                  <p className="text-base font-sans ml-1 xll:ml-2 mylap:text-base text-slate-700">
                    (+43%) than last year
                  </p>
                </div>
                <Barchart darkMode={darkMode} />
              </div>
            )}
          </div>
        </div>
        {/* end radar part */}

        {/* img question part */}
        <div className="sm:mt-10  tablet:grid tablet:grid-cols-2 tablet:gap-x-4  tablet:w-[700px] tablet:h-[400px] tablet:mt-6 tablet:ml-[54px] ipad:w-[710px] ipad:mt-[20] ipad:ml-auto ipad:mr-auto desktop:w-[900px] desktop:h-[365px]  desktop:ml-auto desktop:mr-auto xll:w-[1150px] xll:h-[410px] xll:gap-x-36 mylap:w-[1300px] biglap:w-[2000px] biglap:h-[550px] biglap:p-5  ">
          <div>
            {darkMode ? (
              <div className="bg-[#1e1e1e] text-white rounded-lg shadow-xl p-1 sm:ml-[50px] mymob:ml-[56px] sm:w-[262px] sm:h-[390px] mymob:w-[300px] mymob:h-[390px]  myiphone:ml-14 myiphone:mx-auto myiphone:w-[350px] tablet:mt-0 tablet:ml-0 tablet:w-[330px] tablet:h-[390px]  desktop:w-[450px] desktop:h-[360px] desktop:ml-0 xll:w-[500px] xll:h-[390px] mylap:mx-4 mylap:w-[550px]   biglap:w-[680px] biglap:h-[520px]  ">
                <div className="">
                  <p className="text-xl xll:text-[22px] ml-1 font-Inter mylap:text-3xl biglap:text-4xl text-white biglap:mb-4 ">
                    News
                  </p>
                </div>

                <div className="border-b border-dashed border-slate-400 pb-1 flex space-x-2 biglap:mt-2">
                  <div className="w-[80px] p-1 mt-1">
                    <img
                      src={img1}
                      alt="Profile"
                      className="w-[60px] rounded-sm"
                    />
                  </div>
                  <div>
                    <span
                      className={`text-[10px] font-Roboto ${
                        darkMode ? "text-white" : "text-black"
                      }`}
                    >
                      Whiteboard Templates By Industry Leaders
                    </span>
                    <p
                      className={` ${
                        darkMode ? "text-slate-200" : "text-slate-500"
                      }  text-xs `}
                    >
                      The Nagasaki Lander is the trademarked name of several
                      series.
                    </p>
                  </div>
                </div>
                {/* end box1  div */}
                {/* start box 2 */}
                <div className="border-b border-dashed border-slate-400 pb-1 flex space-x-2 biglap:mt-2 ">
                  <div className="w-[80px] p-1 mt-1">
                    <img
                      src={img2}
                      alt="Profile"
                      className="w-[60px] rounded-sm"
                    />
                  </div>
                  <div>
                    <span
                      className={`text-[10px] font-Roboto ${
                        darkMode ? "text-white" : "text-black"
                      }`}
                    >
                      Designify Agency Landing Page Design
                    </span>
                    <p
                      className={` ${
                        darkMode ? "text-slate-200" : "text-slate-500"
                      }  text-xs `}
                    >
                      The Nagasaki Lander is the trademarked name of several
                      series.
                    </p>
                  </div>
                </div>
                {/* end box 2 */}
                <div className="border-b border-dashed border-slate-400 pb-1 flex space-x-2 biglap:mt-2">
                  <div className="w-[80px] p-1 mt-1">
                    <img
                      src={img3}
                      alt="Profile"
                      className="w-[60px] rounded-sm"
                    />
                  </div>
                  <div>
                    <span
                      className={`text-[10px] font-Roboto ${
                        darkMode ? "text-white" : "text-black"
                      }`}
                    >
                      Whiteboard Templates By Industry Leaders
                    </span>
                    <p
                      className={` ${
                        darkMode ? "text-slate-200" : "text-slate-500"
                      }  text-xs `}
                    >
                      The Nagasaki Lander is the trademarked name of several
                      series.
                    </p>
                  </div>
                </div>
                {/* end box 3 */}

                <div className="border-b border-dashed border-slate-400 pb-1 flex space-x-2 biglap:mt-2">
                  <div className="w-[80px] p-1 mt-1">
                    <img
                      src={img4}
                      alt="Profile"
                      className="w-[60px] rounded-sm"
                    />
                  </div>
                  <div>
                    <span
                      className={`text-[10px] font-Roboto ${
                        darkMode ? "text-white" : "text-black"
                      }`}
                    >
                      Whiteboard Templates By Industry Leaders
                    </span>
                    <p
                      className={` ${
                        darkMode ? "text-slate-200" : "text-slate-500"
                      }  text-xs `}
                    >
                      The Nagasaki Lander is the trademarked name of several
                      series.
                    </p>
                  </div>
                </div>
                {/* end box 4 */}
                <div className="border-b border-dashed border-slate-400 pb-1 flex space-x-2 biglap:mt-2 ">
                  <div className="w-[80px] p-1 mt-1">
                    <img
                      src={img5}
                      alt="Profile"
                      className="w-[60px] rounded-sm"
                    />
                  </div>
                  <div>
                    <span
                      className={`text-[10px] font-Roboto ${
                        darkMode ? "text-white" : "text-black"
                      }`}
                    >
                      Fresh Prince
                    </span>
                    <p
                      className={` ${
                        darkMode ? "text-slate-200" : "text-slate-500"
                      }  text-xs `}
                    >
                      New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM.
                    </p>
                  </div>
                </div>
                {/* end box 5 */}
                <div className=" mt-2 flex justify-end mr-1">
                  <div>
                    <Link
                      className={` ${
                        darkMode
                          ? "text-white hover:bg-slate-300"
                          : "text-black hover:bg-slate-400"
                      } font-sans text-black flex items-center hover:bg-slate-500 hover:transition-all hover:rounded-lg p-1 biglap:mt-20`}
                    >
                      View All <IoIosArrowForward />
                    </Link>
                  </div>
                </div>
                {/* Link end */}
              </div>
            ) : (
              <div className="p-1 sm:ml-[50px] mymob:ml-[56px] bg-white sm:w-[262px] sm:h-[390px] mymob:w-[300px] mymob:h-[390px]  myiphone:ml-14 myiphone:mx-auto myiphone:w-[350px] tablet:mt-0 tablet:ml-0 tablet:w-[330px] tablet:h-[390px]  desktop:w-[450px] desktop:h-[360px] desktop:ml-0 xll:w-[500px] xll:h-[390px] mylap:mx-4 mylap:w-[550px]   biglap:w-[680px] biglap:h-[520px]  rounded-lg shadow-lg">
                <div className="">
                  <p className="text-xl xll:text-[22px] ml-1 font-Inter mylap:text-3xl biglap:text-4xl  text-black biglap:mb-4 ">
                    News
                  </p>
                </div>

                <div className="xll:mt-2 border-b border-dashed border-slate-400 pb-1 flex space-x-2 biglap:mt-2">
                  <div className="w-[80px] p-1 mt-1">
                    <img
                      src={img1}
                      alt="Profile"
                      className="w-[60px] rounded-sm"
                    />
                  </div>
                  <div>
                    <span
                      className={`text-[10px] font-Roboto ${
                        darkMode ? "text-white" : "text-black"
                      }`}
                    >
                      Whiteboard Templates By Industry Leaders
                    </span>
                    <p className="text-xs text-slate-500">
                      The Nagasaki Lander is the trademarked name of several
                      series.
                    </p>
                  </div>
                </div>
                {/* end box1  div */}
                {/* start box 2 */}
                <div className="border-b border-dashed border-slate-400 pb-1 flex space-x-2 biglap:mt-2 ">
                  <div className="w-[80px] p-1 mt-1">
                    <img
                      src={img2}
                      alt="Profile"
                      className="w-[60px] rounded-sm"
                    />
                  </div>
                  <div>
                    <span
                      className={`text-[10px] font-Roboto ${
                        darkMode ? "text-white" : "text-black"
                      }`}
                    >
                      Designify Agency Landing Page Design
                    </span>
                    <p className="text-xs text-slate-500">
                      The Nagasaki Lander is the trademarked name of several
                      series.
                    </p>
                  </div>
                </div>
                {/* end box 2 */}
                <div className="border-b border-dashed border-slate-400 pb-1 flex space-x-2 biglap:mt-2">
                  <div className="w-[80px] p-1 mt-1">
                    <img
                      src={img3}
                      alt="Profile"
                      className="w-[60px] rounded-sm"
                    />
                  </div>
                  <div>
                    <span
                      className={`text-[10px] font-Roboto ${
                        darkMode ? "text-white" : "text-black"
                      }`}
                    >
                      Whiteboard Templates By Industry Leaders
                    </span>
                    <p className="text-xs text-slate-500">
                      The Nagasaki Lander is the trademarked name of several
                      series.
                    </p>
                  </div>
                </div>
                {/* end box 3 */}

                <div className="border-b border-dashed border-slate-400 pb-1 flex space-x-2 biglap:mt-2">
                  <div className="w-[80px] p-1 mt-1">
                    <img
                      src={img4}
                      alt="Profile"
                      className="w-[60px] rounded-sm"
                    />
                  </div>
                  <div>
                    <span
                      className={`text-[10px] font-Roboto ${
                        darkMode ? "text-white" : "text-black"
                      }`}
                    >
                      Whiteboard Templates By Industry Leaders
                    </span>
                    <p className="text-xs text-slate-500">
                      The Nagasaki Lander is the trademarked name of several
                      series.
                    </p>
                  </div>
                </div>
                {/* end box 4 */}
                <div className="border-b border-dashed border-slate-400 pb-1 flex space-x-2 biglap:mt-2 ">
                  <div className="w-[80px] p-1 mt-1">
                    <img
                      src={img5}
                      alt="Profile"
                      className="w-[60px] rounded-sm"
                    />
                  </div>
                  <div>
                    <span
                      className={`text-[10px] font-Roboto ${
                        darkMode ? "text-white" : "text-black"
                      }`}
                    >
                      Fresh Prince
                    </span>
                    <p className="text-xs text-slate-500">
                      New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM.
                    </p>
                  </div>
                </div>
                {/* end box 5 */}
                <div className=" mt-2 flex justify-end mr-1">
                  <div>
                    <Link className="font-sans flex items-center hover:bg-slate-300 hover:transition-all hover:rounded-lg p-1 biglap:mt-20">
                      View All <IoIosArrowForward />
                    </Link>
                  </div>
                </div>
                {/* link end */}
                {/*  */}
              </div>
            )}
          </div>
          {/* radar end */}
          {/* compnany */}

          <div className="sm:mt-6 tablet:mt-0">
            {darkMode ? (
              <div className="p-1 bg-[#1e1e1e] text-white rounded-lg shadow-xl  sm:ml-[50px] mymob:ml-[56px]  sm:w-[262px] sm:h-[310px] mymob:w-[300px] mymob:h-[330px]  myiphone:ml-14 myiphone:mx-auto myiphone:w-[350px] tablet:mt-0 tablet:ml-0 tablet:w-[330px] tablet:h-[390px]  desktop:w-[430px] desktop:h-[360px] desktop:ml-0 xll:w-[500px] xll:h-[390px] mylap:mx-4 mylap:w-[550px]  biglap:w-[750px] biglap:h-[520px]  ">
                <p className="text-xl  ml-1 font-Inter xll:text-[22px] mylap:text-3xl  text-white desktop:p-1">
                  Current visits
                </p>
                <Doughjsx darkMode={darkMode} />
              </div>
            ) : (
              <div className="p-1   sm:ml-[50px] mymob:ml-[56px] bg-white sm:w-[262px] sm:h-[310px] mymob:w-[300px] mymob:h-[330px]  myiphone:ml-14 myiphone:mx-auto myiphone:w-[350px] tablet:mt-0 tablet:ml-0 tablet:w-[330px] tablet:h-[390px]  desktop:w-[430px] desktop:h-[360px] desktop:ml-0 xll:w-[500px] xll:h-[390px] mylap:mx-4 mylap:w-[550px]  biglap:w-[750px] biglap:h-[520px]  rounded-lg shadow-lg ">
                <div className="p-1 ">
                  <p className="text-xl xll:text-[22px] ml-1 font-Inter mylap:text-3xl biglap:text-4xl  text-black ">
                    Current visits
                  </p>
                </div>
                <Doughjsx darkMode={darkMode} />
              </div>
            )}
          </div>
        </div>

        {/* part 3 */}

        {/* img question part */}
        <div className="sm:mt-10   tablet:grid tablet:grid-cols-2 tablet:gap-x-4 tablet:w-[700px] tablet:h-[310px] tablet:mt-6 tablet:ml-[54px] ipad:w-[710px] ipad:mt-[20] ipad:ml-auto ipad:mr-auto desktop:w-[900px] desktop:h-[360px]  desktop:ml-auto desktop:mr-auto xll:w-[1150px] xll:h-[410px] xll:gap-x-36 mylap:w-[1300px] biglap:w-[2000px]   biglap:h-[550px] biglap:p-5  ">
          <div className="mx-auto  ">
            {darkMode ? (
              <div className="p-1 bg-[#1e1e1e] text-white rounded-lg shadow-xl sm:ml-[50px] mymob:ml-[56px] sm:w-[262px] sm:h-[280px] mymob:w-[300px] mymob:h-[300px]  myiphone:ml-14 myiphone:mx-auto myiphone:w-[350px] tablet:mt-0 tablet:ml-0 tablet:w-[300px] tablet:h-[300px]  desktop:w-[450px] desktop:h-[350px] desktop:ml-0 xll:w-[500px] xll:h-[390px] mylap:mx-4 mylap:w-[550px]  biglap:w-[680px] biglap:mr-48  biglap:ml-0 biglap:mx-0  biglap:h-[520px] ">
                <div className="biglap:mb-20">
                  <p className="text-xl xll:text-[22px] ml-1 font-Inter mylap:text-3xl biglap:text-4xl text-white ">
                    Traffic by site
                  </p>
                </div>

                <div className="w-fit mx-auto grid grid-cols-2 place-items-center  gap-x-4 gap-y-10 mt-5 desktop:gap-x-10">
                  <div className="border border-solid border-slate-200 pb-1 sm:w-[100px]  biglap:mt-2 desktop:w-[140px]">
                    <div className="w-[30px] desktop:w-[50px] p-1 mt-1 mx-auto">
                      <img
                        src={fb}
                        alt="Profile"
                        className="w-[30px] desktop:w-[50px] rounded-sm"
                      />
                    </div>
                    <div
                      className={` ${
                        darkMode ? "text-black" : "text-slate-300"
                      } text-center desktop:text-xl`}
                    >
                      <span
                        className={`text-sm font-Roboto  ${
                          darkMode ? "text-slate-200" : "text-slate-300"
                        }`}
                      >
                        323.23k
                      </span>
                      <p
                        className={` ${
                          darkMode ? "text-slate-300" : "text-slate-700"
                        } text-base desktop:text-xl font-Inter`}
                      >
                        Facebook
                      </p>
                    </div>
                  </div>
                  {/* end box1  div */}

                  {/* start box 2 */}
                  <div className="border border-solid border-slate-200 pb-1 sm:w-[100px]  biglap:mt-2 desktop:w-[140px]">
                    <div className="w-[30px] desktop:w-[50px] p-1 mt-1 mx-auto">
                      <img
                        src={google}
                        alt="Profile"
                        className="w-[30px] desktop:w-[50px] rounded-sm"
                      />
                    </div>
                    <div className="text-center desktop:text-xl">
                      <span
                        className={`text-sm font-Roboto ${
                          darkMode ? "text-slate-200" : "text-slate-300"
                        }`}
                      >
                        341.21k
                      </span>
                      <p
                        className={` ${
                          darkMode ? "text-slate-200" : "text-slate-300"
                        } text-base desktop:text-xl font-Inter`}
                      >
                        Google
                      </p>
                    </div>
                  </div>
                  {/* end box 2 */}
                  <div className="border border-solid border-slate-200 pb-1 sm:w-[100px]  biglap:mt-2 desktop:w-[140px]">
                    <div className="w-[30px] desktop:w-[50px] p-1 mt-1 mx-auto">
                      <img
                        src={likedin}
                        alt="Profile"
                        className="w-[30px] desktop:w-[50px] rounded-sm"
                      />
                    </div>
                    <div className=" text-center desktop:text-xl">
                      <span
                        className={`text-sm font-Roboto ${
                          darkMode ? "text-slate-200" : "text-slate-300"
                        }`}
                      >
                        411.21k
                      </span>
                      <p
                        className={` ${
                          darkMode ? "text-slate-200" : "text-slate-300"
                        } text-base desktop:text-xl font-Inter`}
                      >
                        Linkedin
                      </p>
                    </div>
                  </div>
                  {/* end box 3 */}

                  <div className="border border-solid border-slate-200 pb-1 sm:w-[100px]  biglap:mt-2 desktop:w-[140px]">
                    <div className="w-[30px] desktop:w-[50px] p-1 mt-1 mx-auto">
                      <img
                        src={twitter}
                        alt="Profile"
                        className="w-[30px] desktop:w-[50px] rounded-sm"
                      />
                    </div>
                    <div className="text-center desktop:text-xl">
                      <span
                        className={`text-sm font-Roboto ${
                          darkMode ? "text-slate-200" : "text-slate-300"
                        }`}
                      >
                        443.23k
                      </span>
                      <p
                        className={` ${
                          darkMode ? "text-slate-200" : "text-slate-300"
                        } text-base desktop:text-xl font-Inter`}
                      >
                        Twitter
                      </p>
                    </div>
                  </div>
                  {/* end box 4 */}
                </div>
              </div>
            ) : (
              <div className="p-1 sm:ml-[50px] mymob:ml-[56px] bg-white sm:w-[262px] sm:h-[280px] mymob:w-[300px] mymob:h-[300px]  myiphone:ml-14 myiphone:mx-auto myiphone:w-[350px] tablet:mt-0 tablet:ml-0 tablet:w-[330px] tablet:h-[320px]  desktop:w-[450px] desktop:h-[350px] desktop:ml-0 xll:w-[500px] xll:h-[390px]  mylap:w-[550px]  biglap:w-[700px] biglap:h-[520px] biglap:mr-48 rounded-lg shadow-lg">
                <div className="biglap:mb-20">
                  <p className="text-xl xll:text-[22px] ml-1 font-Inter mylap:text-3xl biglap:text-4xl  text-black biglap:mb-4  desktop:m-1 ">
                    Traffic by site
                  </p>
                </div>

                <div className="w-fit mx-auto grid grid-cols-2 place-items-center  gap-x-4 gap-y-10 mt-5 desktop:gap-x-10">
                  <div className="border border-solid border-slate-200 pb-1 sm:w-[100px]  biglap:mt-2 desktop:w-[140px]">
                    <div className="w-[30px] desktop:w-[50px] p-1 mt-1 mx-auto">
                      <img
                        src={fb}
                        alt="Profile"
                        className="w-[30px] desktop:w-[50px] rounded-sm"
                      />
                    </div>
                    <div className="text-center desktop:text-xl">
                      <span
                        className={`text-sm font-Roboto desktop:text-base  ${
                          darkMode ? "text-white" : "text-black"
                        }`}
                      >
                        323.23k
                      </span>
                      <p className="text-base text-slate-500 desktop:text-xl font-Inter">
                        Facebook
                      </p>
                    </div>
                  </div>
                  {/* end box1  div */}

                  {/* start box 2 */}
                  <div className="border border-solid border-slate-200 pb-1 sm:w-[100px]  biglap:mt-2 desktop:w-[140px] ">
                    <div className="w-[30px] desktop:w-[50px] p-1 mt-1 mx-auto">
                      <img
                        src={google}
                        alt="Profile"
                        className="w-[30px] desktop:w-[50px] rounded-sm"
                      />
                    </div>
                    <div className="text-center desktop:text-xl">
                      <span
                        className={`text-sm font-Roboto ${
                          darkMode ? "text-white" : "text-black"
                        }`}
                      >
                        341.21k
                      </span>
                      <p className="text-base text-slate-500 desktop:text-xl font-Inter">
                        Google
                      </p>
                    </div>
                  </div>
                  {/* end box 2 */}
                  <div className="border border-solid border-slate-200 pb-1 sm:w-[100px]  biglap:mt-2 desktop:w-[140px]">
                    <div className="w-[30px] desktop:w-[50px] p-1 mt-1 mx-auto">
                      <img
                        src={likedin}
                        alt="Profile"
                        className="w-[30px] desktop:w-[50px] rounded-sm"
                      />
                    </div>
                    <div className=" text-center desktop:text-xl">
                      <span
                        className={`text-sm font-Roboto ${
                          darkMode ? "text-white" : "text-black"
                        }`}
                      >
                        411.21k
                      </span>
                      <p className="text-base text-slate-500 desktop:text-xl font-Inter">
                        Linkedin
                      </p>
                    </div>
                  </div>
                  {/* end box 3 */}

                  <div className="border border-solid border-slate-200 pb-1 sm:w-[100px]  biglap:mt-2 desktop:w-[140px]">
                    <div className="w-[30px] desktop:w-[50px] p-1 mt-1 mx-auto">
                      <img
                        src={twitter}
                        alt="Profile"
                        className="w-[30px] desktop:w-[50px] rounded-sm"
                      />
                    </div>
                    <div className="text-center desktop:text-xl">
                      <span
                        className={`text-sm font-Roboto ${
                          darkMode ? "text-white" : "text-black"
                        }`}
                      >
                        443.23k
                      </span>
                      <p className="text-base text-slate-500 desktop:text-xl font-Inter">
                        Twitter
                      </p>
                    </div>
                  </div>
                  {/* end box 4 */}
                </div>
                {/*  */}
              </div>
            )}
          </div>
          {/* radar end */}
          {/* compnany */}

          <div className="sm:mt-6 tablet:mt-0">
            {darkMode ? (
              <div className="p-1  bg-[#1e1e1e] text-white rounded-lg shadow-xl sm:ml-[50px] mymob:ml-[56px] sm:w-[262px] sm:h-[350px] mymob:w-[300px] mymob:h-[300px]  myiphone:ml-14 myiphone:mx-auto myiphone:w-[350px] tablet:mt-0 tablet:ml-0 tablet:w-[330px] tablet:h-[300px]  desktop:w-[430px] desktop:h-[350px] desktop:ml-0 xll:w-[500px] xll:h-[390px] mylap:mx-4 mylap:w-[550px]  biglap:w-[750px] biglap:h-[520px]  ">
                <div className="p-1  ">
                  <p className="text-xl  ml-1 font-Inter xll:text-[22px] mylap:text-3xl  text-white desktop:p-1">
                    Tasks
                  </p>
                </div>
                <Checkform />
              </div>
            ) : (
              <div
                className={` ${
                  darkMode ? "text-slate-900  " : "text-black"
                } p-1   sm:ml-[50px] mymob:ml-[56px] bg-white sm:w-[262px] sm:h-[310px] mymob:w-[300px] mymob:h-[330px]  myiphone:ml-14 myiphone:mx-auto myiphone:w-[350px] tablet:mt-0 tablet:ml-0 tablet:w-[330px] tablet:h-[320px]  desktop:w-[430px] desktop:h-[350px] desktop:ml-0 xll:w-[500px] xll:h-[390px] mylap:mx-4 mylap:w-[550px]  biglap:w-[750px] biglap:h-[520px]  rounded-lg shadow-lg`}
              >
                <div className="p-1  ">
                  <p className="text-xl xll:text-[22px] ml-1 font-Inter mylap:text-3xl biglap:text-4xl  text-black ">
                    Tasks
                  </p>
                </div>
                <Checkform />
              </div>
            )}
          </div>
        </div>
        {/* end part 3 */}
      </div>
    </>
  );
}

export default Dashboard;
