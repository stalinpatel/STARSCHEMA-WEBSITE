const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/database");
const errorHandler = require("./middleware/errorHandler");
const allRoutes = require("./routes/allRoutes");
const port = process.env.PORT || 5000;
require("dotenv").config();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

// Routes
app.use("/starschema", allRoutes);

// Error handling middleware
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("APIs SERVER is perfectly working..");
});

// 404 Not Found Middleware
app.use((req, res, next) => {
  res.status(404).json({
    message: "Your requested API not found",
  });
});

app.listen(port, () => {
  console.log(`Server running at port:${port}`);
});
