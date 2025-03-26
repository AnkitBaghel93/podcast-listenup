const mongoose = require('mongoose');

const user = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
   
  email: {
    type: String,
    unique:true,
    required: true,
  },
  password: {
    type: String,
    required: true,
   
  },
  podcasts: [
    {
      type : mongoose.Types.ObjectId,
      ref : "Podcasts",
    }
  ],
},
{timestamps : true}
);

module.exports = mongoose.model("User", user);