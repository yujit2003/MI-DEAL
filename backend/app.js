const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require('path');

const app = express();
const errorMiddleWare = require("./middleware/error")

// MIDDLE WARE for JSON
app.use(express.json());
app.use(cookieParser());

//Route Import
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(fileUpload());


app.use("/api/v1", product);
app.use("/api/v1", user);

// Middle ware for error
app.use(errorMiddleWare);




module.exports = app;