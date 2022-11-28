const mongoose = require("mongoose")

const bookinfo = mongoose.Schema({
    user:{
        type:String,
        require:true
    },
    bookname:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    details:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        require:true
    },
    url:{
        type:String,
        require:true
    },
    slug:{
        type:String,
        lowercase:true,
        unique:true
    }
})

module.exports = mongoose.model("bookSeller",bookinfo)