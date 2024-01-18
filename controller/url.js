const shortIds = require("shortid");

const URL = require("../models/url")
// import URL from "./models/url"
// var shortId = require('shortId');
// import { shortId } from "shortId";

async  function  handleUrl(req,res){
    const body = req.body;

    console.log(req.body)

    if(!body.url) return res.status(400).json({message:"enter a url"});

    const shortI = shortIds();
     await URL.create({
        shortId:shortI,
        redirectUrlId:body.url,
        visitedHistory:[]
     })
     return res.json({id:shortI})

} 

async function gethistory(req , res){
   const shortId = req.params.shortIds;

   const detail = await URL.findOne({shortId})
   return res.json({
      totalClicks:detail.visitedHistory.length,
      analysis:detail.visitedHistory
   })
}
module.exports = {handleUrl , gethistory}
// export default handleUrl;