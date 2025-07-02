import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function EventDetail() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    axios.get(`/api/events/${id}`).then((res) => setEvent(res.data));
  }, [id]);

  if (!event) return <div>Loading...</div>;

  return (
    <div>
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>Date: {new Date(event.date).toLocaleString()}</p>
      <p>Venue: {event.venue}</p>
      <p>Price: {event.price}</p>
      <p>Available Tickets: {event.availableTickets}</p>
      {/* Add booking form here */}
    </div>
  );
}

export default EventDetail;
