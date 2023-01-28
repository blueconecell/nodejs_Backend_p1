var figlet = require("figlet");
var testword = "Node.js";
var testFunc = figlet(testword, function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
testFunc;
