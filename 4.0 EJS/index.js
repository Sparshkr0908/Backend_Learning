import express from "express"

const app = express();
const port = 5501;

app.get("/",(req, res)=>{
    //for weekend
    //"02 August 2025 11:00:00"
    //for weekday
    //"04 August 2025 "
    const today = new Date();
    const day = today.getDay();
    console.log(day);

    let type = "aaj to weekday hai";
    let adv = "kaam karna parega BSDK";

    if(day===0 || day==6){
        type = "aaj weekend hai";
        adv = "mast souga benstocks";
    }

    res.render("index.ejs",{
        dayType: type,
        advice: adv,
    });
});

app.listen(port, ()=>{
    console.log(`listening at port ${port}`)
})