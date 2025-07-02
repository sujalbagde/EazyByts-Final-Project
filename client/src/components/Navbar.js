import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <Link to="/" style={{ marginRight: 10 }}>
        Home
      </Link>
      <Link to="/events" style={{ marginRight: 10 }}>
        Events
      </Link>
      <Link to="/my-bookings" style={{ marginRight: 10 }}>
        MyBookings
      </Link>
      <Link to="/admin" style={{ marginRight: 10 }}>
        Admin
      </Link>
      <Link to="/login" style={{ marginRight: 10 }}>
        Login
      </Link>
      <Link to="/event-detail" style={{ marginRight: 10 }}>
        EventDetail
      </Link>
      <Link to="/register">Register</Link>
    </nav>
  );
}

export default Navbar;
