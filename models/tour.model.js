const mongoose = require("mongoose");

const tourSchema = mongoose.Schema(
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

    type: {
      type: String,
    },

    time: {
      type: Number,
    },

    startDate: {
      type: String,
    },

    endDate: {
      type: String,
    },

    transport: {
      type: String,
    },

    numberPeople: {
      type: Number,
    },

    place: {
      type: String,
    },

    priceA: {
      type: Number,
    },

    priceC: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("tour", tourSchema);
