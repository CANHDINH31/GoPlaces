const mongoose = require("mongoose");

const busSchema = mongoose.Schema(
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
      type: String,
    },

    route: {
      type: String,
    },

    timeStart: {
      type: String,
    },

    timeEnd: {
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

module.exports = mongoose.model("bus", busSchema);