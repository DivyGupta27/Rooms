const { default: mongoose, model } = require("mongoose");



let myRooms=new mongoose.Schema({
    id:{
       type:String,
    },
    type:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    amenities:[String],
    tags:[String]
})

let Rooms=model('Rooms',myRooms)
module.exports=Rooms