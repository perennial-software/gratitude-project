const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const signToken = require("../../utils/signJWT");

//load input validation
const validateLoginInput = require("../../validation/login");

//Load user model
const User = require("../../models/User");

//  @route GET api/users/
//  @desc Tests users router
//  @access Public
router.get("/", (req, res) => res.json({ success: "Users Works" }));

//  @route GET api/users/login
//  @desc Login User and return a JWT on success
//  @access Public
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  //Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  //Find the user by email
  User.findOne({ email: email })
    .then(user => {
      //check for user
      if (!user) {
        errors.email = "Invalid Email or Password";
        return res.status(404).json(errors);
      }

      //Check password by comparing it with encrypted password in the db
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          //password Matched then send jwt token
          const token = signToken(user);
          res.status(200).json({ token: "Bearer " + token });
        } else {
          errors.password = "Invalid Email or Password";
          return res.status(400).json(errors);
        }
      });
    })
    .catch(err => {
      console.log(err);
      //return internal server error
      return res.status(500).json(err);
    });
});

//ROBERT YOU NEED TO ADD FUNCTIONALITY TO THIS FUNCTION TO ENSURE REGISTRATION WORKS
// You need to validate whatever input is passed in the request body. It has to be a valid
// email and password must be of atleast 6 characters in length
// Then check if the email exists in the DB. If it does not exist, then create a new user
// make sure the password you store in the db is encrypted using bcrypt as i have done in the login
// route

//  @route GET api/users/register
//  @desc Register User
//  @access Public
router.get("/register", (req, res) => {
  return res.json({ success: "Register Works" });
});

module.exports = router;
