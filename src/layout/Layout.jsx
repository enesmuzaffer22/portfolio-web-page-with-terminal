import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function Layout() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
