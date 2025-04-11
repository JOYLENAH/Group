import React from "react";
import { useNavigate } from "react-router-dom";

function GetStarted() {
  const navigate = useNavigate();

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
        onClick={() => navigate("/signup")}
      >
        Sign Up
      </button>
    </div>
  );
}

export default GetStarted;
