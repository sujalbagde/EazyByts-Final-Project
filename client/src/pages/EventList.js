import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("/api/events").then((res) => setEvents(res.data));
  }, []);

  return (
    <div>
      <h2>Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            <Link to={`/event/${event._id}`}>{event.title}</Link>
            {" - "}
            {new Date(event.date).toLocaleString()}
          </li>
        ))}
      </ul>
      cd
    </div>
  );
}

export default EventList;
