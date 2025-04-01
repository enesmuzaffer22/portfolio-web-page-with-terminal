import React from "react";
import { RouterList } from "./route/Router";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Layout from "./layout/Layout";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <>
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
