import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import Portfolio from "./pages/Portfolio/Portfolio";

function App() {
  return (
    <>
      <div className="App"></div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
