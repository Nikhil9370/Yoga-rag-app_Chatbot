const mongoose = require("mongoose");

const QueryLogSchema = new mongoose.Schema({
  question: String,
  answer: String,
  sources: [String],
  isUnsafe: Boolean,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("QueryLog", QueryLogSchema);
