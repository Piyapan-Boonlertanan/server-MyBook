const mongoose = require("mongoose")

const favoriteinfo = mongoose.Schema({
    user:{
        type:String,
        require:true
    },
    userfavoritebook:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model("userfavorite",favoriteinfo)