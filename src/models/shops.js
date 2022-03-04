const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const async = require("hbs/lib/async");
const res = require("express/lib/response");
const { stringify } = require("uuid");
const shopSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
		ref:"Register",
        required:true
	},
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true
    },
    img_proof:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    shop_name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    distance:{
        type:Number,
        required:true
    },
    Banner_img:{
        type:String,
        required:true

    },
    bank_name:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    ac_no:{
        type:Number,
        required:true
    },
    ifsc:{
        type:String,
        required:true
    },
    holder_name:{
        type:String,
        required:true
    },
    passbook_img:{
        type:String,
        required:true
    },
    isVerified:{
        type:Boolean
    },
    orderId: {
		type: String,
		required: true
	},
	receiptId: {
		type: String
	},
	paymentId: {
		type: String,
	},
	signature: {
		type: String,
	},
	amount: {
		type: Number
	},
	currency: {
		type: String
	},
	createdAt: {
		type: Date
	},
	status: {
		type: String
	}

})





//now we need to createa collection
const Shop = new mongoose.model("Shop" , shopSchema);
module.exports = Shop;