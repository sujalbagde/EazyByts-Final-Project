const express = require("express");
const Event = require("../models/Event");
const auth = require("../middleware/auth");
const router = express.Router();

// Get all events
router.get("/", async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

// Get event by ID
router.get("/:id", async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (!event) return res.status(404).json({ msg: "Event not found" });
  res.json(event);
});

// Create event (admin only)
router.post("/", auth(["admin"]), async (req, res) => {
  const event = new Event(req.body);
  await event.save();
  res.status(201).json(event);
});

// Update event (admin only)
router.put("/:id", auth(["admin"]), async (req, res) => {
  const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(event);
});

// Delete event (admin only)
router.delete("/:id", auth(["admin"]), async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.json({ msg: "Event deleted" });
});

module.exports = router;
