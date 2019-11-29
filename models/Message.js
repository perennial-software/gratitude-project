const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  beneficiaryName: {
    type: String,
    required: true
  },
  callsToAction: [
    {
      buttonText: {
        type: String,
        required: true
      },

      description: {
        type: String,
        required: false
      },
      link: {
        type: String,
        required: true
      }
    }
  ],
  recipientName: {
    type: String,
    required: true
  },
  recipientEmail: {
    type: String,
    required: true
  },
  videoURL: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Message = mongoose.model("messages", MessageSchema);
