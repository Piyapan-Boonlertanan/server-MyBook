const userfavorite = require("../models/favoriteBook");

exports.favorite=(req,res)=>{
    const {user,userfavoritebook} = req.body

    userfavorite.find({user})
    .then(
        resp =>{
            console.log(resp)
            if(resp.length !== 0){
                for(let i=0; i<(resp.length); i++){
                    console.log(i)
                    if(userfavoritebook === resp[i].userfavoritebook){
                        return res.status(400).json({error:"ได้เพิ่มในหนังสือที่สนใจไปแล้ว"})
                }
            }
            userfavorite.create({user,userfavoritebook},(err,blog)=>{
                if(err){
                    return res.json({error:"err"})
                }
                return res.json(blog)
            })}else{
                userfavorite.create({user,userfavoritebook},(err,blog)=>{
                    if(err){
                        return res.json({error:"err"})
                    }
                    return res.json(blog)
                })
            }
        }
    )
}

//ดึงข้อมูลจาก Database อ้างอิงตาม user
exports.getUserFavorite=(req,res)=>{
    const user=req.body.user
    console.log({user})
    // userfavorite.find({"user":user})
    // .then(
    //     resp =>{
    //         return res.json(resp)
    //     }
    // )
    userfavorite.aggregate([
        {$match:{user}},
        {$lookup:{
            from:"booksellers",
            localField:"userfavoritebook",
            foreignField:"bookname",
            as:"favoritebookDetails"
        }}
    ])
    .then(
        resp =>{
            return res.json(resp)
        }
    )
    
}

//ลบข้อมูลบน Database ฝั่ง Server
exports.removefavorite=(req,res)=>{
    const {user} = req.params
    const {bookname} = req.body
    userfavorite.findOneAndRemove({user,userfavoritebook:bookname}).exec((err,blog)=>{
        if(err) console.log(err)
        res.json({
            message:"ลบหนังสือที่สนใจเรียบร้อยแล้ว"
        })
    })
}