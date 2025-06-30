import React from "react";
import { useCart } from "../CartProvider";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function CartItem({ id, title, price, quantity, image }) {
  const { quantityDecrease, quanityIncrease, itemDelete } = useCart();

  return (
    <div className="border-b border-dashed sm:mt-2 tablet:flex tablet:items-center tablet:space-x-20 tablet:space-y-12 tablet:justify-between tablet:mb-10 tablet:mt-10 desktop:space-x-40 desktop:p-1 ">
      <div className="tablet:flex tablet:items-center tablet:space-x-12 biglap:space-x-64">
        <div className=" p-1 mx-auto">
          <img
            src={image}
            alt=""
            className="sm:w-[50px] sm:h-[80px] w-[150px] h-auto sm:mx-auto"
          />
        </div>
        <div className=" sm:mt-0  sm:ml-3 tablet:mt-2 tablet:ml-6">
          <p className="sm:text-xs sm:w-36 sm:ml-2 sm:mt-2 mymob:ml-4 myiphone:ml-10 sm:text-center  tablet:w-64 tablet:text-xl tablet:text-left tablet:ml-0 leading-5  font-Inter">
            {title.slice(0, 40)}
          </p>
          <p className="text-base text-blue-600 mt-1 sm:text-center w-16 mx-auto tablet:mx-0  sm:mt-2">
            Rs:{" "}
            <span className="text-blue-600 sm:text-center">
              {Math.ceil(price * quantity)}
            </span>{" "}
          </p>
        </div>

        <div className="sm:w-36  sm:ml-5 mymob:mx-auto mymob:text-center tablet:ml-0  sm:mx-auto sm:mt-2 talet:flex space-x-6 items-center ">
          <button
            onClick={() => {
              quantityDecrease(id);
            }}
            className="active:text-red-500 transition-all rounded-md cursor-pointer border  p-1"
          >
            <FaMinus />
          </button>
          <span className=" w-16">{quantity}</span>
          <button
            onClick={() => {
              quanityIncrease(id);
            }}
            className="active:text-green-700 transition-all rounded-md cursor-pointer border p-1"
          >
            <FaPlus />
          </button>
        </div>
      </div>

      <div className=" mb-10  text-center sm:mx-auto sm:mt-2 tablet:flex tablet:mt-0 hover:text-red-600">
        <button
          onClick={() => {
            itemDelete(id);
          }}
          className="active:text-red-700 rounded-md p-1 cursor-pointer"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
