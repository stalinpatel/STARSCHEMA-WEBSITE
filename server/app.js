const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/database");
const errorHandler = require("./middleware/errorHandler");
const allRoutes = require("./routes/allRoutes");
const port = process.env.PORT || 5000;
const leadsRouter = require('./routes/leads.routes');
const mongoose = require("mongoose");
require("dotenv").config();
console.log("Leads router loaded:", leadsRouter ? "YES" : "NO");

const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", leadsRouter);


// DB Connection
connectDB();

// ROUTES (all your API routes will start with /starschema)
app.use("/starschema", allRoutes);

// Root test route
app.get("/", (req, res) => {
  res.send("APIs SERVER is perfectly working..");
});

// Error Handler
app.use(errorHandler);

// 404 Not Found
app.use((req, res) => {
  res.status(404).json({
    message: "Your requested API not found",
  });
});

// Server Listener
app.listen(port, () => {
  console.log(`Server running at port:${port}`);
});
