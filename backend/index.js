import express from "express";
import jwt from "jsonwebtoken";

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.status(200).send("HELLOOO");
});

app.get("/signin", (req, res) => {
  const username = req.query.username;
  const password = req.query.password;
  const Token = jwt.sign({ username: username }, "shreyas");
  res.status(202).json({ Token });
});

app.get("/verify", (req, res) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, "shreyas");
  if (decoded) {
    return res.status(200).json({ messege: decoded });
  } else {
    return res.status(400).json({ messege: decoded});
  }
});

app.listen(3000, () => {
  console.log("App is running");
});
