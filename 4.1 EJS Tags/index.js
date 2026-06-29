import express from "express";

const app = express();
const port = 5501;

app.get("/", (req,res)=>{
  const info = {
    title : "Ejs Tags",
    seconds: new Date().getSeconds(),
    items : ["apple", "oranges", "mangoes"],
    htmlContent: "<em>This is some em tags</em>",
  };
  res.render("index.ejs", info);
});

app.listen(port, ()=>{
  console.log(`sever is running at port ${port}`)
});