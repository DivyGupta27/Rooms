const { default: mongoose } = require("mongoose")
require('dotenv').config()

let ConnectToDb=async()=>{
    try{
        mongoose.connect(process.env.DB_string)
        console.log('DB successfully connected')
    }
    catch(error){
        console.log('DB not connected',error)
    }
}
module.exports= ConnectToDb