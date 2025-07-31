import express from "express";
import bodyParser from "body-parser";
const app = express();
const PORT = process.env.PORT || 3000;
let post = [];

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));
app.get("/",(req,res)=>{
    res.render("home.ejs",{
        
        posts:post,
    });
});

app.get("/create",(req,res)=>{
    res.render("creation.ejs");
});

app.post("/created",(req,res)=>{
     const newpost ={
        post : req.body["postBody"],
        title : req.body["postTitle"]
    };
    post.push(newpost);
    
    res.redirect("/");
    
})

app.listen(port,()=>{
    console.log(`Server is live at port ${port}`);
});
