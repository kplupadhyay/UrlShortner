const express  = require("express")
// import { Express } from "express"

const router = express.Router()

const {handleUrl , gethistory} = require("../controller/url.js")
// import handleUrl from "./controller/url.js"

router.post("/get" , handleUrl)

router.get("/analysis/:shortIds" ,gethistory )
module.exports = router;
// export default router