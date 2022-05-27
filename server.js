// Require Express
const express = require("express");

// require Mongoose
const mongoose = require("mongoose");

// Initialize Express
const app = express();

// port config

const PORT = 4000;

// Listen to Port with callback function
app.listen(PORT, () => console.log(`Running on port ${PORT}`));