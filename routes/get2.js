var express=require("express");
var router=express.Router();
var Medic=require('../models/Medicine');
router.get("/get2",function(req,res){
    Medic.find({},function(err,doc){
        if(err)
            {
                console.log(err);
            }
        else{
            res.render("medicine1",{doc:doc,doc1:req.user.name});
        }
    });
});
router.post("/get2",function(req,res){
   var name1=req.body.search;
   Medic.find({disease:name1},function(err,doc){
      res.render("medicine1",{doc:doc,doc1:req.user.name}); 
   });
});
module.exports=router;