const mongoose = require("mongoose")

const UserData=new mongoose.Schema(
    {
        name:String,
        email:String,
        password:String
    }
)

const UserDataModel = mongoose.model('userdata',UserData)
module.exports=UserDataModel