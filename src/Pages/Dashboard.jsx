import React from "react";
import Doughjsx from "../Charts/Doughjsx";
import Radarjsx from "../Charts/Radarjsx";
import Barchart from "../Charts/Barchart";
import HorizontalBarChart from "../Charts/HorizontalBar";
import Orderimg from "../Pictures/orderTimeline.png";
import ordertable from "../Pictures/navytablet.png";
import Salesprice from "../Charts/Salesprice";
import img1 from "../Pictures/img1.jpg";
import img2 from "../Pictures/img2.jpg";
import img3 from "../Pictures/img3.jpg";
import img4 from "../Pictures/img4.jpg";
import img5 from "../Pictures/img5.png";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import fb from "../Pictures/facebook.png";
import google from "../Pictures/google.png";
import twitter from "../Pictures/twitter.png";
import likedin from "../Pictures/linkedin.png";
import Checkform from "../Charts/Checkform";

function Dashboard({ darkMode }) {
  console.log(darkMode);

  return (
    <>
      <div>
        <p className="mt-22 sm:ml-[60px] font-Roboto sm:text-xl tablet:text-4xl desktop:text-4xl tablet:mb-6 biglap:text-5xl font-bold">
          Dashboard
        </p>
        <div className="sm:mt-10 tablet:grid tablet:grid-cols-2 tablet:gap-x-4 tablet:w-[700px] tablet:mt-6 tablet:ml-[54px] ipad:w-[710px] ipad:mt-[20] ipad:ml-auto ipad:mr-auto desktop:w-[900px] desktop:h-[360px] desktop:ml-auto desktop:mr-auto xll:w-[1150px] xll:h-[400px] xll:gap-x-36 mylap:w-[1300px] biglap:w-[2000px] biglap:h-[550px] biglap:p-5 ">
          <div>
            {darkMode ? (
              <div className=" p-1 sm:ml-[50px] mymob:ml-[56px] bg-white sm:w-[262px] sm:h-[260px] mymob:w-[300px] mymob:h-[330px]  myiphone:ml-14 myiphone:mx-auto myiphone:w-[350px] tablet:mt-0 tablet:ml-0 tablet:w-[330px] tablet:h-[330px]  desktop:w-[450px] desktop:h-[350px] desktop:ml-0 xll:w-[500px] xll:h-[390px] mylap:mx-4 mylap:w-[550px]  biglap:w-[680px] biglap:h-[520px]  rounded-lg shadow-lg">
                <p className="text-xl ml-1 font-Inter xll:text-[22px] mylap:text-3xl font-bold text-black desktop:p-1">
                  Conversion rates
                </p>
                <p className="text-base font-sans ml-1 xll:ml-2 mylap:text-base text-slate-500">
                  (+43%) than last year
                </p>
                <HorizontalBarChart />
              </div>
            ) : (
              <div className="p-1 sm:ml-[50px] mymob:ml-[56px] bg-white sm:w-[262px] sm:h-[260px] mymob:w-[300px] mymob:h-[330px]  myiphone:ml-14 myiphone:mx-auto myiphone:w-[350px] tablet:mt-0 tablet:ml-0 tablet:w-[330px] tablet:h-[330px]  desktop:w-[450px] desktop:h-[350px] desktop:ml-0 xll:w-[500px] xll:h-[390px] mylap:mx-4 mylap:w-[550px]  biglap:w-[680px] biglap:h-[520px]  rounded-lg shadow-lg">
                <div className="p-1 ">
                  <p className="text-xl xll:text-[22px] ml-1 font-Inter mylap:text-3xl biglap:text-4xl font-bold text-black ">
                    Conversion rates
                  </p>
                  <p className="text-base font-sans ml-1 xll:ml-2 mylap:text-base biglap:text-xl text-slate-500">
                    (+43%) than last year
                  </p>
                </div>
                <HorizontalBarChart />
              </div>
            )}
          </div>

          <div
            className={`${
              darkMode
                ? "bg-white rounded-lg shadow-lg p-1 "
                : "bg-white rounded-lg shadow-lg "
            }mt-10 sm:p-1 sm:ml-[50px] sm:w-[262px] sm:h-[220px]  mymob:ml-[56px] mymob:h-[240px] mymob:w-[300px] myiphone:ml-14 myiphone:w-[350px] myiphone:h-[280px]  my-auto  rounded-lg shadow-lg   tablet:w-[330px] tablet:mt-0 tablet:h-[330px]  tablet:ml-0 desktop:w-[430px] desktop:h-[350px] xll:w-[500px] xll:h-[390px] mylap:w-[550px]  biglap:w-[750px] biglap:h-[520px]   `}
          >
            <img
              src={Orderimg}
              className="sm:w-[260px] h-[200px] mymob:w-[300px] myiphone:w-[335px] myiphone:mt-2 mymob:h-auto  tablet:hidden rounded-lg "
              alt=""
            />
            <div className="tablet:p-1">
              <p className="hidden tablet:flex text-xl xll:text-[22px] mylap:text-3xl biglap:text-4xl ml-1 font-Inter font-bold text-black">
                Order Timeline
              </p>
              <p className="hidden tablet:flex text-base font-sans mylap:text-base biglap:text-xl ml-1 xll:ml-2 text-slate-500">
                A quick view of your order's progress and status.
              </p>
            </div>
            <img
              src={ordertable}
              className="hidden tablet:flex  tablet:w-[325px] tablet:h-[255px]  rounded-lg desktop:mx-auto desktop:w-[420px] desktop:h-[276px] xll:w-[450px] mylap:w-[500px]  biglap:w-[650px] biglap:h-[400px]   xll:mt-5"
              alt=""
            />
          </div>
        </div>
        {/* salesprice component */}
        <Salesprice className="" />
        {/* end salesprice */}

        {/* radar */}
        <div className="sm:mt-10 tablet:grid tablet:grid-cols-2 tablet:gap-x-4 tablet:w-[700px] tablet:h-[400px] tablet:mt-6 tablet:ml-[54px] ipad:w-[710px] ipad:mt-[20] ipad:ml-auto ipad:mr-auto desktop:w-[900px] desktop:h-[360px] desktop:ml-auto desktop:mr-auto xll:w-[1150px] xll:h-[390px] xll:gap-x-36 mylap:w-[1300px] biglap:w-[2000px] biglap:h-[550px] biglap:p-5 ">
          <div>
            {darkMode ? (
              <div className="p-1 sm:ml-[50px] mymob:ml-[56px] bg-white sm:w-[262px] sm:h-[310px] mymob:w-[300px] mymob:h-[310px]  myiphone:ml-14 myiphone:mx-auto myiphone:w-[350px] tablet:mt-0 tablet:ml-0 tablet:w-[330px] tablet:h-[380px]  desktop:w-[450px] desktop:h-[350px] desktop:ml-0 xll:w-[500px] xll:h-[380px] mylap:mx-4 mylap:w-[550px]   biglap:w-[680px] biglap:h-[520px]  rounded-lg shadow-lg">
                <p className="text-xl  ml-1 font-Inter xll:text-[22px] mylap:text-3xl font-bold text-black desktop:p-1">
                  Current Subject
                </p>

                <Radarjsx />
              </div>
            ) : (
              <div className="p-1 sm:ml-[50px] mymob:ml-[56px] bg-white sm:w-[262px] sm:h-[310px] mymob:w-[300px] mymob:h-[310px]  myiphone:ml-14 myiphone:mx-auto myiphone:w-[350px] tablet:mt-0 tablet:ml-0 tablet:w-[330px] tablet:h-[380px]  desktop:w-[450px] desktop:h-[350px] desktop:ml-0 xll:w-[500px] xll:h-[380px] mylap:mx-4 mylap:w-[550px]   biglap:w-[680px] biglap:h-[520px]  rounded-lg shadow-lg">
                <div className="p-1 ">
                  <p className="text-xl xll:text-[22px] ml-1 font-Inter mylap:text-3xl biglap:text-4xl font-bold text-black ">
                    Current Subject
                  </p>
                </div>
                <Radarjsx />
              </div>
            )}
          </div>
          {/* radar end */}
          {/* compnany */}

          <div className="sm:mt-6 tablet:mt-0">
            {darkMode ? (
              <div className="p-1 sm:ml-[50px] mymob:ml-[56px] bg-white sm:w-[262px] sm:h-[280px] mymob:w-[300px] mymob:h-[330px]  myiphone:ml-14 myiphone:mx-auto myiphone:w-[350px] tablet:mt-0 tablet:ml-0 tablet:w-[330px] tablet:h-[380px]  desktop:w-[430px] desktop:h-[350px] desktop:ml-0 xll:w-[500px] xll:h-[380px] mylap:mx-4 mylap:w-[550px]  biglap:w-[750px] biglap:h-[520px]  rounded-lg shadow-lg">
                <p className="text-xl  ml-1 font-Inter xll:text-[22px] mylap:text-3xl font-bold text-black desktop:p-1">
                  Website visits
                </p>
                <p className="text-base font-sans ml-1 xll:ml-2 mylap:text-base text-slate-400">
                  (+43%) than last year
                </p>

                <Barchart />
              </div>
            ) : (
              <div className="p-1 sm:ml-[50px] mymob:ml-[56px] bg-white sm:w-[262px] sm:h-[280px] mymob:w-[300px] mymob:h-[330px]  myiphone:ml-14 myiphone:mx-auto myiphone:w-[350px] tablet:mt-0 tablet:ml-0 tablet:w-[330px] tablet:h-[380px]  desktop:w-[430px] desktop:h-[350px] desktop:ml-0 xll:w-[500px] xll:h-[380px] mylap:mx-4 mylap:w-[550px]  biglap:w-[750px] biglap:h-[520px]  rounded-lg shadow-lg">
                <div className="p-1 ">
                  <p className="text-xl xll:text-[22px] ml-1 font-Inter mylap:text-3xl biglap:text-4xl font-bold text-black ">
                    Website visits
                  </p>
                  <p className="text-base font-sans ml-1 xll:ml-2 mylap:text-base text-slate-700">
                    (+43%) than last year
                  </p>
                </div>
                <Barchart />
              </div>
            )}
          </div>
        </div>
        {/* end radar part */}

        {/* img question part */}
        <div className="sm:mt-10  tablet:grid tablet:grid-cols-2 tablet:gap-x-4  tablet:w-[700px] tablet:h-[400px] tablet:mt-6 tablet:ml-[54px] ipad:w-[710px] ipad:mt-[20] ipad:ml-auto ipad:mr-auto desktop:w-[900px] desktop:h-[365px]  desktop:ml-auto desktop:mr-auto xll:w-[1150px] xll:h-[410px] xll:gap-x-36 mylap:w-[1300px] biglap:w-[2000px] biglap:h-[550px] biglap:p-5  ">
          <div>
            {darkMode ? (
              <div className="p-1 sm:ml-[50px] mymob:ml-[56px] bg-white sm:w-[262px] sm:h-[390px] mymob:w-[300px] mymob:h-[390px]  myiphone:ml-14 myiphone:mx-auto myiphone:w-[350px] tablet:mt-0 tablet:ml-0 tablet:w-[330px] tablet:h-[390px]  desktop:w-[450px] desktop:h-[360px] desktop:ml-0 xll:w-[500px] xll:h-[390px] mylap:mx-4 mylap:w-[550px]   biglap:w-[680px] biglap:h-[520px]  rounded-lg shadow-lg">
                <div className="">
                  <p className="text-xl xll:text-[22px] ml-1 font-Inter mylap:text-3xl biglap:text-4xl font-bold text-black biglap:mb-4 ">
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
                    <Link className="font-sans text-black flex items-center hover:bg-slate-300 hover:transition-all hover:rounded-lg p-1 biglap:mt-20">
                      View All <IoIosArrowForward />
                    </Link>
                  </div>
                </div>
                {/* Link end */}
              </div>
            ) : (
              <div className="p-1 sm:ml-[50px] mymob:ml-[56px] bg-white sm:w-[262px] sm:h-[390px] mymob:w-[300px] mymob:h-[390px]  myiphone:ml-14 myiphone:mx-auto myiphone:w-[350px] tablet:mt-0 tablet:ml-0 tablet:w-[330px] tablet:h-[390px]  desktop:w-[450px] desktop:h-[360px] desktop:ml-0 xll:w-[500px] xll:h-[390px] mylap:mx-4 mylap:w-[550px]   biglap:w-[680px] biglap:h-[520px]  rounded-lg shadow-lg">
                <div className="">
                  <p className="text-xl xll:text-[22px] ml-1 font-Inter mylap:text-3xl biglap:text-4xl font-bold text-black biglap:mb-4 ">
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
              <div className="p-1   sm:ml-[50px] mymob:ml-[56px] bg-white sm:w-[262px] sm:h-[310px] mymob:w-[300px] mymob:h-[330px]  myiphone:ml-14 myiphone:mx-auto myiphone:w-[350px] tablet:mt-0 tablet:ml-0 tablet:w-[330px] tablet:h-[390px]  desktop:w-[430px] desktop:h-[360px] desktop:ml-0 xll:w-[500px] xll:h-[390px] mylap:mx-4 mylap:w-[550px]  biglap:w-[750px] biglap:h-[520px]  rounded-lg shadow-lg">
                <p className="text-xl  ml-1 font-Inter xll:text-[22px] mylap:text-3xl font-bold text-black desktop:p-1">
                  Current visits
                </p>
                <Doughjsx />
              </div>
            ) : (
              <div className="p-1   sm:ml-[50px] mymob:ml-[56px] bg-white sm:w-[262px] sm:h-[310px] mymob:w-[300px] mymob:h-[330px]  myiphone:ml-14 myiphone:mx-auto myiphone:w-[350px] tablet:mt-0 tablet:ml-0 tablet:w-[330px] tablet:h-[390px]  desktop:w-[430px] desktop:h-[360px] desktop:ml-0 xll:w-[500px] xll:h-[390px] mylap:mx-4 mylap:w-[550px]  biglap:w-[750px] biglap:h-[520px]  rounded-lg shadow-lg ">
                <div className="p-1 ">
                  <p className="text-xl xll:text-[22px] ml-1 font-Inter mylap:text-3xl biglap:text-4xl font-bold text-black ">
                    Current visits
                  </p>
                </div>
                <Doughjsx />
              </div>
            )}
          </div>
        </div>

        {/* part 3 */}

        {/* img question part */}
        <div className="sm:mt-10   tablet:grid tablet:grid-cols-2 tablet:gap-x-4 tablet:w-[700px] tablet:h-[310px] tablet:mt-6 tablet:ml-[54px] ipad:w-[710px] ipad:mt-[20] ipad:ml-auto ipad:mr-auto desktop:w-[900px] desktop:h-[360px]  desktop:ml-auto desktop:mr-auto xll:w-[1150px] xll:h-[410px] xll:gap-x-36 mylap:w-[1300px] biglap:w-[2000px]   biglap:h-[550px] biglap:p-5  ">
          <div className="mx-auto  ">
            {darkMode ? (
              <div className="p-1 sm:ml-[50px] mymob:ml-[56px] bg-white sm:w-[262px] sm:h-[280px] mymob:w-[300px] mymob:h-[300px]  myiphone:ml-14 myiphone:mx-auto myiphone:w-[350px] tablet:mt-0 tablet:ml-0 tablet:w-[300px] tablet:h-[300px]  desktop:w-[450px] desktop:h-[350px] desktop:ml-0 xll:w-[500px] xll:h-[390px] mylap:mx-4 mylap:w-[550px]  biglap:w-[680px] biglap:mr-48  biglap:ml-0 biglap:mx-0  biglap:h-[520px]   rounded-lg shadow-lg">
                <div className="biglap:mb-20">
                  <p className="text-xl xll:text-[22px] ml-1 font-Inter mylap:text-3xl biglap:text-4xl font-bold text-black ">
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
                        className={`text-sm font-Roboto  ${
                          darkMode ? "text-black" : ""
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
                          darkMode ? "text-black" : ""
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
                          darkMode ? "text-black" : ""
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
                          darkMode ? "text-black" : "text"
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
              </div>
            ) : (
              <div className="p-1 sm:ml-[50px] mymob:ml-[56px] bg-white sm:w-[262px] sm:h-[280px] mymob:w-[300px] mymob:h-[300px]  myiphone:ml-14 myiphone:mx-auto myiphone:w-[350px] tablet:mt-0 tablet:ml-0 tablet:w-[330px] tablet:h-[320px]  desktop:w-[450px] desktop:h-[350px] desktop:ml-0 xll:w-[500px] xll:h-[390px]  mylap:w-[550px]  biglap:w-[700px] biglap:h-[520px] biglap:mr-48 rounded-lg shadow-lg">
                <div className="biglap:mb-20">
                  <p className="text-xl xll:text-[22px] ml-1 font-Inter mylap:text-3xl biglap:text-4xl font-bold text-black biglap:mb-4  desktop:m-1 ">
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
              <div
                className={`p-1   sm:ml-[50px] mymob:ml-[56px] bg-white sm:w-[262px] sm:h-[350px] mymob:w-[300px] mymob:h-[300px]  myiphone:ml-14 myiphone:mx-auto myiphone:w-[350px] tablet:mt-0 tablet:ml-0 tablet:w-[330px] tablet:h-[300px]  desktop:w-[430px] desktop:h-[350px] desktop:ml-0 xll:w-[500px] xll:h-[390px] mylap:mx-4 mylap:w-[550px]  biglap:w-[750px] biglap:h-[520px]  rounded-lg shadow-lg ${
                  darkMode ? "text-black" : ""
                }`}
              >
                <div className="p-1  ">
                  <p className="text-xl  ml-1 font-Inter xll:text-[22px] mylap:text-3xl font-bold text-black desktop:p-1">
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
                  <p className="text-xl xll:text-[22px] ml-1 font-Inter mylap:text-3xl biglap:text-4xl font-bold text-black ">
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
