const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = __dirname + "/model";
const app = express();
app.use(bodyParser.json());
fs.readdirSync(path).forEach((file)=>{
    if(~file.indexOf('.js'))
    require(path+"/"+file);
});
require('./routes')(app);
require('./config/connection');

app.listen(3000,()=>{
    console.log("server run on 3000");
})
