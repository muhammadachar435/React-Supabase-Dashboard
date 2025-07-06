import React, { useState } from "react";
import { blogData } from "./Blogdata";
import BlogItem from "./BlogItem";
import { FaPlus } from "react-icons/fa";

function Blog({ darkMode }) {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter blog data based on search term
  const filteredBlogs = blogData.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const firstthreeblog = filteredBlogs.slice(0, 3);
  const remainingblog = filteredBlogs.slice(3);

  return (
    <>
      <div className="sm:ml-14 mt-20  flex justify-between items-center">
        <h2 className="text-xl   sm:text-2xl mymob:ml-1  tablet:text-3xl font-bold font-Inter mb-4 sm:mb-0 xll:ml-3">
          Blogs
        </h2>
        <button
          onClick={() => setShowAddModal(true)}
          className={` ${
            darkMode
              ? "bg-[#8fcaf9] text-black  hover:bg-blue-600  hover:text-white cursor-pointer"
              : "bg-[#1877d0] text-white  hover:bg-blue-600 cursor-pointer"
          }   flex items-center mr-2 sm:space-x-1 tablet:space-x-3  px-1 py-1 rounded w-full sm:w-auto`}
        >
          <span>
            <FaPlus />
          </span>
          <span className="uppercase">New Order</span>
        </button>
      </div>
      {/* Search Bar */}

      <div className=" flex items-center justify-between mr-2 sm:mt-10 sm:ml-16 tablet:mt-8 xll:ml-17">
        <input
          type="text"
          placeholder="⌕ Search post..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={` ${
            darkMode
              ? "text-white focus:ring focus:ring-sky-300"
              : "focus:ring focus:ring-sky-300 transparent"
          } p-2 ring-2 focus:ring focus:ring-sky-300 rounded-sm sm:w-44 mymob:w-52 myiphone:w-68 tablet:py-4 tablet:w-72 desktop:h-12`}
        />

        <select
          name=""
          id=""
          className={` ${
            darkMode
              ? "text-white bg-gray-700  w-32 rounded-sm sm:text-sm tablet:text-xl sm:w-16 tablet:w-32 border-none outline-none "
              : "text-white bg-slate-400 rounded-sm sm:text-sm tablet:text-xl sm:w-16 tablet:w-32 border-none outline-none  "
          } `}
        >
          <option defaultValue="Latest">Latest</option>
          <option value="Popular" className="outline-none">
            Popular
          </option>
          <option value="Oldest">Oldest</option>
        </select>
      </div>

      {/* First three blogs */}
      <div
        className={`grid sm:w-[255px] sm:grid-cols-1 mt-10 sm:ml-13 mymob:ml-17 mymob:w-[280px] myiphone:ml-14 myiphone:w-[350px] tablet:w-[710px] tablet:flex tablet:space-x-20  tablet:gap-0 desktop:w-[950px] desktop:flex desktop:justify-evenly mypc:ml-18 mypc:w-[1270px] mylap:w-[1370px] biglap:w-[2490px] biglap:pl-20 biglap:pt-10`}
      >
        {firstthreeblog.map((blog) => (
          <BlogItem key={blog.id} {...blog} darkMode={darkMode} />
        ))}
      </div>

      {/* Remaining blogs */}
      <div className="grid  sm:w-[255px] sm:grid-cols-1 mt-20 sm:ml-13 mymob:ml-17 mymob:w-[280px] myiphone:ml-14 myiphone:w-[350px] tablet:w-[650px] desktop:ml-14 desktop:w-[950px] tablet:grid-cols-2 tablet:gap-0 desktop:grid-cols-3 desktop:gap-y-10 mypc:ml-18  mypc:w-[1270px] mypc:grid-cols-4 mylap:w-[1370px] mylap:ml-14 biglap:w-[2490px] biglap:pl-20 biglap:pt-10">
        {remainingblog.map((blog) => (
          <BlogItem key={blog.id} {...blog} darkMode={darkMode} />
        ))}
      </div>
    </>
  );
}

export default Blog;
