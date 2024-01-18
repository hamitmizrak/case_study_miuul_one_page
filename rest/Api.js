// Kütüphaneleri çağırmak

// EXPRESS
const express = require("express");

// ROUTER
const router = express.Router();


// IMPORT DATABASE NodeJsMongoDb (Module Ekle)
const Database= require("../database/NodeJsMongoDb.js");

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

// http://localhost:3434/api/miuul
// GET
router.get("/miuul",(request,response)=>{
    //response.setHeader("Content-Type", "application/json")
    console.log(request.body);
    response.send("API GET ROOT 44 ");
}); //end GET (Veri Çağır)

// http://localhost:3434/api/miuul
// POST (Veri Gönder)
router.post("/miuul",(request,response)=>{
    //response.setHeader("Content-Type", "application/json")
    console.log(request.body);

   const databaseSend =new Database({
    //title description counter
    title:request.body.title,
    description:request.body.description,
    counter:request.body.counter,
   }); //end databaseSend

   // Database Send
   databaseSend.save().then(temp=>{
    response.json(temp);
   }).catch((err)=>{
    response.json(err);
   });
}); //end POST (VEri Gönder)


/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
// MODULE EXPORT
module.exports = router;