const express = require("express");
const dotenv = require("dotenv");
const studentRoutes = require("./src/routes/studentRoutes");
const { connectDB } = require("./src/utils/db");
const { logger } = require("./src/middlewares/logger");
const path = require("path");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(logger);

// Routes
app.use("/api/v1/students", studentRoutes);
app.get("/api/v1/healthcheck", (req, res) => {
  res.set("Cache-Control", "no-store"); // Disable caching
  res.status(200).json({ status: "OK" });
});

// Start server and connect to DB
connectDB()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error("Failed to start server:", err);
  });
