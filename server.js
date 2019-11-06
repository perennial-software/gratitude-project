const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//bodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Express Server Running on Port ${PORT}`));
