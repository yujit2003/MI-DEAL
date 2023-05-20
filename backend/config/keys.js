if(process.env.NODE_ENV == 'production'){
    module.export = require('./prod.js')
}else{
    module.exports = require('./config.js');
}