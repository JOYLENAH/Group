import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // Using useHistory

function Home() {
  const [showOptions, setShowOptions] = useState(false);
  const history = useHistory(); // Navigation hook

  const user = { role: "admin" };

  // Example reviews array
  const reviews = [
    { name: "Alice", text: "This app is amazing! Makes library management a breeze.", rating: 5 },
    { name: "John", text: "Very intuitive and easy to use. Highly recommend it!", rating: 4 },
    { name: "Sophia", text: "Great features but could use more customization options.", rating: 3 },
  ];

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh", // Allow scrolling if content exceeds height
        backgroundImage: "url('/FNEW.jpg')", // Adjusted image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowY: "scroll", // Enable scrolling
      }}
    >
      {/* Header */}
      <header
        style={{
          textAlign: "center",
          color: "white",
          margin: "50px 0 30px", // Add vertical space
        }}
      >
        <h1>PALLib</h1>
        <p>PalLib welcome you all</p>
        <p>Explore, discover, and manage your library with ease!</p>
      </header>

      {/* Buttons Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px", // Add space between buttons
          flexWrap: "wrap",
          marginBottom: "50px", // Add space below buttons
        }}
      >
        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#add8e6",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => history.push("/book-search")}
        >
          Book Search
        </button>

        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#add8e6",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => history.push("/book-reservation")}
        >
          Book Reservation
        </button>

        {user.role === "admin" && (
          <button
            style={{
              padding: "15px 30px",
              fontSize: "18px",
              backgroundColor: "#add8e6",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => history.push("/admin-dashboard")}
          >
            Admin Dashboard
          </button>
        )}

        <button
          style={{
            padding: "15px 30px",
            fontSize: "18px",
            backgroundColor: "#add8e6",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => setShowOptions(true)}
        >
          Get Started
        </button>
      </div>

      {/* Reviews Section */}
      <section
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent white
          padding: "40px 20px",
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          width: "90%",
          maxWidth: "1200px", // Limit the width
          marginBottom: "50px", // Add space at the bottom
        }}
      >
        <h2 style={{ marginBottom: "30px", color: "#333", textAlign: "center" }}>What People Are Saying</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center", // Center horizontally
            gap: "30px", // Add spacing between review boxes
            flexWrap: "wrap", // Wrap if screen width is smaller
          }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                textAlign: "left",
                width: "300px", // Fixed box width
              }}
            >
              <h4 style={{ margin: "5px 0", color: "#444" }}>{review.name}</h4>
              <p style={{ margin: "10px 0", color: "#666" }}>{review.text}</p>
              <p style={{ margin: "10px 0", color: "#FFD700" }}>⭐️ Rating: {review.rating}/5</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.8)", // Darker background
          color: "white",
          padding: "40px 20px", // Add padding for spacing
          width: "100%",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Contact Us</h2>
        <p style={{ marginBottom: "10px" }}>We'd love to hear from you! Reach out to us through:</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap" }}>
          <a
            href="mailto:support@mylibraryapp.com"
            style={{ color: "#add8e6", textDecoration: "none" }}
          >
            Email: support@mylibraryapp.com
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#add8e6", textDecoration: "none" }}
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#add8e6", textDecoration: "none" }}
          >
            Twitter
          </a>
          <a
            href="tel:+123456789"
            style={{ color: "#add8e6", textDecoration: "none" }}
          >
            Phone: +1 (234) 567-890
          </a>
        </div>
      </section>

      {/* Modal for Sign In / Sign Up Options */}
      {showOptions && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100vw",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
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
                backgroundColor: "#add8e6",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => history.push("/signin")}
            >
              Sign In
            </button>
            <button
              style={{
                margin: "10px",
                padding: "10px 20px",
                fontSize: "16px",
                backgroundColor: "#add8e6",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => history.push("/signup")}
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
              onClick={() => setShowOptions(false)}
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