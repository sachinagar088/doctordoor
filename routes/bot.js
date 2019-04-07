var express=require("express");
var router=express.Router();
var {ensureAuthenticated}=require('../config/auth');
router.get("/bot",ensureAuthenticated,function(req,res){
    res.render("chatbot",{doc1:req.user.name});
});
module.exports=router;