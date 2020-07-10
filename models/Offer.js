const mongoose = require("mongoose");

const Offer = mongoose.model("Offer", {
  created: Date,
  title: String,
  description: String,
  price: Number,
  picture: Object,
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = Offer;
