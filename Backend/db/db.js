const mongoose = require('mongoose')


function connectToDb(){
    mongoose.connect(process.env.DB_CONNECT)
    .then(()=>{console.log("database connected")})
    .catch((err)=>{console.log("db file",err)})

}

module.exports = connectToDb;