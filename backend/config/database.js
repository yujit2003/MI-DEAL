const mongoose = require("mongoose");

const connectDatabase = () => {

    mongoose.connect(process.env.DB_URI, {
        useNewURLParser: true,
        useUnifiedTopology: true
    
    }).then((data => {
        console.log(`mongodb is connected to server: ${data.connection.host}`);
    })).catch((e) => {
        console.log(e);
    })

}

module.exports = connectDatabase