const mongoose = require("mongoose");
const validator = require("validator");


const userSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
		ref:"Register",
        required:true
	},
    name:{
        type:String,
        required:true,
        minLength:3
    },
    email:{
        type:String,
        required:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email id");
            }
        }
    },
    massage:{
        type:String,
        required:true,
        minLength:3
    }
})



const User = mongoose.model("User",userSchema);
module.exports= User;