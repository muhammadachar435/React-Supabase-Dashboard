import React from "react";
import { useCart } from "./CartProvider";
import { toast, ToastContainer } from "react-toastify";

function Product({ id, title, price, image }) {
  const { cart, additem } = useCart();

  const Addtohandle = () => {
    for (let item of cart) {
      if (item.id === id) {
        toast.warn("This item is already in the cart", { autoClose: 1000 });
        alert("This item is already in the cart");
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
    <div className="sm:ml-[60px] m-1 sm:w-[250px] sm:h-auto mymob:ml-16 mymob:w-[300px] myiphone:mx-auto mx-auto mt-10 bg-white text-black shadow-lg rounded-lg p-4">
      <img src={image} alt="" className="w-[200px] h-[250px] mx-auto" />
      <p className="font-Inter text-2xl mt-10 text-center">
        {title.slice(0, 10)}
      </p>
      <p className="font-Roboto text-base text-red-600 text-center font-semibold">
        Rs: {price}
      </p>

      <button
        className=" rounded-lg p-1 w-[90%] bg-yellow-500 text-center m-3 font-Inter text-white hover:bg-gray-600 cursor-pointer "
        onClick={Addtohandle}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
