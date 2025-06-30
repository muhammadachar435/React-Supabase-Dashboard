import React from "react";
import { useCart } from "../CartProvider";
import CartItem from "./CartItem";
import { ToastContainer, toast } from "react-toastify";

function Cart() {
  const { cart, clearCart } = useCart();

  const totalAMount = cart.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);

  const buyProduct = () => {
    toast.success(
      `Product bought successfully! Total amount: $${totalAMount}`,
      {
        autoClose: 500,
      }
    );
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <h1 className="flex justify-center items-center mt-40 sm:text-2xl tablet:text-5xl font-Inter">
        Cart is Empty
      </h1>
    );
  }

  return (
    <>
      <div className="sm:border-b-2 sm:border-solid tablet:border-none text-2xl font-Inter font-bold mb-4 text-yellow-500">
        <h1>My Cart</h1>
      </div>
      <div>
        {cart.map((cartitem) => {
          return (
            <CartItem
              key={cartitem.id}
              {...cartitem}
              totalAMount={totalAMount}
            />
          );
        })}
      </div>
      <div className="flex justify-between items-center mt-2">
        <h1 className="sm:text-xs mymob:text-sm p-1 font-Roboto tablet:text-xl text-blue-800">
          TotalAmount: {Number(totalAMount).toFixed(2)}
        </h1>
        <button
          className=" bg-green-500 text-white transition-all rounded-md font-Roboto p-1"
          onClick={buyProduct}
        >
          Buy Now
        </button>
      </div>
    </>
  );
}

export default Cart;
