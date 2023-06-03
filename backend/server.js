const app = require("./app");
const cloudinary = require("cloudinary");
const connectDatabase = require("./config/database");
const cors = require("cors");

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

// app.use(cors({credentials: true, origin: "https://mideall.onrender.com/"}));
// app.use(function(req, res, next) {
//   // res.header("Access-Control-Allow-Origin", "https://localhost:3000"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
app.use(cors({
  origin: "https://mideall.onrender.com",
  headers: ["Content-Type"],
  credentials: true,
}));

// app.use(cors({
//     allowedHeaders:['authorization','content-type'],
//     exposedHeaders:['authorization','content-type'],
//     origin:'*',
//     methods:['GET,HEAD,PUT,POST,PATCH,DELETE'],
//     preflightContinue:false
// }))

app.options((req, res, next) => {
    res.setHeader("Access-control-Allow-Origin", "*")
    res.setHeader("Access-control-Allow-Methods","*")
    res.setHeader("Access-control-Allow-Headers", "*")
    res.end()
});


// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "config/config.env" });
}

console.log(process.env.JWT_EXPIRE);

// Connecting to database
connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});