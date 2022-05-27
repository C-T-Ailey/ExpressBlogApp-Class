// Require Express
const express = require("express");

// require Mongoose
const mongoose = require("mongoose");

// Require Express EJS Layouts
const expressLayouts = require("express-ejs-layouts")

// Initialize Express
const app = express();

// Look in the Views folder for a file name layout.ejs
app.use(expressLayouts);

// port config
const PORT = 4000;

// Importing Routes
const indexRouter = require("./routes/index")


// Mounting Routes
app.use("/", indexRouter);


// Listen to Port with callback function
app.listen(PORT, () => console.log(`Running on port ${PORT}`));

// Set NodeJS to look in a folder called Views for all EJS files
app.set("view engine", "ejs");

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/blogapp",
        {useNewUrlParser: true,
        useUnifiedTopology: true},
        () => {
            console.log("mongoDB connected")
        });



//app.get("/a", (req, res) => {
//    res.render("home/another")
//})

// MVC

/* Models are closely linked to the database, 
either possessing the data which is retrieved FROM the DB, 
or possessing the data which will be send TO the DB. */

/* Views govern anything which will be visually displayed to the user */

/* Controllers take input from the user and redirect it to the relevant model. */

/* User requests something from the browser - entering a URL, clicking a link, etc
        Request lands in the web server - server.js
        Sent to routes folder
        Sent to controller
        Sent to model, which connects to DB and retrieves requested data
        Returned to controller, forwarded to View
        View calculates using forwarded data
        Returned from View to Controller to Web Server to Browser
*/