import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "../Component/Navbar";

function Routingpages() {
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
      </div>{" "}
    </>
  );
}

export default Routingpages;
