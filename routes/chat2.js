var express=require("express");
var session=require("express-session");
var router=express.Router();
var chatnow=require('../models/Chat');
router.post("/chat2",function(req,res){
    var{name,patient,message,reply}=req.body;
    var new2=chatnow({name,patient,message,reply});
    new2.save()
    .then(function(item){
        res.redirect('/contact');
    })
    .catch(function(err){
       console.log(err); 
    });
});
module.exports=router;