import axios from "axios";

import React, { useState } from "react";

const Practice = ({ onClose, onLoginSuccess }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    setSuccess("");
// ==========================API =====================================================
    const url = isSignup
    
      ? "http://127.0.0.1:8000/signup"
      : "http://127.0.0.1:8000/login";

    try {
      let payload;

      if (isSignup) {
        payload = {
          name,
          email,
          password,
        };
      } else {
        payload = {
          email,
          password,
        };
      }

      const res = await axios.post(url, payload);

      setSuccess(res.data?.message || "Success ✅");
      alert(res.data?.message || "Success ✅");

      if (res.data?.access_token) {
        localStorage.setItem("token", res.data.access_token);
      }

      onLoginSuccess(res.data?.user?.name || name);

      setName("");
      setEmail("");
      setPassword("");

    } catch (err) {
      setError(
        err.response?.data?.detail || "Request failed ❌. Server error."
      );
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.container}>
        <button onClick={onClose} style={styles.closeButton}>
          &times;
        </button>

        <h2 style={styles.heading}>{isSignup ? "Create an Account" : "Login"}</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          {isSignup && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
              required
            />
          )}

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required/>

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required />

          <button type="submit" style={styles.button}>
            {isSignup ? "Sign Up" : "Login"}
          </button>

          <p>
            {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              type="button"
              onClick={() => setIsSignup(!isSignup)}
              style={styles.toggleButton}
            >
              {isSignup ? "Login" : "Sign Up"}
            </button>
          </p>

          {error && <p style={styles.error}>{error}</p>}
          {success && <p style={styles.success}>{success}</p>}
        </form>

        
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  container: {
    position: "relative",
    width: "360px",
    padding: "25px",
    borderRadius: "10px",
    backgroundColor: "#ffffff",
    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  heading: {
    marginBottom: "20px",
    fontSize: "22px",
    color: "#333",
    fontWeight: "600",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  input: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    outline: "none",
  },
  button: {
    padding: "12px",
    backgroundColor: "blue",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "500",
  },
  toggleButton: {
    background: "none",
    border: "none",
    color: "blue",
    cursor: "pointer",
    fontSize: "14px",
    textDecoration: "underline",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "15px",
    fontSize: "22px",
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#888",
  },
  error: {
    color: "red",
    marginTop: "10px",
    fontSize: "14px",
  },
  success: {
    color: "green",
    marginTop: "10px",
    fontSize: "14px",
  },
};

export default Practice;

