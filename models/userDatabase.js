const mongoose = require("mongoose")

const userinfo = mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    telephone:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    confirmpassword:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model("userDatabase",userinfo)