// server.js

const express = require("express");
const dotenv = require("dotenv");
const app = express();

// Load environment variables
dotenv.config();

// Middleware to parse JSON
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.send("Welcome to the Product API");
});

// Set port from .env or default to 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const productRoutes = require("./routes/productRoutes");

app.use("/api/products", productRoutes);
