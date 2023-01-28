const express = require("express");
const app = express();
var cors = require("cors");
var portNo = 3000;
app.use(cors());
app.get("/", function (req, res) {
  res.send("helloworld");
});

app.get("/user/:id", function (req, res) {
  //   const q = req.params;
  //   console.log(q.id);
  //   res.json({ userId: q.id });
  const q = req.query;
  console.log(q);
});

app.get("/sound/:name", (req, res) => {
  const { name } = req.params;
  if (name == "dog") {
    res.json({ sound: "멍멍" });
  } else if (name == "cat") {
    res.json({ sound: "야옹" });
  } else {
    res.json({ sound: "알수없음" });
  }
});

app.listen(portNo, () => {
  console.log("now listening port no :", portNo);
});
