import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./Components/Navbar";
import Home from "./Home";

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<div>Get Started Page</div>} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
