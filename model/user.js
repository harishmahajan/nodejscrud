const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    }
})

module.exports = mongoose.model("userModel",userSchema, "tempUser");