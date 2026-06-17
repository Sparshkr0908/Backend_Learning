import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
        message: "type the url: ",
        name: "URL"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    //now go to add qr image 
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('youtube.png'));
    fs.writeFile("youtube.txt", url, (err)=>{
        if (err) throw err;
        console.log("the file has been saved");
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });