var express=require("express");
var router=express.Router();
var Medic = require("../models/Medicine");
var {ensureAuthenticated}=require('../config/auth');
router.get('/medicine1',ensureAuthenticated,function(req,res){
    Medic.find({},function(err,doc){
        res.render('medicine1',{doc1:req.user.name,doc:doc});
    });
});
module.exports=router;