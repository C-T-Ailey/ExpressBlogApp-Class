const res = require("express/lib/response")

// Root route - HTTP GET
exports.index_get = (req, res) => {
    res.render("home/index.ejs", {welcomeMessage: "Welcome to my Blog App!", title: "index"})
} 