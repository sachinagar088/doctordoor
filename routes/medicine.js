var express=require("express");
var router=express.Router();
var session=require('express-session');
var Medic = require("../models/Medicine");
router.get('/medicine',function(req,res){
    if(!req.session.user){
        res.redirect('/login1');
    }
    Medic.find({},function(err,doc){
        res.render('medicine',{doc1:req.session.name,doc:doc});
    });
});
module.exports=router;