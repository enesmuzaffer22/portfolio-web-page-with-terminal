import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import TerminalScreen from "../components/terminal-screen/TerminalScreen";
import ParticlesBackground from "../components/particles-background/ParticlesBackground";

function Layout() {
  const [isShellOpen, setIsShellOpen] = useState(false);

  const handleShellOpen = (data) => {
    setIsShellOpen(data);
  };

  return (
    <>
      <ParticlesBackground />
      <TerminalScreen
        isShellOpenProp={isShellOpen}
        setIsShellOpen={setIsShellOpen}
      />
      <div className="flex flex-col justify-between h-screen-dynamic relative z-1">
        <Navbar />
        <Outlet />
        <Footer toggleShell={handleShellOpen} />
      </div>
    </>
  );
}

export default Layout;
