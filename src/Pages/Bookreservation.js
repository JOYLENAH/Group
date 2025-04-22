import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // Import useHistory for navigation

function BookReservation() {
  const [bookTitle, setBookTitle] = useState("");
  const [email, setEmail] = useState("");
  const [notificationMessage, setNotificationMessage] = useState("");

  const history = useHistory(); // Navigation hook

  const handleReservation = (e) => {
    e.preventDefault();
    setNotificationMessage(
      `You have successfully reserved "${bookTitle}". A notification will be sent to ${email} when it's available!`
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Book Reservation</h2>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          width: "80%",
          maxWidth: "400px",
          margin: "auto",
        }}
        onSubmit={handleReservation}
      >
        {/* Book Title Input */}
        <label style={{ marginBottom: "5px", fontSize: "14px", fontWeight: "bold" }}>
          Book Title:
        </label>
        <input
          type="text"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
          placeholder="Enter book title"
          style={{
            marginBottom: "15px",
            padding: "10px",
            width: "100%",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        {/* Email Input */}
        <label style={{ marginBottom: "5px", fontSize: "14px", fontWeight: "bold" }}>
          Email Address:
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          style={{
            marginBottom: "20px",
            padding: "10px",
            width: "100%",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        {/* Reservation Button */}
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Reserve Book
        </button>
      </form>

      {/* Notification Message */}
      {notificationMessage && (
        <p style={{ marginTop: "20px", fontSize: "16px", color: "#4CAF50" }}>
          {notificationMessage}
        </p>
      )}

      {/* Back to Home Button */}
      <button
        style={{
          marginTop: "30px",
          padding: "10px 20px",
          backgroundColor: "#add8e6", // Light blue color
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => history.push("/")} // Navigate back to homepage
      >
        Back to Home
      </button>
    </div>
  );
}

export default BookReservation;
