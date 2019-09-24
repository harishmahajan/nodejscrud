const mongoose = require("mongoose");
const userModel = mongoose.model("userModel");

exports.createUser = async(req,res)=>{
    let requestData = new userModel();
    requestData.name = "awsssddd";
    requestData.email = "hpm@gmail.com";

    userModel.create(requestData,async (e,r)=>{
        if(e)
        res.json(e)
        else
        res.json(r)
    })
};

exports.updateUser = async(req,res)=>{
    let requestData = {};
    requestData.name = "harish";
    requestData.email = "harish@gmail.com";
    userModel.update({_id:"5d5d2203cad16a30c02fc770"}, {$set : requestData}, {upsert : true}, await function(error, success){
        if(error)
        res.json(error);
        else
        res.json(success);
    })
};

exports.deleteUser = async(req,res)=>{
    userModel.remove({_id:"5d5d2203cad16a30c02fc770"},await function(e,r){
        if(e)
        res.json(e);
        else
        res.json(r);
    })
}

exports.listUser = async(req,res)=>{
    let data = await userModel.find();
    res.json(data);
}