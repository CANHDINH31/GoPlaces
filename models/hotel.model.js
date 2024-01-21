const mongoose = require("mongoose");

const hotelSchema = mongoose.Schema(
  {
    url: {
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
