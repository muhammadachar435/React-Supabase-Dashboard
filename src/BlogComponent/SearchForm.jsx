import React from "react";

function SearchForm({ searchTerm, setSearchTerm }) {
  return (
    <div className="mb-4 px-4 sm:px-0 sm:w-[240px] sm:ml-10 mymob:w-[290px] myiphone:ml-14 tablet:w-[300px]  tablet:ml-0  biglap:w-[700px]  rounded-md sm:mx-auto biglap:ml-2 biglap:mr-0">
      <input
        type="text"
        placeholder="Search blogs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-md px-4 py-2 rounded-lg ring-2 ring-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-200 placeholder-gray-400"
      />
    </div>
  );
}

export default SearchForm;
