const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const async = require("hbs/lib/async");
const res = require("express/lib/response");
const employeeSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },


    Email:{
        type:String,
        required:true,
        unique:true
    },


    Password:{
        type:String,
        required:true
    },

    ConfirmPassword:{
        type:String,
        // required:true
   
    },
    emailToken:{
        type:String

    },
    isVerified:{
        type:Boolean

    },
    role:{
        type:String,
        default:'user'

    },
    Date:{
        type:Date,
        default:Date.now()
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
})

employeeSchema.methods.generateAuthToken = async function(){
    try {
        const token = jwt.sign({_id:this._id.toString()}, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({token:token})
        await this.save();
        return token 
    } catch (error) {
        res.send("The error part" + error)
        console.log("the error part" + error)

    }
}


employeeSchema.pre("save", async function(next){
    if(this.isModified("Password")){

        console.log(`the current Password is ${this.Password}`);
  this.Password = await bcrypt.hash(this.Password,10);
  console.log(`the current Password is ${this.Password}`);
this.ConfirmPassword = undefined;
}
    next();
})

//now we need to createa collection
const Register = new mongoose.model("Register" , employeeSchema);
module.exports = Register;