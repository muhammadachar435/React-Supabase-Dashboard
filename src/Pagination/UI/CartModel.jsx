// CartModal.jsx
import React from "react";
import { createPortal } from "react-dom";

function CartModal({ children, closecart, darkMode }) {
  return createPortal(
    <>
      {/* Backdrop (closes modal when clicked) */}
      <div
        className="fixed inset-0 z-20 max-w-[2500px] "
        style={{ backgroundColor: "rgba(50,50,50,0.9)" }}
        onClick={closecart}
      />

      {/* Modal Content */}
      <div
        className={`fixed z-50 max-w-[800px] sm:w-[70%] tablet:w-[85%] sm:h-[500px] sm:mt-20  tablet:h-[400px] biglap:max-w-[1000px] biglap:h-[1000px] overflow-y-auto
        left-1/2 sm:top-72 tablet:top-86 biglap:top-174 transform -translate-x-1/2 -translate-y-1/2
        bg-white rounded-xl shadow-xl p-6 ${
          darkMode ? "text-black bg-white" : "text-black"
        }`}
      >
        {/* Modal Body */}
        {children}
      </div>
    </>,
    document.getElementById("cartmodal")
  );
}

export default CartModal;
