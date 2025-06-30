import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Singleblogdetail({ darkMode }) {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        console.log(response.data);
        setBlog(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blog detail:", error);
      });
  }, [id]);

  if (!blog) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div
      className={`${
        darkMode ? "text-white bg-white" : "text-black"
      } p-4  shadow-lg mb-4 mt-20 mx-auto sm:w-[270px] sm:ml-14 mymob:ml-14 mymob:w-[300px]   tablet:flex tablet:space-x-2 tablet:justify-between tablet:w-[660px] tablet:mx-auto desktop:w-[900px] desktop:mt-22 xll:w-[1220px] biglap:w-[2400px] biglap:mt-40 biglap:bg-white biglap:shadow-lg biglap:h-[1000px] rounded-md`}
      style={{
        backgroundImage: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
      }}
    >
      <div className="tablet:w-[320px] desktop:w-[360px] xll:w-[500px] biglap:w-[700px] biglap:mt-8">
        <h2 className="text-[18px]  font-bold mb-4 mt-4 px-1 tablet:mx-auto tablet:w-[280px] desktop:w-[300px] desktop:text-xl biglap:text-3xl biglap:w-[500px]  ">
          {blog.title}
        </h2>
        <img
          src={blog.thumbnail}
          alt={blog.title}
          className=" rounded mb-4 tablet:w-52 desktop:w-[300px] xll:w-[300px] biglap:w-[500px]   h-auto mx-auto"
        />
        <p className="font-sans font-semibold px-1 m-1 tablet:mx-auto tablet:w-[280px] desktop:text-base xll:text-xl biglap:text-2xl ">
          Category: <span className="font-normal">{blog.category}</span>
        </p>
        <p className="font-sans font-semibold px-1 m-1 tablet:mx-auto tablet:w-[280px] desktop:text-base xll:text-xl biglap:text-2xl ">
          Stock: <span className="font-normal"> {blog.stock}</span>
        </p>
        <p className="font-sans font-semibold px-1 m-1 tablet:mx-auto tablet:w-[280px] desktop:text-base xll:text-xl biglap:text-2xl ">
          Rating: <span className="font-normal"> {blog.rating} </span>
        </p>
        <p className="font-sans font-semibold px-1 m-1 tablet:mx-auto tablet:w-[280px] desktop:text-base xll:text-xl biglap:text-2xl ">
          Price:
          <span className="font-normal"> ${blog.price} </span>
        </p>
      </div>

      <div className="sm:mt-10 sm:w-[250px]  tablet:w-[320px] tablet:mt-12 desktop:w-[450px] xll:w-[650px] biglap:w-[1600px] biglap:text-2xl ">
        <p className="font-Inter px-1 m-1 text-xl font-semibold">
          Description:
        </p>

        <p className="mb-4 font-Roboto px-1 m-1">{blog.description}</p>
        <p className="font-Inter px-1 m-1 text-xl font-semibold">Reviews</p>
        <ul className="p-1">
          {blog.reviews.map((review) => {
            return (
              <>
                <li className=" font-Roboto px-1 ">Rating: {review.rating}</li>
                <li className=" font-Roboto px-1 ">
                  Comments: {review.comment}
                </li>
                <li className="mb-4 font-Roboto px-1 ">Date: {review.date}</li>
              </>
            );
          })}
        </ul>
        <p className="font-Inter px-1 m-1 text-xl font-semibold">More Info</p>
        <p className=" mt-2 font-Roboto px-1 m-1">
          Barcode:{blog.meta.barcode}
        </p>
        <p className=" font-Roboto sm:hidden tablet:flex px-1 m-1">
          Qrcode:{blog.meta.qrCode}
        </p>
      </div>

      {/* Add more details if needed */}
    </div>
  );
}

export default Singleblogdetail;
