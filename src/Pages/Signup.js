import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    accessNo: "",
    bookTaken: "",
  });

  const navigate = useNavigate(); // Initialize useNavigate

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target; // Get the name and value from the input
    setFormData({
      ...formData, // Spread the previous form data
      [name]: value, // Update the key corresponding to the input name
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Signup Data Submitted:\n${JSON.stringify(formData, null, 2)}`);
    navigate("/signin"); // Redirect to the Sign-In page
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Signup Page</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          width: "300px",
          margin: "0 auto",
        }}
      >
        {/* Name Input */}
        <div style={{ width: "100%" }}>
          <label>Name:</label>
          <input
            type="text"
            name="name" // Matches the "name" key in formData
            value={formData.name}
            onChange={handleChange}
            required
            style={{ padding: "10px", width: "100%" }}
          />
        </div>

        {/* Email Input */}
        <div style={{ width: "100%" }}>
          <label>Email:</label>
          <input
            type="email"
            name="email" // Matches the "email" key in formData
            value={formData.email}
            onChange={handleChange}
            required
            style={{ padding: "10px", width: "100%" }}
          />
        </div>

        {/* Access Number Input */}
        <div style={{ width: "100%" }}>
          <label>Access Number:</label>
          <input
            type="text"
            name="accessNo" // Matches the "accessNo" key in formData
            value={formData.accessNo}
            onChange={handleChange}
            required
            style={{ padding: "10px", width: "100%" }}
          />
        </div>

        {/* Book Taken Input */}
        <div style={{ width: "100%" }}>
          <label>Book Taken:</label>
          <input
            type="text"
            name="bookTaken" // Matches the "bookTaken" key in formData
            value={formData.bookTaken}
            onChange={handleChange}
            required
            style={{ padding: "10px", width: "100%" }}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
