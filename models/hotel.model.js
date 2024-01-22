const mongoose = require("mongoose");

const hotelSchema = mongoose.Schema(
  {
    url1: {
      type: String,
    },

    url2: {
      type: String,
    },

    url3: {
      type: String,
    },

    url4: {
      type: String,
    },

    name: {
      type: String,
      require: true,
    },

    rating: {
      type: Number,
    },

    description: {
      type: String,
    },

    type: {
      type: Number,
    },

    timeCheckin: {
      type: String,
    },

    timeCheckout: {
      type: String,
    },

    address: {
      type: String,
    },

    phone: {
      type: String,
    },

    price: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("hotel", hotelSchema);
