var mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Enter quiz name"],
    trim: true,
  },
  fullMarks: {
    type: Number,
  },
  timelimit: {
    type: Number,
    required: true,
  },
  startedAt: {
    type: Date,
    default: null,
  },
  endAt: {
    type: Date,
    default: null,
  },
});

module.exports = mongoose.models.Quiz || mongoose.model("Quiz", quizSchema);
