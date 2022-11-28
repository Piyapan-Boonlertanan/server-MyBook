const bookSeller = require("../models/bookSeller");
const slugify = require("slugify");
const { v4: uuidv4 } = require('uuid');

//บันทึกข้อมูลหนังสือลงใน data base
exports.bookDetails=(req,res)=>{
    const {user,bookname,price,details,contact,url} = req.body
    let slug = slugify(bookname)

    if(!slug)slug=uuidv4();

    switch (true) {
        case !bookname:
            return res.status(400).json({error:"กรุณากรอกชื่อหนังสือ"})
        case !price:
            return res.status(400).json({error:"กรุณากรอกราคา"})
        case !details:
            return res.status(400).json({error:"กรุณากรอกรายละเอียดหนังสือ"})
        case !contact:
            return res.status(400).json({error:"กรุณากรอกช่องทางการติดต่อ"})
        case !url:
            return res.status(400).json({error:"กรุณาใส่ URL ของรูปภาพ"})
    }

    bookSeller.create({user,bookname,price,details,contact,url,slug},(err,blog)=>{
        if(err){
            return res.status(400).json({error:"กรุณาใส่ราคาเป็นตัวเลข"})
        }
        return res.json(blog)
    })
}