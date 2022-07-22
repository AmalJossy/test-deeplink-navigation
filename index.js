const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// sendFile will go here
app.get("/", function (req, res) {
  res.set("Content-Security-Policy", "default-src 'self' flexofficial.in; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'");
  res.sendFile(path.join(__dirname, "/test.html"));
});
app.get("/nested", function (req, res) {
  res.sendFile(path.join(__dirname, "/iframe/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
