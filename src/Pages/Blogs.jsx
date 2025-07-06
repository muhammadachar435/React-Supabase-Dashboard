import React from "react";
import Blog from "../BlogComponent/Blog";

function Blogs({ darkMode }) {
  return (
    <div className="">
      <Blog darkMode={darkMode} />
    </div>
  );
}

export default Blogs;
