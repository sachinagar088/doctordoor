var express=require("express");
var router=express.Router();
var search=require("../models/User1");
var {ensureAuthenticated}=require('../config/auth');
router.post("/search",function(req,res){
    var cursor=search.findall({},function(err,result){
        res.render("search2.ejs",{info:result});
    });
});
module.exports=router;