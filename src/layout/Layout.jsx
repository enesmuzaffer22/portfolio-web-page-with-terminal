import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import TerminalScreen from "../components/terminal-screen/TerminalScreen";

function Layout() {
  const [isShellOpen, setIsShellOpen] = useState(false);

  const handleShellOpen = (data) => {
    setIsShellOpen(data);
  };

  return (
    <>
      <TerminalScreen
        isShellOpenProp={isShellOpen}
        setIsShellOpen={setIsShellOpen}
      />
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <Outlet />
        <Footer toggleShell={handleShellOpen} />
      </div>
    </>
  );
}

export default Layout;
