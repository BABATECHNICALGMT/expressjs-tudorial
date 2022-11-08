const express = require('express');
const path = require('path');
const app = express();

console.log(__dirname) 

app.get("/", (req, res) => {
  // res.send('hellow from the express server');
  res.send("<h2>hello worlds</h2>");
  res.send();
  console.log(__dirname)
});

app.listen(8001, () => {
  console.log("start to server")
})

