import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 5501;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
  res.render("index.ejs");
});

app.post("/submit", (req,res)=>{
  const data = req.body["Firstname"].length + req.body["lastname"].length;
  res.render("index.ejs", {infodata: data});
});

app.listen(5501, ()=>{
  console.log(`The server is running at port ${5501}`);
});