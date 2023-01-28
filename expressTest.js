const express = require("express");
const app = express();
var portNo = 3000;

app.get("/", function (req, res) {
  res.send("helloworld");
});

app.get("/user/:id", function (req, res) {
  const q = req.params;
  console.log(q.id);
  res.json({ userId: q.id });
});

app.get("/dog", function (req, res) {
  res.send({ sound: "멍멍" });
});
app.get("/cat", function (req, res) {
  res.send({ sound: "냐옹" });
});

app.listen(portNo, () => {
  console.log("now listening port no :", portNo);
});
