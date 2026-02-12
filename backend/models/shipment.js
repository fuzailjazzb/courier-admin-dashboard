const mongoose = require("mongoose");

const shipmentSchema = new mongoose.Schema({
  pickup: {
    type: String,
    required: true
  },
  delivery: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: "Pending"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Shipment", shipmentSchema);
