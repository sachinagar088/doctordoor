var express=require("express");
var router=express.Router();
var Post=require("../models/User1");
var {ensureAuthenticated}=require('../config/auth');
router.get("/post",ensureAuthenticated,function(req,res){
	res.render("index5",{user:req.user.name});
});
router.post("/post",function(req,res){
    var newUser1=new Post(req.body);
    newUser1.save()
        .then(function(item){
		res.redirect("/dashboard");
		})
		.catch(function(err){
        console.log(err);
});
});

module.exports=router;