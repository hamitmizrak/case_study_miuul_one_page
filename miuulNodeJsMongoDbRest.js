// Kütüphaneleri çağırmak

// EXPRESS
const express = require("express");

// MONGOOSE
const mongoose = require("mongoose");

// DOTENV (DB VERİ GÜVENLİĞİNİ)
require("dotenv").config();

// Body PARSE
const bodyParser=require("body-parser");

// Application
const app = express();

// Body parser added
app.use(bodyParser.json());

// Router
// app.get("/", (request, response) => {
//   response.send("Get Router Node JS + Mongo+ Rest Api");
// });

// app.get("/onepage", (request, response) => {
//   response.send("Get Router Node JS + Mongo+ Rest Api(One Page)");
// });
// Module Import (API)
const apiModule = require("./rest/Api.js")
app.use("/api",apiModule)

// DATABASE CONNECT
mongoose
  .connect(
    // "mongodb+srv://miuul:Miuul123456789.@miuulcluster.7w9jzgr.mongodb.net/?retryWrites=true&w=majority",
    process.env.MONGO_DB_CONNECTION,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Miuul Node JS Mongo DB Connected");
  })
  .catch((err) => {
    console.error(err);
  });

// Listen
app.listen(3434);
