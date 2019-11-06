const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const signToken = require("../../utils/signJWT");

//load input validation
const validateLoginInput = require("../../validation/login");
const validateRegisterInput = require("../../validation/register");

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

//  @route GET api/users/register
//  @desc Register User
//  @access Public
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  //Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) {
            throw err;
          }
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              return res.json(user);
            })
            .catch(err => {
              console.log(err);
              return res.status(500).json(err);
            });
        });
      });
    }
  });
});

module.exports = router;
