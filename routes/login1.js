var express=require("express");
var session=require("express-session");
var router=express.Router();
var Doctor=require("../models/Doctor");
router.get('/login1',function(req,res){
   res.render('login1'); 
});
router.post('/login1',function(req,res){
   var{email,password}=req.body;
   Doctor.findOne({ email:email,password:password},function (err,doc){
       if(err)
           {
               console.log(err);
               res.redirect('/login1');
           }
       else{
               req.session.user=doc;
               res.redirect('/dashboard2');
           }
    });
});
module.exports=router;