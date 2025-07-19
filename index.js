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

// const express = require("express");
// const zod = require("zod");
// const app = express();
// const schema = zod.array(zod.number());

// app.use(express.json());

// app.post("/health-checkup", function (req, res) {
//   const kidneys = req.body.kidneys;
//   const response = schema.safeParse(kidneys);
//   res.send({
//     response,
//   });
// });
// app.listen(3000);

const zod = require("zod");

function validateInput(obj) {
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
  });
  const response = schema.safeParse(obj);
  console.log(response);
}

validateInput({
  email: "gk@gmail.com",
  password: "ssdddfffddda",
});
