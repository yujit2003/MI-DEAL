const mongoose = require("mongoose");
const {DB_URI} = require('./keys.js')

const connectDatabase = () => {

    mongoose.connect(DB_URI, {
        useNewURLParser: true,
        useUnifiedTopology: true
    
    }).then((data => {
        console.log(`mongodb is connected to server: ${data.connection.host}`);
    })).catch((e) => {
        console.log(e);
    })

}

module.exports = connectDatabase