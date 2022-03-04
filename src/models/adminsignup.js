const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const async = require("hbs/lib/async");
const res = require("express/lib/response");
const adminSchema = new mongoose.Schema({

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
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
})

adminSchema.methods.generateAuthToken = async function(){
    try {
        const token = jwt.sign({_id:this._id.toString()}, process.env.Admin_Secret)
        this.tokens = this.tokens.concat({token:token})
        await this.save();
        return token 
    } catch (error) {
        res.send("The error part" + error)
        console.log("the error part" + error)

    }
}


adminSchema.pre("save", async function(next){
    if(this.isModified("Password")){

        console.log(`the current Password is ${this.Password}`);
  this.Password = await bcrypt.hash(this.Password,10);
  console.log(`the current Password is ${this.Password}`);
this.ConfirmPassword = undefined;
}
    next();
})

//now we need to createa collection
const Admin = new mongoose.model("Admin" , adminSchema);
module.exports = Admin;