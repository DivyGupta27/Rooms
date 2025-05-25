const mongoose = require('mongoose');


const UserBooking= new mongoose.Schema({
    hotel_name:{
        type:String,
        required:true
    },
    room_id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    guests:{
        type:Number,
        required:true
    },
    check_in_date:{
        type:String,
        required:true
    },
    check_out_date:{
        type:String,
        required:true
    },
    message:{
        type:String
    },
    createdby:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})

const Booking= mongoose.model('Booking',UserBooking)
module.exports=Booking