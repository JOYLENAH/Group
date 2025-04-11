import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

// Home Page Component
function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Brightminds!</h1>
      <p>Where u can get all knowledge!</p>
      <button
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#486770",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => navigate("/get-started")}
      >
        Get Started
      </button>
    </div>
  );
}

// Get Started Page Component
function GetStarted() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Get Started</h1>
      <p>Choose an option to continue:</p>
      <button
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#486770",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginRight: "10px",
        }}
        onClick={() => alert("Navigate to Sign In")}
      >
        Sign In
      </button>
      <button
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#61dafb",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => alert("Navigate to Sign Up")}
      >
        Sign Up
      </button>
    </div>
  );
}

// Main App Component with Routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>
    </Router>
  );
}

export default App;
