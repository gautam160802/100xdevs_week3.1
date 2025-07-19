// const express = require("express");
// const app = express();

// app.get("/health-checkup", function (req, res) {
//   const username = req.headers.username;
//   const password = req.headers.password;
//   const kidneyId = parseInt(req.query.kidneyId);

//   if (username != "harkirat" || password != "pass") {
//     res.status(400).json({ msg: "somethings up with your inputs" });
//     return;
//   }

//   if (kidneyId !== 1 && kidneyId !== 2) {
//     res.status(400).json({ msg: "sssomethings up with your inputs" });
//     return;
//   }

//   res.json({
//     msg: "Your kidney is fine!",
//   });
// });

// app.listen(3000);

// Find the average time your server is taking to handle requests

const express = require("express");
const app = express();

app.use(express.json());

app.post("/health-checkup", function (req, res) {
  const kidneys = req.body.kidneys;
  const kidneyLength = kidneys.length;

  res.send("you have " + kidneyLength + "kidneys");
});
app.listen(3000);
