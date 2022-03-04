const jwt = require("jsonwebtoken");
const Register = require("../src/models/register")
const cookie = require("cookie-parser");




const loginrequired = async (req, res, next)=>{
    try {
        const token = req.cookies.jwt;
        if(token)
        {
        const verifyUser = jwt.verify(token, process.env.SECRET_KEY) 
        const user = await Register.findOne({_id:verifyUser._id})
        req.token = token;
        req.user=user;
        next();
        } 
        else{
            res.redirect("/login")
        }
    } catch (error) {
        res.status(401).send(error)
    }
}




module.exports ={loginrequired}
