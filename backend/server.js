// npm i express-fileupload cloudinary 


const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database")
const PORT = process.env.PORT || 4000
const cloudinary = require('cloudinary');
const cors = require('cors');

const DatauriParser=require("datauri/parser");
const parser = new DatauriParser();

// Error -> uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Closing the server due to uncaught Exception")
  process.exit(1);
})

app.use(cors({credentials: true, origin: true}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
  
dotenv.config({path:"backend/config/config.env"});

// connect to database
connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(PORT, () => {

    console.log(`Server is working on http://localhost:${PORT}`);
  });

  // unhandled Promise rejection

  process.on("unhandledRejection", (err) => {
    console.log(`Error ->  ${err.message}`);
    console.log("Closing the server due to unhandled Rejection")
  
    server.close(() => {
      process.exit(1);
    })
  })