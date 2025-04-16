const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    location: String,
    duration: String,
    price: Number,
    images: [String],
    companyId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    availableDates: [Date],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Package", packageSchema);
