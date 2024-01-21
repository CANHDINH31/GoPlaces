const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    tour: { type: mongoose.Schema.Types.ObjectId, ref: "tour" },
    rating: {
      type: Number,
    },
    content: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("commentrating", commentSchema);
