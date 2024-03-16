require("dotenv").config();
const express = require("express");
const parser = require("body-parser");
const mongoose = require("mongoose");
const md5 = require("md5"); // use as md5(message)

const app = express();

app.use(parser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/register", (req,res) => {
   const {name,email,password} = req.body;
   
})

app.listen(3001, async () => {
  await mongoose.connect(
    "mongodb+srv://gamified-quizzlet:hexacore@cluster0.jikcljx.mongodb.net/"
  );
  console.log("Server set up to listen on port 3001.");
});
