const { number } = require("@hapi/joi");
const mongoose = require("mongoose");

const apiToken = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    token: {
      type: String,
      required: true,
    },
    host: {
      type: String,
      required: true,
    },
    remain: {
      type: Number,
      required: true,
    },
    used: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Token", apiToken);
