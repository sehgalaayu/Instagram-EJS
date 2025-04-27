const express = require("express");
const app = express();
const path = require("path");

const port = 8080;


app.set("view engine","ejs");

app.get("/ig/:username",(req,res)=>{
    const instData = require("./data.json");
    let {username} = req.params;
    res.render("instagram.ejs", {username});
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})
