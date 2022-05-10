const express = require('express');
const app = express();
const PORT = 5000;

app.use("/",(req,res)=>{
    res.send("Hello Nitin welcome to AWS...");
});

app.listen(PORT,(req,res)=>{
    console.log("server is running on Port : 5000");
})