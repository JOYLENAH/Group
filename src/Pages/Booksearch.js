import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function BookSearch() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const history = useHistory(); // For navigation

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchResult(`Searching for "${title}" by ${author}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Book Search</h2>
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
        onSubmit={handleSearch}
      >
        <label style={{ marginBottom: "5px", fontSize: "14px", fontWeight: "bold" }}>
          Book Title:
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter book title"
          style={{
            marginBottom: "15px",
            padding: "10px",
            width: "100%",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        <label style={{ marginBottom: "5px", fontSize: "14px", fontWeight: "bold" }}>
          Author Name:
        </label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter author name"
          style={{
            marginBottom: "20px",
            padding: "10px",
            width: "100%",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

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
          Search
        </button>
      </form>

      {searchResult && <p style={{ marginTop: "20px", fontSize: "16px", color: "#4CAF50" }}>{searchResult}</p>}

      {/* Button to Navigate to Books Page */}
      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => history.push("/books")}
      >
        Go to Books
      </button>
    </div>
  );
}

export default BookSearch;
