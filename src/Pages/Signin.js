import React from "react";
import { useHistory } from "react-router-dom";

function SignIn() {
  const history = useHistory();

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Navigation Buttons Above */}
      <div style={{ marginBottom: "20px" }}>
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
          onClick={() => history.push("/signup")}
        >
          Go to Sign Up
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
          onClick={() => history.push("/")}
        >
          Go to Home
        </button>
      </div>

      <h2>Sign In</h2>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <label style={{ marginBottom: "5px", fontSize: "14px", fontWeight: "bold" }}>
          Email:
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          style={{
            marginBottom: "15px",
            padding: "10px",
            width: "300px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        <label style={{ marginBottom: "5px", fontSize: "14px", fontWeight: "bold" }}>
          Password:
        </label>
        <input
          type="password"
          placeholder="Enter your password"
          style={{
            marginBottom: "20px",
            padding: "10px",
            width: "300px",
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
          onClick={(e) => {
            e.preventDefault();
            alert("Signed in successfully!");
            history.push("/");
          }}
        >
          Sign In
        </button>
      </form>

      {/* Navigation Buttons Below */}
      <div style={{ marginTop: "20px" }}>
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
          onClick={() => history.push("/signup")}
        >
          Go to Sign Up
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
          onClick={() => history.push("/")}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}

export default SignIn;
