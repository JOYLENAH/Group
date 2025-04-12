import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const [showOptions, setShowOptions] = useState(false); // State for the modal
  const history = useHistory(); // For navigation

  return (
    <div
      style={{
        height: "100vh", // Full-screen height
        width: "100vw", // Full-screen width
        backgroundImage: "url('http://localhost:3003/luxury.jpg')", // Ensure the image path is correct
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // Center vertically
        alignItems: "center", // Center horizontally
      }}
    >
      <header style={{ textAlign: "center", color: "white" }}>
        <h1>Welcome to My Library App</h1>
        <p>Explore, discover, and manage your library with ease!</p>

        {/* Book Search Button */}
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
          onClick={() => history.push("/book-search")} // Navigate to Book Search Page
        >
          Book Search
        </button>

        {/* Book Reservation Button */}
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
          onClick={() => history.push("/book-reservation")} // Navigate to Book Reservation Page
        >
          Book Reservation
        </button>

        {/* Get Started Button */}
        <button
          style={{
            marginTop: "20px",
            padding: "15px 30px",
            fontSize: "18px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => setShowOptions(true)} // Show the modal
        >
          Get Started
        </button>
      </header>

      {/* Modal for Sign In / Sign Up Options */}
      {showOptions && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100vw",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "20px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              textAlign: "center",
            }}
          >
            <h2>Choose an Option</h2>
            <button
              style={{
                margin: "10px",
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => history.push("/signin")} // Navigate to Sign In Page
            >
              Sign In
            </button>
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
              onClick={() => history.push("/signup")} // Navigate to Sign Up Page
            >
              Sign Up
            </button>
            <button
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                fontSize: "14px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => setShowOptions(false)} // Close the modal
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
