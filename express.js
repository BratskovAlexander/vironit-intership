const express = require("express");
const fs = require("fs");

const app = express();
const message = `Hello! \n Yahoo! \n I can do it!!!!!! \n I created a new file!`;
const newText = `\n I can do it!!! I added some text in this file!`;

app.get("/", function(req, res) {
  res.send(`Hello my friend!!!`);
});

app.get("/:filename", function(req, res) {
  fs.readFile(`${req.params.filename}.txt`, "utf8", function(err, data) {
    if (err) {
      res.send(`Error. This file is not exist`);
    } else {
      res.send(data);
    }
  });
});

app.post("/:filename", function(req, res) {
  fs.writeFile(`${req.params.filename}.txt`, `${message}`, function() {});
  res.send(
    `Method POST added new file ${req.params.filename}.txt in this dir ${__dirname} \n text this file:\n ${message}`
  );
});

app.put("/:filename", function(req, res) {
  fs.appendFile(`${req.params.filename}.txt`, `${newText}`, function() {});
  res.send(
    `Method PUT added new text ${newText} \n in this file: ${__filename} `
  );
});

app.delete("/:filename", function(req, res) {
  fs.unlink(`${req.params.filename}.txt`, function() {});
  res.send(`Method DELETE remove this file: ${req.params.filename}.txt`);
});

app.listen(3000, function() {
  console.log(`API started`);
});
