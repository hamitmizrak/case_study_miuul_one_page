// Kütüphaneleri çağırmak

// EXPRESS
const express = require("express");

// ROUTER
const router = express.Router();

// IMPORT DATABASE NodeJsMongoDb (Module Ekle)
const Database = require("../database/NodeJsMongoDb.js");

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

// http://localhost:3434/api/miuul
// GET
router.get("/miuul", (request, response) => {
  //response.setHeader("Content-Type", "application/json")
  console.log(request.body);
  response.send("API GET ROOT 44 ");
}); //end GET (Veri Çağır)


// http://localhost:3434/api/miuul
// POST (Veri Gönder)
router.post("/miuul", (request, response) => {
  //response.setHeader("Content-Type", "application/json")
  console.log(request.body);

  const databaseSend = new Database({
    //title description counter
    title: request.body.title,
    description: request.body.description,
    counter: request.body.counter,
  }); //end databaseSend

  // Database Send
  databaseSend
    .save()
    .then((temp) => {
      response.json(temp);
    })
    .catch((err) => {
      response.json(err);
    });
}); //end POST (Veri Gönder)

// LIST
// http://localhost:3434/api/miuul/list
router.get("/miuul/list", async (request, response) => {
    //response.setHeader("Content-Type", "application/json")
    console.log(request.body);
    try {
      const find = await Database.find();
      response.json(find);
    } catch (err) {
      response.json({ message: err });
    }
  }); //end GET (Veri Çağır) Find

// FIND
// http://localhost:3434/api/miuul/65a956ae64fbfb2339da65b0
router.get("/miuul/:miuulID", async (request, response) => {
  //response.setHeader("Content-Type", "application/json")
  console.log(request.body);
  try {
    const find = await Database.findById(request.params.miuulID);
    response.json(find);
  } catch (err) {
    response.json({ message: err });
  }
}); //end GET (Veri Çağır) Find
 
// UPDATE patch: Bir kısmını güncelle
// http://localhost:3434/api/miuul/65a956ae64fbfb2339da65b0
//router.patch("/miuul/:miuulID", async (request, response) => {
router.patch("/miuul/:miuulID", async (request, response) => {
  //response.setHeader("Content-Type", "application/json")
  console.log(request.body);
  try {
    const update = await Database.updateOne(
      { _id: request.params.miuulID },
      {
        $set: { title: request.body.title },
      }
    ); //end updateOne
    response.json(update);
  } catch (err) {
    response.json({ message: err });
  }
}); //end UPDATE (Veri Güncelle)

// UPDATE
// http://localhost:3434/api/miuul/65a956ae64fbfb2339da65b0
//router.patch("/miuul/:miuulID", async (request, response) => {
router.put("/miuul/:miuulID", async (request, response) => {
  //response.setHeader("Content-Type", "application/json")
  console.log(request.body);
  try {
    const update = await Database.updateOne(
      { _id: request.params.miuulID },
      {
        $set: { title: request.body.title },
        $set: { description: request.body.description },
        $set: { counter: request.body.counter },
      }
    ); //end updateOne
    response.json(update);
  } catch (err) {
    response.json({ message: err });
  }
}); //end UPDATE (Veri Güncelle)


// DELETE
// http://localhost:3434/api/miuul/65a956ae64fbfb2339da65b0
router.delete("/miuul/:miuulID", async (request, response) => {
    //response.setHeader("Content-Type", "application/json")
    console.log(request.body);
    try {
      const find = await Database.findById(request.params.miuulID);
      response.json(find);
      const deleteData= await Database.deleteOne(find);
    } catch (err) {
      response.json({ message: err });
      response.sendStatus(404)
    }
  }); //end Delete (Veri Sil) 


/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
// MODULE EXPORT
module.exports = router;
