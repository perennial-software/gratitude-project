const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const signToken = require("../../utils/signJWT");

//Load user model
const Message = require("../../models/Message");

//  @route GET api/message/
//  @desc Tests messages router
//  @access Public
router.get("/", (req, res) => res.json({ success: "Message" }));

//  @route GET api/messsages/login
//  @desc Login User and return a JWT on success
//  @access Public
let catch1 = router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  //Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const recipientName = req.body.recipientName;
  const beneficiaryName = req.body.beneficiaryName;

  //Find message by recipient
  Message.findOne({ recipientName: recipientName })
      .then(message => {
        const token = signToken(Message);
        res.status(200).json({ token: "Bearer " + token });
      });
})
    .catch(err => {
      console.log(err);
      //return internal server error
      return res.status(500).json(err);
    });


  //Find message by organization
  Message.findOne({ beneficiaryName: beneficiaryName })
    .then(message => {
      const token = signToken(Message);
      res.status(200).json({ token: "Bearer " + token });
      });
    });
    .catch(err => {
  console.log(err);
  //return internal server error
  return res.status(500).json(err);
});

});



module.exports = router;
