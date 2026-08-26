// const express= require("express");
// const bcrypt= require("bcrypt");
// const jwt = require("jsonwebtoken");
// const auth=require("./middleware/auth");
// const app =express();
// // app.get("/",async (req,res)=>{
// //     // const password="ali1234";
// //     // const hashPassword= await bcrypt.hash(password,10);
// //     // const isMatch= await bcrypt.compare("ali1234", hashPassword);
// //     // console.log(isMatch);
// //     // res.send("home route");
// //     const token =jwt.sign(
// //         {
// //             userId : "ali999",
// //             role: "student"
// //         },
// //         "ali22132",
// //         {
// //             expiresIn:"1h"
// //         }
// //     );
// //     console.log(token);
// //     res.cookie("session_id",token);
    
// //     res.json({
// //         message :"login successfully",
// //         token
// //     });
// //     app.get("/dashboard", auth,(req,res)=>{
// //         console.log("protected route using auth middleware");
// //         res.send("on dashboard");
// //     })
// // })
// // app.listen(3000, () => {
// //     console.log("Server is running on port 3000");
// // });
// app.get("/", (req, res) => {
//     const token = jwt.sign(
//         {
//             userId: "ali999",
//             role: "student"
//         },
//         "ali22132",
//         {
//             expiresIn: "1h"
//         }
//     );
//     res.cookie("session_id", token);
//     res.json({
//         message: "Login successfully",
//         token
//     });
// });
// app.get("/dashboard", auth, (req, res) => {
//     console.log("Protected route using auth middleware");
//     res.send("Welcome to Dashboard");
// });
// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });
const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const auth = require("./middleware/auth");
const app = express();
app.use(cookieParser());
app.get("/", (req, res) => {
    const token = jwt.sign(
        {
            userId: "ali999",
            role: "student"
        },
        "ali22132",
        {
            expiresIn: "1h"
        }
    );
    console.log(token);
    res.cookie("session_id", token);
    res.json({
        message: "login successfully",
        token: token
    });
});
app.get("/dashboard", auth, (req, res) => {
    console.log("protected route using auth middleware");
    res.send("Welcome to Dashboard");
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});