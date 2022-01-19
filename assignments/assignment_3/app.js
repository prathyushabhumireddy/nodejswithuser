const express = require("express")
const app = express();
const faker = require("faker")
const bodyParser = require("body-parser")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:false}))
var users = []
for(let i = 0;i<5;i++){
    users.push({
        name:faker.name.findName(),
        email:faker.internet.email(),
    })
}
app.set("views","./views")
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("index.ejs",{users})
})
app.get("/form",(req,res)=>{
    res.render("form.ejs")
})
app.post("/user/add",(req,res)=>{
    users.push({
        name:req.body.name,
        email:req.body.email
    })
    res.redirect("/")
})
app.listen(3000,"localhost",()=>{
    console.log("server is listening")
})