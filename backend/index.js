require("dotenv").config();

const express = require('express');
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const uri = process.env.MONGO_URL;

const app = express();

app.get("/", (req, res)=>{
    res.send("This is Home Route.")
})

app.listen(PORT, ()=>{
    console.log(`app is listing...`);
    mongoose.connect(uri);
    console.log("DB is connected!");
})