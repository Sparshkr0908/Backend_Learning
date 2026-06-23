import express from "express";
import morgan from "morgan";

const app = express();
const port = 5501;

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello This is me kumar Sparsh");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
