import React from "react";
import imgshop from "../Pictures/shopbag.png";
import Userimg from "../Pictures/Users.png";
import Cartimg from "../Pictures/cart.png";
import msgimg2 from "../Pictures/msg2.png";

import { ZigzagLineChart, BagLine, Snakeline, Usermarket } from "./LineChart";
function Salesprice() {
  return (
    <div className="sm:mx-auto sm:w-[210px] mt-10 mymob:w-[260px] mymob:ml-18 myiphone:ml-[58px] myiphone:w-[330px] tablet:w-[650px] tablet:h-[430px] tablet:ml-auto tablet:mr-auto desktop:grid desktop:grid-cols-3 desktop:w-[900px] desktop:gap-y-2 desktop:h-[420px] xll:grid xll:mt-4  xll:w-[1240px] xll:h-[220px] xll:ml-auto xll:mr-auto  mylap:w-[1300px] mylap:ml-auto mylap:mr-auto mylap:h-[240px] biglap:w-[2400px] biglap:h-[240px] biglap:mt-14">
      <div className="sm:grid sm:mx-auto mx-auto sm:grid-cols-1 sm:w-[210px] sm:h-[950px]  sm:gap-y-8 mt-4 mymob:w-[260px] myiphone:w-[330px]  tablet:grid tablet:grid-cols-2 tablet:w-[660px] tablet:h-[420px] desktop:grid desktop:grid-cols-3 desktop:w-[900px] desktop:h-[400px] desktop:gap-y-2 xll:grid xll:grid-cols-4 xll:justify-center  xll:w-[1240px] xll:h-[200px] xll:ml-0 xll:mr-0 mylap:grid mylap:grid-cols-4 mylap:w-[1300px] mylap:h-[240px] mylap:ml-0 biglap:w-[2400px] biglap:h-[240px]">
        {/*  */}
        {/* 1st box */}
        <div
          className="relative sm:w-[202px] h-[170px] sm:mx-auto mymob:w-[252px] myiphone:w-[290px] myiphone:p-0 mx-auto xll:w-[250px] mylap:w-[270px] mylap:h-[200px] my rounded-xl p-1 "
          style={{
            background: "linear-gradient(to right, #cce6fd 0%, #c8daee 100%)",
          }}
        >
          <div className="p-1 ml-1 w-[80px] h-[65px] mylap:w-[100px]">
            <img src={imgshop} alt="" className="w-[80px] mylap:w-[100px]" />
          </div>
          <div className=" ml-3 mt-2 mylap:mt-6">
            <p className="text-[18px] mylap:text-2xl">Weekly sales</p>
            <p className="font-Inter sm:text-3xl tablet:text-4xl mt-[18px] mylap:mt-7 ">
              714K
            </p>
          </div>
          <div className="absolute top-[12px] right-3 mylap:top-3">
            <span className="text-black text-xl  font-bold mylap:text-2xl">
              ⤤&nbsp;
              <span className="text-base font-normal font-Roboto text-[17px] mylap:text-xl hover:text-green-400 ">
                +2.6%
              </span>{" "}
            </span>
          </div>
          <div className="absolute right-2 bottom-4  w-22 mylap:bottom-5 ">
            <ZigzagLineChart />
          </div>
        </div>
        {/* 1st End */}

        {/* 2nd Box */}

        <div
          className="relative sm:w-[202px] h-[170px] sm:mx-auto mymob:w-[252px] myiphone:w-[290px] myiphone:p-0 mx-auto xll:w-[250px] mylap:w-[270px] mylap:h-[200px] my rounded-xl p-1 "
          style={{
            background: "linear-gradient(to right, #e9cffe 0%, #f4f3f3 100%)",
          }}
        >
          <div className="p-1 ml-1 w-[80px] h-[65px] ">
            <img
              src={Userimg}
              alt=""
              className="w-[45px] mylap:w-[55px] mylap:p-1"
            />
          </div>
          <div className=" ml-3 mt-2 mylap:mt-6">
            <p className="text-[18px] mylap:text-2xl">New Users</p>
            <p className="font-Inter sm:text-3xl tablet:text-4xl mt-[18px] mylap:mt-7 ">
              1.35M
            </p>
          </div>
          <div className="absolute top-[12px] right-3 mylap:top-3">
            <span className="text-black text-xl  font-bold mylap:text-2xl">
              ↷ &nbsp;
              <span className="text-base font-normal font-Roboto text-[17px] mylap:text-xl hover:text-red-400 ">
                -0.6%
              </span>{" "}
            </span>
          </div>
          <div className="absolute right-2 bottom-4  w-22 mylap:bottom-5 ">
            <Usermarket />
          </div>
        </div>
        {/* ------------------- */}

        {/* 2nd End */}

        {/* 3rd Box */}

        <div
          className="relative sm:w-[202px] h-[170px] sm:mx-auto mymob:w-[252px] myiphone:w-[290px] myiphone:p-0 mx-auto xll:w-[250px] mylap:w-[270px] mylap:h-[200px] my rounded-xl p-1 "
          style={{
            background: "linear-gradient(to right, #feeebd 0%, #feeebd 100%)",
          }}
        >
          <div className="p-1 ml-1 w-[80px] h-[65px] ">
            <img src={Cartimg} alt="" className="w-[60px] mylap:w-[55px]" />
          </div>
          <div className=" ml-3 mt-2 mylap:mt-6">
            <p className="text-[18px] mylap:text-2xl">Purchase Orders</p>
            <p className="font-Inter sm:text-3xl tablet:text-4xl mt-[18px] mylap:mt-7 ">
              1.72M
            </p>
          </div>
          <div className="absolute top-[12px] right-3 mylap:top-3">
            <span className="text-black text-xl  font-bold mylap:text-2xl">
              ⤤ &nbsp;
              <span className="text-base font-normal font-Roboto text-[17px] mylap:text-xl hover:text-red-400 ">
                +1.56%
              </span>{" "}
            </span>
          </div>
          <div className="absolute right-2 bottom-4  w-22 mylap:bottom-5 ">
            <BagLine />
          </div>
        </div>
        {/* 3rd End */}

        {/* 4th Box */}

        <div
          className="relative sm:w-[202px] h-[170px] sm:mx-auto mymob:w-[252px] myiphone:w-[290px] myiphone:p-0 mx-auto xll:w-[250px] mylap:w-[270px] mylap:h-[200px] my rounded-xl p-1 "
          style={{
            background: "linear-gradient(to right, #ffdbc8 0%, #ffdbc8 100%)",
          }}
        >
          <div className="p-1 ml-1 w-[80px] h-[65px] ">
            <img src={msgimg2} alt="" className="w-[60px]" />
          </div>
          <div className=" ml-3 mt-2 mylap:mt-6">
            <p className="text-[18px] mylap:text-2xl">Messages</p>
            <p className="font-Inter sm:text-3xl tablet:text-4xl mt-[18px] mylap:mt-7 ">
              2.34M
            </p>
          </div>
          <div className="absolute top-[12px] right-3 mylap:top-3">
            <span className="text-black text-xl  font-bold mylap:text-2xl">
              ⤤ &nbsp;
              <span className="text-base font-normal font-Roboto text-[17px] mylap:text-xl hover:text-red-400 ">
                +1.30%
              </span>{" "}
            </span>
          </div>
          <div className="absolute right-2 bottom-4  w-22 mylap:bottom-5 ">
            <Snakeline />
          </div>
        </div>
        {/* 4th End */}
      </div>
    </div>
  );
}

export default Salesprice;
