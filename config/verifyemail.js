const Register = require("../src/models/register");



const verifyEmail = async(req,res,next) =>{
    try{
        const user = await Register.findOne({ Email : req.body.email});
        if(user.isVerified){
        next();
        }
        else{
            console.log("Please check your email for verification")
            req.session.message={
                type: 'Warning',
                intro: 'Please check your email for verification'
            }
            res.redirect("/login")
            
        }
    }
    catch(err){
        console.log(err)
        req.session.message={
            type: 'Warning',
            intro: 'User not found'
        }
        res.redirect("/login")
    }
}

module.exports = {verifyEmail}