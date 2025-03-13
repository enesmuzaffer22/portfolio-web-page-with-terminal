import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";
import style from "./style.module.scss";

function Navbar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

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
    <div>
      <div
        className={`${
          isOpen ? "h-screen absolute w-full flex-col z-10" : ""
        } flex justify-between p-12 bg-black border-b-1 border-white`}
      >
        <div className="md:w-auto h-auto flex justify-between w-full">
          <img src={logo} alt="MY" width={78} height={34} />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[24px] text-white md:hidden"
          >
            <i className="bi bi-list"></i>
          </button>
        </div>

        <div
          className={`${
            isOpen
              ? "flex flex-col relative w-full h-full justify-center"
              : "hidden"
          } links gap-8 items-center md:flex`}
        >
          {links.map((link, index) => (
            <Link key={index} to={link.path} className={linkStyle(link.path)}>
              {link.label}
              {getIcon(link.path) && <i className={getIcon(link.path)}></i>}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
