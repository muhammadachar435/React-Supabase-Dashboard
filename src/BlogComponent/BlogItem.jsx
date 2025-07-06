import React from "react";
import { IoMdShare } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { LuMessageCircleMore } from "react-icons/lu";

function BlogItem({id,title,date,share,Comment,views,user,userimg,darkMode,}) {
  
return (
    <div
      className={` ${
        darkMode
          ? "bg-[#1e1e1e] text-white rounded-lg shadow-xl "
          : "text-black bg-white shadow-xl rounded-lg "
      }
       ${
         id <= 1
           ? "mymob:w-[280px] mymob:h-[280px] rounded-xl"
           : id <= 3
           ? "mymob:w-[280px] mymob:h-auto rounded-xl"
           : "mymob:w-[280px] mymob:h-[340px] rounded-4xl"
       }
      ${
        id <= 1
          ? "tablet:w-[250px] tablet:h-[285px] rounded-xl"
          : id <= 3
          ? "tablet:w-[220px] tablet:h-[285px] rounded-xl"
          : "tablet:w-[280px] tablet:h-[350px] rounded-4xl"
      }  
       ${
         id <= 1
           ? "desktop:w-[400px] desktop:h-[285px] rounded-xl"
           : id <= 3
           ? "desktop:w-[260px] desktop:h-[285px] rounded-xl"
           : "desktop:w-[280px] desktop:h-[350px] rounded-4xl"
       } ${
        id <= 1
          ? "mypc:w-[550px] mypc:h-[370px] rounded-xl"
          : id <= 3
          ? "mypc:w-[314px] mypc:h-[370px] rounded-xl"
          : "mypc:w-[280px] mypc:h-[350px] rounded-4xl"
      }
       ${
         id <= 1
           ? "mylap:w-[550px] mylap:h-[370px] rounded-xl"
           : id <= 3
           ? "mylap:w-[320px] mylap:h-[370px] rounded-xl"
           : "mylap:w-[280px] mylap:h-[350px] rounded-4xl "
       }
       ${
         id <= 1
           ? "biglap:w-[750px] biglap:h-[470px] rounded-xl"
           : id <= 3
           ? "biglap:w-[420px] biglap:h-[470px] rounded-xl"
           : "biglap:w-[280px] biglap:h-[340px] rounded-4xl"
       }
      relative rounded-xl sm:mb-8 sm:w-[255px]  mx-auto myiphone:w-[280px] tablet:mx-auto  desktop:ml-0 h-auto`}
    >
      <img
        src={userimg}
        alt=""
        className={` ${
          id <= 1
            ? "desktop:w-[444px] desktop:h-[285px] rounded-xl"
            : "desktop:w-[210px] desktop:h-[157px] rounded-xl"
        } 
        ${
          id <= 1
            ? "mymob:w-[280px] mymob:h-[280px] rounded-xl"
            : id <= 3
            ? "mymob:w-[280px] mymob:h-auto rounded-xl"
            : "mymob:w-[280px] mymob:h-[157px] rounded-t-xl"
        }
         ${
           id <= 1
             ? "tablet:w-[250px] tablet:h-[285px] rounded-xl"
             : id <= 3
             ? "tablet:w-[220px] tablet:h-[285px] rounded-xl"
             : "tablet:w-[280px] h-[157px] rounded-t-xl"
         } 
         ${
           id <= 1
             ? "desktop:w-[400px] desktop:h-[285px] rounded-xl"
             : id <= 3
             ? "desktop:w-[260px] desktop:h-[285px] rounded-xl"
             : "desktop:w-[280px] desktop:h-[157px] rounded-t-xl"
         }  
        ${
          id <= 1
            ? "mypc:w-[550px] mypc:h-[370px] rounded-xl"
            : id <= 3
            ? "mypc:w-[314px] mypc:h-[370px] rounded-xl"
            : "mypc:w-[314px] mypc:h-[157px] rounded-t-xl"
        }
        ${
          id <= 1
            ? "mylap:w-[550px] mylap:h-[370px] rounded-xl"
            : id <= 3
            ? "mylap:w-[320px] mylap:h-[370px] rounded-xl"
            : "mylap:w-[314px] mylap:h-[157px] rounded-t-xl"
        }
         ${
           id <= 1
             ? "biglap:w-[750px] biglap:h-[470px] rounded-xl"
             : id <= 3
             ? "biglap:w-[420px] biglap:h-[470px] rounded-xl"
             : "biglap:w-[314px] rounded-t-xl"
         }
        sm:w-[255px] mymob:w-[280px] myiphone:w-[280px]  tablet:w-[280px]
         w-full h-40 object-cover `}
      />
      <span
        className={`z-20  absolute ${
          id <= 1
            ? "sm:top-2 sm:left-2 bg-white w-10 h-10 "
            : id <= 3
            ? "sm:top-2 sm:left-2 bg-white w-10 h-10"
            : "sm:bottom:44 mymob:bottom-41 "
        } left-[22px] bottom-[130px] rounded-full flex items-center justify-center`}
      >
        <img src={user} alt="" className="w-9 h-9 rounded-full" />
      </span>
      <p
        className={`  ${
          id <= 1
            ? "sm:text-sm sm:bottom-6 sm:left-1 hover:underline hover:text-sky-300 cursor-pointer font-sans absolute bottom-10 left-10 text-white font-semibold"
            : id <= 2
            ? "sm:text-sm sm:bottom-2 sm:left-1 hover:underline hover:text-sky-300 cursor-pointer font-sans absolute bottom-10 left-10 text-white font-semibold"
            : id <= 3
            ? "sm:text-sm sm:bottom-6 sm:left-1  hover:underline hover:text-sky-300 cursor-pointer font-sans absolute bottom-10 left-10 text-white font-semibold"
            : "sm:text-sm sm:top-64  hover:underline hover:text-sky-300 cursor-pointer sm:left-2 tablet:text-base font-sans absolute mymob:top-60 mymob:left-3  "
        } `}
      >
        {title}
      </p>

      {/* Wave SVG flipped to top */}
      <svg
        className={`  ${
          id <= 3 ? "hidden" : "flex"
        }  absolute z-10 sm:top-27 sm:right-[210px] mymob:top-21 rotate-180 sm:w-40 mymob:w-42 h-20`}
        viewBox="0 0 300 95"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C95,80 125,-80 250,0 L250,00 L0,0 Z"
          fill={darkMode ? "#1e1e1e" : "white"}
        />
      </svg>
      <p
        className={` ${
          id <= 1
            ? "sm:text-sm sm:bottom-16 sm:left-1 font-sans absolute bottom-10 left-10 text-[#a8b0bd] font-semibold"
            : id <= 3
            ? "sm:text-sm sm:bottom-16 sm:left-1 font-sans absolute bottom-10 left-10 text-[#4e5764] font-semibold"
            : "sm:text-xs sm:bottom-22 sm:left-2 text-gray-400 font-sans absolute mymob:bottom-28 mymob:left-3  font-semibold"
        } `}
      >
        {date}
      </p>
      <div
        className={` ${
          id <= 3 ? "hidden" : "flex"
        } grid grid-cols-3 w-42 text-xs absolute bottom-4 right-1 text-slate-400`}
      >
        <div className="flex items-center space-x-0.5">
          <span>
            <LuMessageCircleMore
              className={`${darkMode ? "text-white " : ""} `}
            />
          </span>
          <span>{Comment}</span>
        </div>

        <div className="flex space-x-0.5 items-center">
          <span>
            <IoEye />
          </span>
          <span>{views}</span>
        </div>

        <div className="flex space-x-0.5 items-center">
          <span>
            <IoMdShare />
          </span>
          <span>{share}</span>
        </div>
      </div>
      {/* <p>{share}</p> */}
      {/* <p>{comment}</p> */}
      {/* <p>{views}</p>/ */}
    </div>
  );
}

export default BlogItem;
