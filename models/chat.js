const mongoose = require("mongoose");
// schema define-->
const chatSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  msg: {
    type: String,
    maxLength: 90,
  },
  created_at: {
    type: Date,
    required: true,
  },
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat; // export of Chat
