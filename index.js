const express = require("express");
// import { Express } from "express";
const URL = require("./models/url")


const app = express();

const connectToDb = require("./connection/db");
// import connectToDb from "./connection/db.js"
const router = require("./routes/url")
// import router from "./routes/url.js"


connectToDb();
app.use(express.json());

router.get("/:shortId" , async( req , res)=>{
    const shortId = req.params.shortId;

    const entry = await URL.findOneAndUpdate({shortId}, {
        $push:{
            visitedHistory:{
                timestamp : Date.now()
            }
        }
    })
    res.redirect(entry.redirectUrlId)
    // return res.json(entry.redirectUrlId)

})

const PORT=3090;
app.use("/url" , router)





app.listen(PORT,()=>{
   console.log( `server is listening on ${PORT}`)
})