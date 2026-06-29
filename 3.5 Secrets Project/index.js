import express from 'express';
import bodyParser from 'body-parser';
import {dirname} from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 5501;
var userIsAuthorised = false;

app.use(bodyParser.urlencoded({extended:true}));

function userAuthentication(req,res,next){
    const password = req.body["password"];
    if(password === "ILoveProgramming" ){
        userIsAuthorised = true;
    }
    next();
};

app.use(userAuthentication);

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/public/index.html")
});

app.post("/check",(req,res)=>{
    if(userIsAuthorised){
        res.sendFile(__dirname + "/public/secret.html");
    }
    else{
        res.send("wrong password try again. ");
    }
});

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
});