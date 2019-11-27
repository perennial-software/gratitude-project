const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("config");
const cors = require("cors");
const passport = require("passport");

const app = express();

//load routes
const users = require("./routes/api/users");
const messages = require("./routes/api/messages");
const sendgrid = require("./routes/api/sendgrid")

//bodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//connect to db
const db = config.get("mongoURI");
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

//Passport middleware
app.use(passport.initialize());

//Passport Setup
require("./utils/passport")(passport);

//test route remove it during deployment
app.get("/", (req, res) => res.send("API Running"));

//User routes
app.use("/api/users", users);
//messages routes
app.use("/api/messages", messages);
// email routes 
app.use("/api/emails", sendgrid)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Express Server Running on Port ${PORT}`));
