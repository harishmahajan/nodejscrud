const mongoose = require("mongoose");
const config = require("./index");
mongoose.connect(config.db.url,{useNewUrlParser:true},(error, response)=>{
    if(error)
    console.log("Something wen wrong...");
    else
    console.log("Database connected.");
});