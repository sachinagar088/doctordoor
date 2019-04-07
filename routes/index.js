var express=require('express');
var router=express.Router();
var {ensureAuthenticated}=require('../config/auth');
router.get('/',function(req,res){
    res.render('homepage');
});
router.get('/dashboard',ensureAuthenticated,function(req,res){
    res.render('index.ejs',{user:req.user.name});
});
module.exports=router;