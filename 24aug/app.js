const express = require("express");
const app = express();
const {auth,status} = require("./middleware/auth");
const {premium} = require("./middleware/premium");
const cookieParser = require("cookie-parser");
const PORT = 3000;

// app.use((req,res,next)=>{
//     console.log("Universal middleware...");
//     next();
// })

// app.use("/debojit",(req,res,next)=>{
//     console.log("debojit middleware");
//     next();
// })

// const login = (req,res,next)=>{
//     console.log("login middleware...");
//     next();
// }

app.use(cookieParser());

app.get("/",auth,(req,res)=>{
    console.log(status);
    console.log(req.cookies);
    res.send(req.cookies)
    
})

app.get("/jiopremium",premium,(req,res)=>{
    res.send("premium page");

})

// app.get("/",(req,res)=>{
//     res.send("home route");
// })

// app.get("/payment",login,(req,res,next)=>{
//     res.send("Payment route");
// })

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
    
})