const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    tour: { type: mongoose.Schema.Types.ObjectId, ref: "tour" },
    numberPriceA: {
      type: Number,
    },
    numberPriceB: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("order", orderSchema);
