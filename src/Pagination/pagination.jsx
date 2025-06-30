// components/ProductPagination.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "../Pages/ProductsDetail";
import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa";

function ProductPagination() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
      } catch (err) {
        console.error("API Error:", err);
      }
    };

    fetchProducts();
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Products</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {currentProducts.map((prod) => (
          <Product key={prod.id} product={prod} />
        ))}
      </div>

      {/* Pagination Numbers */}

      {products && (
        <div className="mt-6 flex justify-center gap-2 flex-wrap">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            <FaLessThan />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNum) => (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`px-3 py-1 rounded ${
                  pageNum === currentPage
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 hover:bg-gray-300"
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
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            <FaGreaterThan />
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductPagination;
