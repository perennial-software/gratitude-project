const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    beneficiaryName: {
        type: String,
        required: true
    },
    callsToAction: {
        type: Array,
        required: true
    },
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
});

module.exports = Message = mongoose.model("messages", MessageSchema);