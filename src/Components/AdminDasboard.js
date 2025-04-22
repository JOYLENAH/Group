import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import DatePicker from "react-datepicker";
import { useHistory } from "react-router-dom"; // Import useHistory for navigation
import "react-datepicker/dist/react-datepicker.css";
import "chart.js/auto";

function AdminDashboard() {
  const [currentSection, setCurrentSection] = useState("books"); // Controls active section
  const [selectedDate, setSelectedDate] = useState(new Date()); // Selected date
  const [borrowingData, setBorrowingData] = useState([15, 25, 30, 20, 40]); // Simulated borrowing data for the day

  const history = useHistory(); // Navigation hook

  // Generate chart data dynamically based on borrowingData
  const graphData = {
    labels: ["Hour 1", "Hour 2", "Hour 3", "Hour 4", "Hour 5"],
    datasets: [
      {
        label: "Books Borrowed",
        data: borrowingData,
        backgroundColor: "#36a2eb",
      },
    ],
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Admin Dashboard</h1>
      <div style={{ marginBottom: "20px" }}>
        {/* Section Tabs */}
        <button onClick={() => setCurrentSection("books")} style={{ margin: "10px" }}>
          Books Management
        </button>
        <button onClick={() => setCurrentSection("reservations")} style={{ margin: "10px" }}>
          Reservations Management
        </button>
        <button onClick={() => setCurrentSection("users")} style={{ margin: "10px" }}>
          User Profiles
        </button>
      </div>

      {/* Active Section Content */}
      {currentSection === "books" && <p>Manage Books Here</p>}
      {currentSection === "reservations" && <p>Manage Reservations Here</p>}
      {currentSection === "users" && <p>Manage User Profiles Here</p>}

      {/* Date Picker Section */}
      <div style={{ marginTop: "20px" }}>
        <h2>Select a Date</h2>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => {
            setSelectedDate(date);

            // Simulate borrowing data change based on the date selected
            const randomData = Array.from({ length: 5 }, () => Math.floor(Math.random() * 50) + 10);
            setBorrowingData(randomData);
          }}
          dateFormat="dd/MM/yyyy"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      {/* Graph */}
      <div style={{ margin: "20px auto", width: "80%", maxWidth: "600px" }}>
        <Bar data={graphData} />
      </div>

      {/* Selected Date Display */}
      <div style={{ marginTop: "20px" }}>
        <p><strong>Selected Date:</strong> {selectedDate.toDateString()}</p>
      </div>

      {/* Back to Home Button */}
      <div style={{ marginTop: "30px" }}>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#add8e6", // Light blue color
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => history.push("/")} // Navigate back to the homepage
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default AdminDashboard;
