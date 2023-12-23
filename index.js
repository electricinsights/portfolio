const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

const port = process.env.PORT || 80;
try {
  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });
} catch (error) {
  console.log("unable to send file to client");
  console.log(error);
}

try {
  app.listen(port, () => {
    console.log("server running");
  });
} catch (error) {
  console.log("server error");
  console.log(error);
}
