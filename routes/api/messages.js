const express = require("express");
const router = express.Router();
const passport = require("passport");

//load input validation
const validateMessageInput = require("../../validation/message");

//Load user model
const User = require("../../models/User");
//load messages model
const Message = require("../../models/Message");

//  @route GET api/messages/
//  @desc Get all messages for the current logged in user. This route is protected and only accessible by
//  logged in users
//  @access Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let errors = {};

    Message.find({ user: req.user.id })
      .sort({ date: -1 })
      .populate("user", ["name"])
      .then(messages => {
        if (!messages) {
          errors.noMessages = "There are no messages for this user";
          return res.status(404).json(errors);
        }
        console.log(messages);
        return res.json(messages);
      })
      .catch(err => {
        console.log(err);
        return res.status(404).json(err);
      });
  }
);

//  @route GET api/messages/
//  @desc Create User Messages (Protected Endpoint)
//  @access Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateMessageInput(req.body);

    //Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    // let callsToAction = [
    //   {
    //     buttonText: "Work with Us",
    //     description: "Work with us to support the less fortunate",
    //     link: "mailto:<aleks@mcctoronto.com>"
    //   },
    //   {
    //     buttonText: "Support",
    //     description: "Help us support refugees",
    //     link: "mailto:<aleks@mcctoronto.com>"
    //   }
    // ];
    const newMessage = new Message({
      beneficiaryName: req.body.beneficiaryName,
      user: req.user.id,
      callsToAction: req.body.callsToAction,
      recipientName: req.body.recipientName,
      recipientEmail: req.body.recipientEmail,
      videoURL: req.body.videoURL
    });

    newMessage
      .save()
      .then(newMessage => {
        console.log(newMessage);
        return res.json(newMessage);
      })
      .catch(err => {
        console.log(err);
        return res.status(500).json(err);
      });
  }
);

module.exports = router;
