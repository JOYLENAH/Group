import React, { useState } from "react";

function SignInSignUp() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: "8px",
        padding: "20px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <h2>{isSignIn ? "Sign In" : "Sign Up"}</h2>
      <form>
        <input
          type="email"
          placeholder="Email"
          style={{ margin: "10px", padding: "10px", width: "100%" }}
        />
        <input
          type="password"
          placeholder="Password"
          style={{ margin: "10px", padding: "10px", width: "100%" }}
        />
        {!isSignIn && (
          <input
            type="password"
            placeholder="Confirm Password"
            style={{ margin: "10px", padding: "10px", width: "100%" }}
          />
        )}
        <button
          type="submit"
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
      </form>
      <button
        style={{
          marginTop: "10px",
          background: "transparent",
          border: "none",
          color: "#4CAF50",
          cursor: "pointer",
        }}
        onClick={() => setIsSignIn(!isSignIn)}
      >
        {isSignIn ? "Switch to Sign Up" : "Switch to Sign In"}
      </button>
    </div>
  );
}

export default SignInSignUp;
