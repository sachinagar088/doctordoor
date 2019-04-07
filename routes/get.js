var express=require("express");
var router=express.Router();
var Doctor=require('../models/Doctor');
var {ensureAuthenticated}=require('../config/auth');
router.get("/get",ensureAuthenticated,function(req,res){
    Doctor.find({},function(err,doc){
        if(err)
            {
                console.log(err);
            }
        else{
            res.render("index5",{doc:doc,user:req.user.name});
        }
    });
});
router.post("/get",function(req,res){
   var name1=req.body.search;
   Doctor.find({specialisation:name1},function(err,doc){
      res.render("index5",{doc:doc,user:req.user.name}); 
   });
});
module.exports=router;