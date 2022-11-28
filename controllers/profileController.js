const bookSeller = require("../models/bookSeller");

//ดึงข้อมูลจาก Database อ้างอิงตาม user
exports.getUserData=(req,res)=>{
    const user=req.body.user
    console.log({user})
    bookSeller.find({"user":user})
    .then(
        resp =>{
            return res.json(resp)
        }
    )
    
}

//ลบข้อมูลบน Database ฝั่ง Server
exports.remove=(req,res)=>{
    const {slug} = req.params
    bookSeller.findOneAndRemove({slug}).exec((err,blog)=>{
        if(err) console.log(err)
        res.json({
            message:"ลบข้อมูลหนังสือเรียบร้อยแล้ว"
        })
    })
}

//อัพเดตข้อมูลบน Database ฝั่ง Server
exports.update=(req,res)=>{
    const {slug} = req.params
    //ส่งข้อมูล => bookname,price,details,contact
    const {bookname,price,details,contact,url} = req.body
    bookSeller.findOneAndUpdate({slug},{bookname,price,details,contact,url},{new:true}).exec((err,blog)=>{
        if(err) console.log(err)
        res.json(blog)
    })
}

//ดึงบทความที่สนใจโดยอ้างอิงตาม slug
exports.singleBlog=(req,res)=>{
    const {slug} = req.params
    bookSeller.findOne({slug}).exec((err,blog)=>{
        res.json(blog)
    })
}