import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navbar from "./Component/Navbar";
import ProductDetail from "./Pages/ProductsDetail";
import CartProvider from "./Pagination/CartProvider";
import Singleblogdetail from "./BlogComponent/SIngleblogdetail";
import { ToastContainer } from "react-toastify";

import {
  Dashboard,
  Orders,
  Customers,
  Products,
  Blogs,
  Agents,
  Loginpage,
} from "./index";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const Applayout = () => {
    return (
      <>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Outlet />
      </>
    );
  };

  const navroute = createBrowserRouter(
    createRoutesFromChildren(
      <>
        <Route path="/login" element={<Loginpage />} />
        <Route element={<Applayout />}>
          <Route
            path="/dashboard"
            element={<Dashboard darkMode={darkMode} />}
          />
          <Route path="/orders" element={<Orders />} />
          <Route
            path="/customers"
            darkMode={darkMode}
            element={<Customers />}
          />
          <Route
            path="/products"
            element={
              <CartProvider>
                <ProductDetail darkMode={darkMode} />
              </CartProvider>
            }
            darkMode={darkMode}
          />
          <Route path="/blogs" element={<Blogs />} />
          <Route
            path="/blogs/:id"
            element={<Singleblogdetail />}
            darkMode={darkMode}
          />
          <Route path="/agents" element={<Agents />} />

          <Route path="*" element={<Dashboard />} />
        </Route>
      </>
    )
  );

  return (
    <>
      {" "}
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
