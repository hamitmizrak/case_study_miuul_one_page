// NodeJsMongoDb.js

// Kütüphaneleri çağırmak
// MONGOOSE
const mongoose = require("mongoose");

// ŞEMA
const miuulOnePageNodeJsMongoDbSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50,
  },
  counter: {
    type: Number,
    required: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
}); //end miuulOnePageNodeJsMongoDbSchema

//EXPORT 
module.exports=mongoose.model("MiuulOnePage",miuulOnePageNodeJsMongoDbSchema);
