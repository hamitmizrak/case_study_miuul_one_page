// Kütüphaneleri çağırmak

// EXPRESS
const express = require("express");

// ROUTER
const router = express.Router();


// IMPORT DATABASE NodeJsMongoDb (Module Ekle)
const Database= require("../database/NodeJsMongoDb.js");

// ROOT 
router.get("/",(request,response)=>{
    //response.setHeader("Content-Type", "application/json")
    console.log(request.body);
    response.send("API GET ROOT / ");
});


// MODULE EXPORT
module.exports = router;