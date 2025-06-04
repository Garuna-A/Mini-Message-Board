const express = require("express");
const app = express();
const path = require("node:path");
const { text } = require("node:stream/consumers");

app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
const messages = [
    {
      text: "Hi there!",
      user: "Hippo",
      added: "Wed Jun 04 2025 12:50:01 GMT+0530 (India Standard Time)"
    },
    {
      text: "Hello World!",
      user: "Crate",
      added: "Wed Jun 04 2025 12:57:01 GMT+0530 (India Standard Time)"
    }
];
  
app.get("/",(req,res)=>{
    res.render("index",{title:"Mini Messageboard",messages:messages});
});

app.post("/new",(req,res)=>{
    messages.push({
        text: req.body.text,
        user: req.body.user,
        added: new Date(),
    })
    res.redirect("/");
})

app.get("/new",(req,res)=>{
    res.render("message", {title:"Mini Messageboard"});
})


app.listen(3000,()=>{
    console.log("Express now running at http://localhost:3000");
});