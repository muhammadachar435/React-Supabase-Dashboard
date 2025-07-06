import React from "react";
import { useCart } from "./CartProvider";
import { toast, ToastContainer } from "react-toastify";
import circleblue from "../Pictures/bluecircle .png";
import redcircle from "../Pictures/circlered.png";

function Product({ id, title, price, image, darkMode }) {
  const { cart, additem } = useCart();

  const Addtohandle = () => {
    for (let item of cart) {
      if (item.id === id) {
        toast.warn("This item is already in the cart", { autoClose: 1000 });

        return; //
      }
    }

    const addCartItem = {
      id: id,
      title: title,
      price: price,
      image: image,
      quantity: 1,
    };
    additem(addCartItem);
  };

  return (
    <div
      className={` ${
        darkMode
          ? "bg-[#1e1e1e] text-white rounded-2xl shadow-xl"
          : "bg-white text-black shadow-xl rounded-2xl"
      } sm:ml-[60px]  m-1 sm:w-[250px] sm:h-auto mymob:ml-16 mymob:w-[280px]   mt-10 `}
    >
      <img
        src={image}
        alt=""
        className="sm:w-[250px] h-[280px] mymob:w-[280px] mymob:h-[280px] object-cover mx-auto rounded-md"
      />
      <p className="font-Inter mt-6 text-center text-sm">
        {title.slice(0, 25)}....
      </p>
      <div className="flex mt-4 items-center justify-between mr-2">
        <div className="flex space-x-[1px] ml-2">
          <img src={circleblue} alt="" className="w-2 h-2" />
          <img src={redcircle} alt="" className="w-2 h-2" />
        </div>
        <p
          className={` ${
            darkMode ? "text-white" : "text-black"
          } font-sans flex justify-end mr-2 text-base text-center`}
        >
          ${price}
        </p>
      </div>

      <button
        className=" rounded-lg p-1 mt-8 w-[90%] bg-yellow-500 text-center m-3 font-Inter text-white hover:bg-gray-600 cursor-pointer "
        onClick={Addtohandle}
      >
        Add to Cart
        <ToastContainer />
      </button>
    </div>
  );
}

export default Product;
