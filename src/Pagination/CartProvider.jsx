import React from "react";
import { createContext, useContext, useReducer } from "react";

const cartContext = createContext();
function cartReducer(cart, action) {
  switch (action.type) {
    case "Add_Item":
      return [...cart, action.payload];
    case "DECREASE":
      return cart.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity > 0 ? item.quantity - 1 : item.quantity,
          };
        } else {
          return item;
        }
      });
    case "INCREASE":
      return cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });

    case "DELETE":
      return cart.filter((item) => item.id !== action.payload.id);

    case "CLEAR":
      return [];
  }

  return cart;
}

function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const additem = (addCartItem) => {
    dispatch({ type: "Add_Item", payload: addCartItem });
  };

  const quantityDecrease = (id) => {
    dispatch({ type: "DECREASE", payload: { id: id } });
  };
  const quanityIncrease = (id) => {
    dispatch({ type: "INCREASE", payload: { id: id } });
  };

  const itemDelete = (id) => {
    dispatch({ type: "DELETE", payload: { id: id } });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };

  return (
    <cartContext.Provider
      value={{
        cart,
        additem,
        quantityDecrease,
        quanityIncrease,
        itemDelete,
        clearCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export function useCart() {
  return useContext(cartContext);
}

export default CartProvider;
