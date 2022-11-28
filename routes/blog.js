//รับ Request จาก User
const express = require("express")
const route = express.Router()
//----------------------------------------------------------------------------
const { signUp } = require("../controllers/userController")
const { bookDetails } = require("../controllers/bookController")
const { bookCollection } = require("../controllers/collectionController")
const { remove, getUserData, update, singleBlog } = require("../controllers/profileController")
const { favorite, getUserFavorite, removefavorite } = require("../controllers/favoriteController")

//-------------------------------------------------------------------------------------------------------
route.post('/signup',signUp)
route.post('/bookseller',bookDetails)
route.get('/collection',bookCollection)
route.post('/collectionUser',getUserData)
route.delete('/delete/:slug',remove)
route.put('/updatepost/:slug',update)
route.get('/signleData/:slug',singleBlog)
route.post('/favorite',favorite)
route.post('/getuserfavorite',getUserFavorite)
route.put('/deletefavorite/:user',removefavorite)

module.exports=route