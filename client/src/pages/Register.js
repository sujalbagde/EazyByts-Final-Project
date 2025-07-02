import React, { useState } from "react";
import api from "../api"; // use your axios instance
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/api/auth/register", {
        name,
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      navigate("/login"); // Redirect to login after registration
    } catch (err) {
      setError("Registration failed. Try again.");
    }
  };

  return (
    <div className="container">
      <div className="section" style={{ maxWidth: 400, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center" }}>Register</h2>
        {error && <div className="alert alert-error">{error}</div>}
        <form onSubmit={handleRegister}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" style={{ width: "100%" }}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
