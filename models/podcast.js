const mongoose = require('mongoose');

const podcasts = new mongoose.Schema({
  frontImage: {
    type: String,
    required: true,
  },
   
  audioFile: {
    type: String,
    unique:true,
    required: true,
  },
  title: {
    type: String,
    unique:true,
    required: true,
  },
  description:   {
    type: String,
    unique:true,
    required: true,
  },
  user:   {
    type : mongoose.Types.ObjectId,
    ref : "User",
  },
  category:   {
    type : mongoose.Types.ObjectId,
    ref : "Category",
  },
  
  
},
{timestamps : true}
);

module.exports = mongoose.model("Podcasts", podcasts);