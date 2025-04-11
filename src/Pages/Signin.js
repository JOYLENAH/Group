import React, { useState } from "react";

function Signin() {
  const [formData, setFormData] = useState({
    name: "",
    accessNo: "",
    registrationNo: "",
    currentYear: "",
    semester: "",
    email: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Signin Data Submitted:\n${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Signin Page</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          width: "300px",
          margin: "0 auto",
          textAlign: "left",
        }}
      >
        {/* Name Input */}
        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              fontSize: "14px",
              width: "100%",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        {/* Access Number Input */}
        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <label>Access Number:</label>
          <input
            type="text"
            name="accessNo"
            value={formData.accessNo}
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              fontSize: "14px",
              width: "100%",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        {/* Registration Number Input */}
        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <label>Registration Number:</label>
          <input
            type="text"
            name="registrationNo"
            value={formData.registrationNo}
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              fontSize: "14px",
              width: "100%",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        {/* Current Year Input */}
        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <label>Current Year:</label>
          <input
            type="text"
            name="currentYear"
            value={formData.currentYear}
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              fontSize: "14px",
              width: "100%",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        {/* Semester Input */}
        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <label>Semester:</label>
          <input
            type="text"
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              fontSize: "14px",
              width: "100%",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        {/* Email Input */}
        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              fontSize: "14px",
              width: "100%",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
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
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signin;
