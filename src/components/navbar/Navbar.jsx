import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";
import style from "./style.module.scss";

function Navbar() {
  const location = useLocation();
  const { pathname } = location;
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const linkStyle = (path) =>
    pathname === path
      ? "text-white font-bold flex items-center gap-2"
      : "text-white flex items-center gap-2";

  const links = [
    { path: "/", label: "HOME" },
    { path: "/lets-meet", label: "LET'S MEET" },
    { path: "/workin-on", label: "WORKIN' ON" },
  ];

  // getIcon function remains the same
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

  // Handle link click to close the mobile menu
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div
        className={`flex justify-between p-8 sm:p-12 bg-black bg-opacity-50 backdrop-blur-sm border-b-1 border-white z-10 relative`}
      >
        <div className="md:w-auto h-auto flex justify-between w-full">
          <img src={logo} alt="MY" className="w-auto h-[28px] sm:h-[34px]" />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[24px] text-white md:hidden"
          >
            <i className={`${isOpen ? "bi bi-x-lg" : "bi bi-list"}`}></i>
          </button>
        </div>

        <div className="links gap-8 items-center hidden md:flex">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={linkStyle(link.path)}
              onClick={handleLinkClick}
            >
              {link.label}
              {getIcon(link.path) && (
                <i className={`hidden md:block ${getIcon(link.path)}`}></i>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile menu with animation */}
      <div
        className={`absolute top-0 left-0 w-full bg-black bg-opacity-90 backdrop-blur-sm z-20 transition-all duration-300 ease-in-out overflow-hidden flex flex-col items-center justify-center`}
        style={{
          height: isOpen ? "calc(var(--vh, 1vh) * 100)" : "0",
          opacity: isOpen ? "100" : "0",
          transformOrigin: "top",
          transform: isOpen ? "scaleY(1)" : "scaleY(0)",
          visibility: isOpen ? "visible" : "hidden",
        }}
      >
        {isOpen && (
          <>
            {/* Add close button to the top right of mobile menu */}
            <div className="absolute top-0 right-0 p-8 sm:p-12">
              <button
                onClick={() => setIsOpen(false)}
                className="text-[24px] text-white"
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>

            <div className="flex flex-col gap-8 items-center">
              {links.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className={`${linkStyle(link.path)} text-[24px]`}
                  onClick={handleLinkClick}
                  style={{
                    animation: `fadeInUp 0.5s ease forwards`,
                    animationDelay: `${0.2 + index * 0.1}s`,
                    opacity: 0,
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
