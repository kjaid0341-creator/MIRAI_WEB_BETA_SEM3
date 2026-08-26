// const express = require("express");
// const fs = require("fs");
// const app = express();
// app.set("view engine", "ejs");
// const port = 3000;

// app.get("/", (req, res) => {
//     res.send("home route...");
// });

// app.get("/getdata", (req, res) => {
//     const data = fs.readFileSync("MOCK_DATA.json", "utf-8");
//     const users= JSON.parse(data)
//     // console.log(data);
//     res.render("index",{users});
// });

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });



const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

app.set("view engine", "ejs");

// To read form data
app.use(express.urlencoded({ extended: true }));

// Home
app.get("/", (req, res) => {
    res.redirect("/getdata");
});

// Show all users
app.get("/getdata", (req, res) => {
    const filePath = path.join(__dirname, "MOCK_DATA.json");

    const data = fs.readFileSync(filePath, "utf-8");
    const users = JSON.parse(data);

    res.render("index", { users });
});

// Show form page
app.get("/adduser", (req, res) => {
    res.render("form");
});

// Add new user
app.post("/adduser", (req, res) => {
    const filePath = path.join(__dirname, "MOCK_DATA.json");

    const data = fs.readFileSync(filePath, "utf-8");
    const users = JSON.parse(data);

    const newUser = {
        id: users.length + 1,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender
    };

    users.push(newUser);

    fs.writeFileSync(
        filePath,
        JSON.stringify(users, null, 2)
    );

    res.redirect("/getdata");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});