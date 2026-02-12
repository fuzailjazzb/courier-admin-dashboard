const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/shipments", require("./routes/shipmentRoutes"));

app.get("/", (req, res) => {
  res.send("Courier Backend Running 🚀");
});

app.listen(process.env.PORT, () =>
  console.log("Server Running on Port 5000 ✅")
);
