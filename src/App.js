import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Navbar from "./components/navbar/Navbar";

import "./app.css";
import Footer from "components/footer/Footer";
import Home from "components/home/Home";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/experience" element={<Works />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
