const jwt = require('jsonwebtoken')
const auth = (req,res,next)=>{
    const token = req.cookies.jwt;
    if(token){
        jwt.verify(token, process.env.Admin_Secret, (err,decodedtoken)=>{
            if(err){
                res.redirect('/admin/login')
            }
            else{
                next();
            }
        })
    }
    else{
        res.redirect('/admin/login')
    }

}
module.exports = {auth}