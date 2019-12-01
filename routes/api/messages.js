const express = require("express");
const router = express.Router();
const passport = require("passport");
const sgMail = require("@sendgrid/mail");
const config = require("config");
const Validator = require("validator");
sgMail.setApiKey(config.get("sendgrid_api_key"));

//load input validation
const validateMessageInput = require("../../validation/message");

//Load user model
const User = require("../../models/User");
//load messages model
const Message = require("../../models/Message");

//  @route GET api/messages/
//  @desc Get all messages. This route is protected and only accessible by
//  logged in users.
//  @access Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let errors = {};

    Message.find()
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

//  @route GET api/messages/:messageID
//  @desc Gets specific message 
//  @access Public
router.get(
  "/:messageID",
  (req, res) => {
    let errors = {};

    Message.findById(req.params.messageID)
      .then(message => {
        if (!message) {
          errors.noMessages = "Message not found";
          return res.status(404).json(errors);
        }
        console.log(message);
        return res.json(message);
      })
      .catch(err => {
        console.log(err);
        return res.status(404).json(err);
      });
  }
);

//  @route GET api/messages/
//  @desc Create User Messages (Protected Endpoint) (Check messages model to learn about expected request body)
//  An example request body would be the following,
/*{
 "beneficiaryName": "UNICEF",
 "recipientName": "Abdullah Amin",
 "recipientEmail": "abdamin30@gmail.com",
 "callsToAction": [
            {
                "buttonText": "Work with Us",
                "description": "Work with us to support the less fortunate",
                "link": "mailto:<aleks@@unicef.com>"
            },
            {
                "buttonText": "Support",
                "description": "Help us support refugees",
                "link": "mailto:<aleks@@unicef.com>"
            }
                 ],
 "videoURL": "https://player.vimeo.com/video/355019802",
} */
// However look at the Messages Model to see which fields are required and which ones are not.
//  @access Public
router.post("/", (req, res) => {
  const { errors, isValid } = validateMessageInput(req.body);

  //Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newMessage = new Message({
    beneficiaryName: req.body.beneficiaryName,
    callsToAction: req.body.callsToAction,
    recipientName: req.body.recipientName,
    recipientEmail: req.body.recipientEmail,
    videoURL: req.body.videoURL
  });

  // TODO: need to change this to our actual domain
  emailURL = "http://localhost:8080/g/" + newMessage._id

  const email = {
    to: req.body.recipientEmail,
    from: "test@test.com",
    templateId: 'd-95ecec114f8b4fe7984adb619daa2cc3',
    dynamic_template_data: {
      subject: 'Gratitude Message For You',
      beneficiaryName: req.body.beneficiaryName,
      recipientName: req.body.recipientName,
      videoURL: emailURL
    }
  };

  sgMail
    .send(email)
    .then(response => {
      //on success of email store gratitude message on database
      newMessage
        .save()
        .then(newMessage => {
          return res.json(newMessage);
        })
        .catch(err => {
          console.log(err);
          return res.status(500).json(err);
        });
    })
    .catch(err => {
      return res.status(500).json(err);
    });
});

module.exports = router;
