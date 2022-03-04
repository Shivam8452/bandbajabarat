const mongoose = require("mongoose");

mongoose.connect(process.env.Mongo_URL ,{
    // useCreateIndex:true,
    // useNewParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection successful");
}).catch((error) => {
    console.log(error);
})