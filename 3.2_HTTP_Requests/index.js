import express from 'express';
const app = express();

app.get("/", (req,res)=>{
    res.send("<h1>Hello world !</h1>");
})

app.get("/about", (req, res)=>{
    res.send("<h1> About Me </h1> <p> Hye my name is kumar Sparsh.");
});

app.listen(5501, ()=>{
    console.log("The server is running at port 5501");
});