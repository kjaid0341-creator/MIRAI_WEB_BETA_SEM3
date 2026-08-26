const express = require("express");
const session = require("express-session");
const flash = require("connect-flash");

const app = express();

app.use(
    session({
        secret: "mysecret",
        resave: false,
        saveUninitialized: true
    })
);

app.use(flash());

app.get("/", (req, res) => {
    req.session.username = "user";
    res.send("Session set");
});

app.get("/get", (req, res) => {
    res.send(req.session.username);
});

app.get("/flash", (req, res) => {
    req.flash("success", "Logged in successfully");
    res.send("Flash message set");
});

app.get("/message", (req, res) => {
    const message = req.flash("success");
    res.send(message);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});