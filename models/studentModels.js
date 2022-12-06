var mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Please Enter your correct email"],
  },
  photo: {
    type: String,
  },
  loginMethod: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
});

module.exports =
  mongoose.models.Student || mongoose.model("Student", studentSchema);
