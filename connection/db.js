const mongoose = require("mongoose");
// import mongoose from "mongoose";

async  function connectToDb(){
     await mongoose.connect("mongodb+srv://upadhyaykapil61:9310316463@cluster0.arwgi5s.mongodb.net/?retryWrites=true&w=majority").then(()=>{
        console.log("connected to db")
     })
} 

module.exports = connectToDb;
// export default connectToDb