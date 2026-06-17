const fs = require("fs");

fs.writeFile("messagess.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

fs.readFile("messagess.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
