import React, { useEffect, useState } from "react";
import { RouterList } from "./route/Router";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Layout from "./layout/Layout";
import AnimatedCursor from "react-animated-cursor";

function App() {
  const [isDesktop, setIsDesktop] = useState(false);

  // Viewport yüksekliğini ayarlayan fonksiyon
  useEffect(() => {
    // Viewport yüksekliğini doğru şekilde ayarla
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    // Check if device is desktop
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024); // 1024px is a common breakpoint for desktop
    };

    // İlk yüklemede ve boyut değişikliğinde çalıştır
    setViewportHeight();
    checkIfDesktop();

    window.addEventListener("resize", setViewportHeight);
    window.addEventListener("resize", checkIfDesktop);

    return () => {
      window.removeEventListener("resize", setViewportHeight);
      window.removeEventListener("resize", checkIfDesktop);
    };
  }, []);

  return (
    <>
      {isDesktop && (
        <AnimatedCursor
          innerSize={8}
          outerSize={8}
          color="255, 255, 255"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
            ".work-card-container",
          ]}
        />
      )}
      <Router>
        <Routes>
          <Route element={<Layout />}>
            {RouterList.map((item, index) => (
              <Route path={item.path} key={index} element={item.element} />
            ))}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
