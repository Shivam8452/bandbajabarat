const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const VerifiedShopSchema = new mongoose.Schema({
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
    type:{
        type: String, 
        required:true
    },
    address:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    shop_image:{
        type:String,
        required:true
    }
})
VerifiedShopSchema.pre("save", async function(next){
    if(this.isModified("password")){
  this.password = await bcrypt.hash(this.password,10);
  console.log(`the current password is ${this.password}`);
}
    next();
})

const VerifiedShop = new mongoose.model("VerifiedShop" , VerifiedShopSchema);
module.exports = VerifiedShop;