const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },

    email: {
      type: String,
    },

    password: {
      type: String,
      require: true,
    },

    phone: {
      type: String,
    },

    date: {
      type: String,
    },

    // 0:male 1: female
    gender: {
      type: Number,
    },

    // 0:User 1:Admin
    role: {
      type: Number,
      default: 0,
    },

    // 0:Block 1:Active
    isBlock: {
      type: Number,
      default: 0,
    },

    reasonBlock: {
      type: String,
    },

    tour: [{ type: mongoose.Schema.Types.ObjectId, ref: "tour" }],

    food: [{ type: mongoose.Schema.Types.ObjectId, ref: "food" }],

    hotel: [{ type: mongoose.Schema.Types.ObjectId, ref: "hotel" }],

    bus: [{ type: mongoose.Schema.Types.ObjectId, ref: "bus" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
