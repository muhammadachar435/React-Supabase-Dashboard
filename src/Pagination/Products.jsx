import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import CartModel from "./UI/CartModel";
import Cart from "./UI/Cart";
import { GiShoppingCart } from "react-icons/gi";
import { useCart } from "./CartProvider";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

function Products({ darkMode }) {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("default");
  const itemsPerPage = 6;
  const [showcart, setshowcart] = useState(false);
  const { cart } = useCart();

  const totalquantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  function closecart() {
    setshowcart(!showcart);
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // start loading
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        await new Promise((resolve) => setTimeout(resolve, 1000)); // optional delay for UX demo
        setProductData(response.data || []);
        toast.success("Products loaded successfully!", { autoClose: 500 });
      } catch (err) {
        console.log(err.message);
        setProductData([]);
        toast.error("Failed to load products", { autoClose: 500 });
      } finally {
        setLoading(false); // end loading
      }
    };

    fetchData();
  }, []);

  // Prevent scroll when cart is open
  useEffect(() => {
    document.documentElement.style.overflowY = showcart ? "hidden" : "scroll";
  }, [showcart]);

  // Calculate pagination safely
  const totalPages = Math.ceil((productData?.length || 0) / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;

  // Sort products based on sortOrder
  let sortedProducts = [...productData];
  if (sortOrder === "lowToHigh") {
    sortedProducts.sort((a, b) => a.price - b.price);
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
            <Cart darkMode={darkMode} />
            <ToastContainer />
          </CartModel>
        )}
      </header>

      {/* Sorting Dropdown */}
      <div className="flex justify-end mt-5 mr-2">
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className={` ${
            darkMode ? "bg-[#535252] text-white" : "bg-white text-black"
          } px-2 py-1 font-sans rounded text-sm outline-none`}
        >
          <option value="default">Filter</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="flex justify-center items-center my-10">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
          <p className="ml-2 font-semibold text-blue-500">
            Loading products...
          </p>
        </div>
      )}

      {/* Product Grid */}
      <div className="grid sm:grid-cols-1 tablet:grid-cols-2 tablet:gap-x-20 tablet:gap-y-5 tablet:w-[620px] tablet:ml-auto tablet:mr-auto desktop:grid-cols-3 desktop:w-[900px] xll:grid-cols-3 xll:w-[1100px] xll:gap-x-10 biglap:grid-cols-6 biglap:w-[2000px] biglap:gap-x-8">
        {!loading &&
          currentProducts.map((product) => (
            <Product key={product.id} {...product} darkMode={darkMode} />
          ))}
      </div>

      {/* Pagination Controls */}
      {productData?.length > 0 && !loading && (
        <div className="sm:mt-10 sm:flex sm:gap-1 sm:justify-center mymob:gap-x-3 tablet:mt-20 tablet:flex tablet:justify-center tablet:gap-2 tablet:gap-x-20 flex-wrap">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`${
              darkMode
                ? "text-white active:bg-blue-600 w-9 h-9 rounded-full active:text-white"
                : "text-black active:bg-blue-600 w-9 h-9 rounded-full active:text-white"
            } cursor-pointer text-base rounded-md flex justify-center items-center disabled:opacity-50`}
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
                    ? "bg-blue-500 text-white"
                    : "bg-slate-400 text-white"
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
            className={`${
              darkMode
                ? "text-white active:bg-blue-600 w-9 h-9 rounded-full active:text-white"
                : "text-black active:bg-blue-600 w-9 h-9 rounded-full active:text-white"
            } text-base cursor-pointer disabled:opacity-50 rounded-md flex justify-center items-center`}
          >
            <FaGreaterThan />
          </button>
        </div>
      )}
    </>
  );
}

export default Products;
