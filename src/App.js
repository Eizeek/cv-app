import "./App.css";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio/Portfolio";
// import Box from "./components/Box/Box";
function App() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />}>
        {/* <Route path="about" element={<Box />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
