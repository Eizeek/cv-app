import { Routes, Route, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <>
      <div className="content">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
