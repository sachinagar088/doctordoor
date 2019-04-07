var express=require("express");
var router=express.Router();
var Doctor=require('../models/Doctor');
var {ensureAuthenticated}=require('../config/auth');
router.get("/contact",ensureAuthenticated,function(req,res){
    Doctor.find({},function(err,doc){
        if(err)
            {
                console.log(err);
            }
        else{
            res.render("chat",{doc:doc,user:req.user.name});
        }
    });
});
module.exports=router;