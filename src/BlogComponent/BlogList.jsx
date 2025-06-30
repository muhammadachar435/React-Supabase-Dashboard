import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchForm from "./searchForm";
import { IoMdShare } from "react-icons/io";
import { IoEye } from "react-icons/io5";

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setBlogs(response.data.products);
        setLoading(false);
      })

      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  }, []);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 mt-20 mx-auto  tablet:w-[650px] desktop:w-[920px] xll:w-[1150px] biglap:w-[2400px]">
      <h2 className="text-2xl sm:ml-12 tablet:ml-0 font-bold mb-4 font-Inter text-left tablet:text-4xl biglap:text-2xl biglap:ml-0">
        Blogs
      </h2>

      <div className="tablet:mt-10">
        <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      <div className="grid sm:grid-cols-1 sm:ml-10 sm:w-[260px] sm:mx-auto sm:mt-10 mymob:ml-14 mymob:w-[280px] myiphone:w-[300px] myiphone:ml-16 tablet:grid-cols-2 tablet:w-[620px] tablet:ml-0 desktop:w-[900px] desktop:grid-cols-3 gap-20 mt-6 xll:w-[1120px] biglap:grid-cols-6 biglap:w-[2350px]">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className=" tablet:w-[280px] tablet:h-[350px] bg-white xll:w-[290px] text-black rounded-md shadow-lg"
            >
              <img
                src={blog.thumbnail}
                alt={blog.title}
                className="sm:w-40 sm:h-[230px]  tablet:w-[180px] tablet:h-auto  h-auto  mx-auto object-cover my-1"
              />
              <Link to={`/blogs/${blog.id}`}>
                <h3 className="mt-3 tablet:mt-10 px-2 font-sans font-semibold text-base hover:text-[#15A9BD]">
                  {blog.title}
                </h3>
              </Link>

              <p className="p-2 font-sans">${blog.price}</p>
              <div className="flex justify-end mt-7">
                <div className="flex items-center space-x-1 justify-end mr-2 p-1 text-slate-700">
                  <span className="">
                    <IoMdShare className="h-[14px]" />
                  </span>
                  <span className="font-semibold text-sm">{blog.rating}K</span>
                </div>

                <div className="flex items-center space-x-1 justify-end mr-2 p-1 text-slate-700">
                  <span className="">
                    <IoEye />
                  </span>
                  <span className="font-semibold text-sm">
                    {blog.discountPercentage}K
                  </span>
                </div>
              </div>

              {/* end div */}
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-2xl sm:text-3xl font-semibold font-Inter text-gray-600 py-10">
            😕 No blogs found.
          </p>
        )}
      </div>
    </div>
  );
}

export default BlogList;
