const mongoose = require("mongoose");
// import mongoose from "mongoose";


const urlSchema = new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true
    },
    redirectUrlId:{
        type:String,
        required:true,
        
    },
    visitedHistory : [{timestamp:{type:Number}}]
} , {timestamp:true})

const URL = mongoose.model("url" , urlSchema);

module.exports = URL;
// export default URL;