import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: "url('/student.jpg')", // Adjust the path if needed
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <header style={{ textAlign: "center", color: "white" }}>
        <h1>Welcome to My Library App</h1>
        <p>Explore, discover, and manage your library with ease!</p>

        {/* First Button */}
        <button
          style={{
            margin: "10px",
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#61dafb",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => alert("First Button clicked")}
        >
          First Button
        </button>

        {/* Second Button */}
        <button
          style={{
            margin: "10px",
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#486770",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => alert("Second Button clicked")}
        >
          Second Button
        </button>

        {/* Get Started Button */}
        <button
          style={{
            marginTop: "20px",
            padding: "10px 30px",
            fontSize: "18px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/get-started")}
        >
          Get Started
        </button>
      </header>
    </div>
  );
}

export default Home;
