import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("HELLOOO");
});

app.listen(3000, () => {
  console.log("App is running");
});
