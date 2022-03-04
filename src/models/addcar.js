const mongoose = require("mongoose");
const CarSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    Car_image:{
        type:String,
        required:true
    }
})

const Cars = new mongoose.model("Car" , CarSchema);
module.exports = Cars;