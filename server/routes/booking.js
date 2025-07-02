const express = require("express");
const Booking = require("../models/Booking");
const Event = require("../models/Event");
const auth = require("../middleware/auth");
const router = express.Router();

// Book tickets
router.post("/", auth(["user", "admin"]), async (req, res) => {
  const { eventId, quantity } = req.body;
  const event = await Event.findById(eventId);
  if (!event || event.availableTickets < quantity) {
    return res.status(400).json({ msg: "Not enough tickets available" });
  }
  event.availableTickets -= quantity;
  await event.save();

  const booking = new Booking({
    user: req.user.id,
    event: eventId,
    quantity,
    status: "booked",
  });
  await booking.save();

  res.status(201).json(booking);
});

// Get bookings for user
router.get("/my", auth(["user", "admin"]), async (req, res) => {
  const bookings = await Booking.find({ user: req.user.id }).populate("event");
  res.json(bookings);
});

// Admin: get all bookings
router.get("/", auth(["admin"]), async (req, res) => {
  const bookings = await Booking.find().populate("user event");
  res.json(bookings);
});

module.exports = router;
