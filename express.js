const express = require("express")
const app = express();
const nunjucks = require("nunjucks")

app.set("view engine","html")
nunjucks.configure("./html",{
    express:app
})

app.get("/main",(req,res)=>{
    res.render("main.html")
})

app.listen(3000,()=>{
    console.log("server onload")
})

