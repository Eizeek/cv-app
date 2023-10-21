import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
// import { useLayoutEffect } from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {
  // const { pathname } = useLocation();

  // useLayoutEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "auto" });
  // }, [pathname]);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "yellow",
      mixBlendMode: "difference",
    },
  };

  return (
    <>
      <div className="App">
        <motion.div
          className="cursor"
          variants={variants}
          animate={cursorVariant}
        />
      </div>
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
