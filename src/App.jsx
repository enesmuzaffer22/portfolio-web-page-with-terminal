import React from "react";
import { RouterList } from "./route/Router";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Layout from "./layout/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          {RouterList.map((item, index) => (
            <Route path={item.path} key={index} element={item.element} />
          ))}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
