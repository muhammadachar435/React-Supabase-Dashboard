// src/components/Product.jsx
import React from "react";
import Products from "../Pagination/Products";
import { ToastContainer } from "react-toastify";

const ProductDetail = ({ darkMode }) => {
  return (
    <>
      <Products darkMode={darkMode} />
      <ToastContainer />
    </>
  );
};

export default ProductDetail;
