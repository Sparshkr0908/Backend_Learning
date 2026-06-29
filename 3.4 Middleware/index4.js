import express from 'express';
import bodyParser from 'body-parser';
import {dirname} from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 5501;
var bandname = ""

app.use(bodyParser.urlencoded({extended: true}));

function generateBandName(req,res,next){
  console.log(req.body);
  bandname = req.body['streets'] + req.body['pets'];
  next();
};

app.use(generateBandName);

app.get("/", (req,res)=>{
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req,res)=>{
  res.send(`<h1> BandName Generated is: </h1><h2>${bandname}</h2>`)
});


app.listen(port, ()=>{
  console.log(`Server is running at port ${port}`);
});