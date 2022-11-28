const bookSeller = require("../models/bookSeller");

//ดึงข้อมูลหนังสือทั้งหมดใน data base collection
exports.bookCollection=(req,res)=>{
    bookSeller.find({}).exec((err,blog)=>{
        if(err){
            return res.status(400).json({error:"เกิดข้อผิดพลาด"})
        }
        return res.json(blog)
    })
}