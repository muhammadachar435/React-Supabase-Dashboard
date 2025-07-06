import React, { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./Component/Navbar";
import ProductDetail from "./Pages/ProductsDetail";
import CartProvider from "./Pagination/CartProvider";
import { ToastContainer } from "react-toastify";
import {
  Dashboard,
  Orders,
  Customers,
  Blogs,
  Agents,
  Loginpage,
} from "./index";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const Applayout = () => (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Outlet />
    </>
  );

  const navroute = createBrowserRouter([
    {
      path: "/login",
      element: <Loginpage />,
    },
    {
      element: <Applayout />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard darkMode={darkMode} />,
        },
        {
          path: "/orders",
          element: <Orders darkMode={darkMode} />,
        },
        {
          path: "/customers",
          element: <Customers darkMode={darkMode} />,
        },
        {
          path: "/products",
          element: (
            <CartProvider>
              <ProductDetail darkMode={darkMode} />
            </CartProvider>
          ),
        },
        {
          path: "/blogs",
          element: <Blogs darkMode={darkMode} />,
        },

        {
          path: "/agents",
          element: <Agents darkMode={darkMode} />,
        },
        {
          path: "*",
          element: <Dashboard darkMode={darkMode} />, // ✅ corrected
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={navroute} />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
