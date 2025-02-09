import React from "react";
import logo from "../../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();

  const linkStyle = (path) =>
    pathname === path
      ? "text-white font-bold flex items-center gap-2"
      : "text-white flex items-center gap-2";

  return (
    <div className="flex justify-between p-12 bg-black border-b-1 border-white">
      <div className="logo-container w-auto h-auto">
        <img src={logo} alt="MY" width={78} height={34} />
      </div>

      <div className="links flex gap-8 items-center">
        <Link to="/" className={linkStyle("/")}>
          HOME
        </Link>
        <Link to="/lets-meet" className={linkStyle("/lets-meet")}>
          LET&apos;S MEET <i className="bi bi-arrow-right-circle "></i>
        </Link>
        <Link to="/workin-on" className={linkStyle("/workin-on")}>
          WORKIN&apos; ON <i className="bi bi-arrow-right-circle"></i>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
