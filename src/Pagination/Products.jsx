import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import CartModel from "./UI/CartModel";
import Cart from "./UI/Cart";
import { GiShoppingCart } from "react-icons/gi";
import { useCart } from "./CartProvider";
import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

function Products({ darkMode }) {
  const [productData, setProductData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("default"); // NEW: sort order state
  const itemsPerPage = 6;
  const [showcart, setshowcart] = useState(false);
  const { cart } = useCart();

  const totalquantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  function closecart() {
    setshowcart(!showcart);
  }

  useEffect(() => {
    const fetchData = async () => {
      const fetchPromise = axios.get("https://fakestoreapi.com/products");

      toast.promise(
        fetchPromise,
        {
          pending: "Loading products...",
          success: "Products loaded successfully!",
          error: "Failed to load products",
        },
        { autoClose: 1000 }
      );

      try {
        const response = await fetchPromise;

        // Delay before showing data (e.g. 2 seconds)
        setTimeout(() => {
          setProductData(response.data);
        }, 1000);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, []);

  // Prevent scroll when cart is open
  useEffect(() => {
    document.documentElement.style.overflowY = showcart ? "hidden" : "scroll";
  }, [showcart]);

  // Calculate pagination
  const totalPages = Math.ceil(productData.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;

  // Sort products based on sortOrder
  let sortedProducts = [...productData];
  if (sortOrder === "lowToHigh") {
    sortedProducts.sort((a, b) => a.price - b.price); // if a greater than b +ve Value so b before than a
  } else if (sortOrder === "highToLow") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  const currentProducts = sortedProducts.slice(indexOfFirst, indexOfLast);

  return (
    <>
      <header className="mt-20 flex justify-between items-center pl-1 pr-1">
        <div>
          <p className="ml-40 text-3xl font-Inter sm:ml-16 tablet:text:4xl font-bold">
            Products
          </p>
        </div>

        <div className="relative">
          <button
            onClick={() => setshowcart(!showcart)}
            className="cursor-pointer"
          >
            <GiShoppingCart className="w-10 h-8" />
            {totalquantity > 0 && (
              <span className="absolute top-[-1px] right-0 bg-red-500 text-white rounded-full w-3 h-3 p-[8px] text-sm flex justify-center items-center">
                {totalquantity}
              </span>
            )}
          </button>
        </div>

        {showcart && (
          <CartModel closecart={closecart} darkMode={darkMode}>
            <Cart />
            <ToastContainer />
          </CartModel>
        )}

        {/* Sorting Dropdown */}
      </header>
      <div className="flex justify-end mt-5 mr-2">
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="px-2 py-1 bg-green-600 text-white rounded text-sm"
        >
          <option value="default">Filter</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>

      {/* Product Grid */}

      <div className="grid sm:grid-cols-1 tablet:grid-cols-2 tablet:gap-x-20 tablet:gap-y-5 tablet:w-[620px] tablet:ml-auto tablet:mr-auto desktop:grid-cols-3 desktop:w-[900px] xll:grid-cols-3 xll:w-[1100px] xll:gap-x-10 biglap:grid-cols-6 biglap:w-[2000px] biglap:gap-x-8">
        {currentProducts.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>

      {/* Pagination Controls */}

      {productData.length > 0 && (
        <div className="sm:mt-10 sm:flex sm:gap-1 sm:justify-center mymob:gap-x-3 tablet:mt-20 tablet:flex tablet:justify-center tablet:gap-2 tablet:gap-x-20 flex-wrap">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-blue-800 text-white cursor-pointer rounded-md w-9 flex justify-center items-center h-9 disabled:opacity-50"
          >
            <FaLessThan />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNum) => (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`px-3 py-1 rounded-full cursor-pointer font-Roboto ${
                  pageNum === currentPage
                    ? "bg-blue-500 text-black"
                    : "bg-slate-200"
                }`}
              >
                {pageNum}
              </button>
            )
          )}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-blue-800 cursor-pointer text-white active:text-black disabled:opacity-50 rounded-md w-9 flex justify-center items-center h-9 active:bg-blue-600"
          >
            <FaGreaterThan />
          </button>
        </div>
      )}
    </>
  );
}

export default Products;
