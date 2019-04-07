var express=require("express");
var session=require("express-session");
var router=express.Router();
var Medic=require('../models/Medicine');
router.get("/get1",function(req,res){
    if(!req.session.user){
        res.redirect('/login1');
    }
    Medic.find({},function(err,doc){
        if(err)
            {
                console.log(err);
            }
        else{
            res.render("medicine",{doc:doc,doc1:req.session.name});
        }
    });
});
router.post("/get1",function(req,res){
   var name1=req.body.search;
   Medic.find({disease:name1},function(err,doc){
      res.render("medicine",{doc:doc,doc1:req.session.name}); 
   });
});
module.exports=router;