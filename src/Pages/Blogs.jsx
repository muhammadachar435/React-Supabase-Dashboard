import React from "react";
import SearchForm from "../BlogComponent/searchForm";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import BlogList from "../BlogComponent/BlogList";

export async function Loader({ request }) {
  const url = new URL(request.url);

  const searchUrl = url.searchParams.get("search");

  const searchendPoint = `https://dummyjson.com/products/search?q=${searchUrl}`;
  const response = await axios.get(searchendPoint);
  console.log(response.data);
  return { responseBlog: response.data };
}

function Blogs() {
  const data = useLoaderData();
  console.log("blog");
  return (
    <>
      <div className="">
        <BlogList data={data} />
      </div>
    </>
  );
}

export default Blogs;
