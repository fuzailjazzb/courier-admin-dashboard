const express = require("express");
const Shipment = require("../models/shipment");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

/* Create Shipment */
router.post("/create", protect, async (req, res) => {
  const shipment = await Shipment.create(req.body);

  res.json({
    msg: "Shipment Created ✅",
    shipment
  });
});

/* Get All Shipments */
router.get("/all", protect, async (req, res) => {
  const shipments = await Shipment.find().sort({ createdAt: -1 });

  res.json(shipments);
});

module.exports = router;
