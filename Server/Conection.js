const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crudmernstack');

const objetobd = mongoose.connection

objetobd.on("connected", ()=>{console.log("Perfect connection to MongoDB")})
objetobd.on("error", ()=>{console.log("Error connection to MongoDB")})

module.exports = mongoose