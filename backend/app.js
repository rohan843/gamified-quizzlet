require("dotenv").config();
const express = require("express");
const parser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const User = require('./models/User.js');
const jwt= require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const md5 = require("md5"); // use as md5(message)
const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = 'adsfafcxvcxbeqerwer';

const app = express();

app.use(parser.urlencoded({ extended: true }));
app.use(express.json()); // to convert json to javascript object
app.use(cookieParser());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});


app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const userDoc = await User.create({ // async function
            name,
            email,
            password: bcrypt.hashSync(password, bcryptSalt),
        })
        res.json(userDoc);
    } catch(e) {
        res.status(422).json();// check it out
    }
});

app.post('/login', async (req,res) => {
    //console.log('x');
    const {email,password}= req.body;
    const userDoc= await User.findOne({email});
    
    if(userDoc){
        const passOk= bcrypt.compareSync(password, userDoc.password);
        if(passOk){
            jwt.sign({email: userDoc.email, id: userDoc._id}, jwtSecret,{}, (err,token) => {
                if(err) throw err;
                res.cookie('token', token).json(userDoc);
            })
            
        }
        else{
            res.status(422).json('pass not ok');
        }
    }
    else {
        res.status(422).json('not found');
    }
});

app.listen(3001, async () => {
  await mongoose.connect(
    "mongodb+srv://gamified-quizzlet:hexacore@cluster0.jikcljx.mongodb.net/"
  );
  console.log("Server set up to listen on port 3001.");
});
