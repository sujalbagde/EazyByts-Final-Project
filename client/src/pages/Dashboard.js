import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("/api/bookings/my", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setBookings(res.data));
  }, []);

  return (
    <div>
      <h2>My Bookings</h2>
      <ul>
        {bookings.map((b) => (
          <li key={b._id}>
            {b.event.title} ({b.status}) - Quantity: {b.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
