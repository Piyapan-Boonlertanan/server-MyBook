const jwt = require("jsonwebtoken") //ใช้ในการ Login เข้าสู่ระบบของ User
const expressJWT = require("express-jwt") //ใช้ในการตรวจสอบ token
const userDatabase = require("../models/userDatabase")

exports.logIn=(req,res)=>{
    const {username,password} = req.body

    switch(true){
        case !username:
            return res.status(400).json({error:"กรุณากรอกชื่อผู้ใช้"})
        case !password:
            return res.status(400).json({error:"กรุณากรอกรหัสผ่าน"})
    }
    
    userDatabase.find({username,password},(err,blog)=>{
        if(!blog[0]){
            return res.status(400).json({error:"ชื่อผู้ใช้ หรือ รหัสไม่ถูกต้อง"})
        }
        const token = jwt.sign({username},process.env.JWT_SECRET,{expiresIn:'1d'})
        return res.json({token,username})
    })
}

//ตรวจสอบ token ยืนยันตัวตน
exports.requireLogin=expressJWT({
    secret:process.env.JWT_SECRET,
    algorithms:["HS256"],
    userProperty:"auth"
})
