import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();

  const linkStyle = (path) =>
    pathname === path
      ? "text-white font-bold flex items-center gap-2"
      : "text-white flex items-center gap-2";

  const links = [
    { path: "/", label: "HOME" },
    { path: "/lets-meet", label: "LET'S MEET" },
    { path: "/workin-on", label: "WORKIN' ON" },
  ];

  // iconStyle fonksiyonunu güncelle
  const getIcon = (path) => {
    if (pathname === path) {
      return ""; // aktif sayfada ikon gösterilmesin
    }

    const currentIndex = links.findIndex((link) => link.path === pathname);
    const targetIndex = links.findIndex((link) => link.path === path);

    if (targetIndex < currentIndex) {
      return "bi bi-arrow-left-circle"; // sol ok
    } else if (targetIndex > currentIndex) {
      return "bi bi-arrow-right-circle"; // sağ ok
    }

    return ""; // default
  };

  return (
    <div className="flex justify-between p-12 bg-black border-b-1 border-white">
      <div className="logo-container w-auto h-auto">
        <img src={logo} alt="MY" width={78} height={34} />
      </div>

      <div className="links flex gap-8 items-center">
        {links.map((link, index) => (
          <Link key={index} to={link.path} className={linkStyle(link.path)}>
            {link.label}
            {getIcon(link.path) && <i className={getIcon(link.path)}></i>}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
