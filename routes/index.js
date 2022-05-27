const express = require("express");

// Initialize Router
const router = express.Router();

// Define route for the root controller
const indexCtrl = require("../controllers/index");

// define the behaviour at each URL (define the path, declare the defined root controller, specify the behaviour)
router.get("/", indexCtrl.index_get)




module.exports = router;