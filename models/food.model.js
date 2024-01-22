const mongoose = require("mongoose");

const foodSchema = mongoose.Schema(
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

    description: {
      type: String,
    },

    time: {
      type: String,
    },

    address: {
      type: String,
    },

    phone: {
      type: String,
    },

    price: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("food", foodSchema);
