const express= require('express');
const app=express();
const PORT = 3000;
const{products}=require('./data');
console.log(products);
const cors=require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get("/",(req,res)=>{
    res.send("Hello world");
});
app.get("/api",(req,res)=>{
    res.send("api is working");
});
app.get("/api/products",(req,res)=>{
    res.json(products);
})
app.listen(PORT,()=>{
    console.log('Server is running on 3000');
});