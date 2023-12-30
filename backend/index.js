import express from "express";

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
  res.status(202).json({ username: username, password: password });
});

app.listen(3000, () => {
  console.log("App is running");
});
