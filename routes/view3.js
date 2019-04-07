var express=require("express");
var session=require("express-session");
var router=express.Router();
var Appoint=require("../models/Appointment");
router.get('/view3',function(req,res){
    Appoint.find({name:req.session.user.name},function(err,doc){
        if(err)
            {
                console.log(err);
            }
        else{
            res.render("view3",{doc:doc,user:req.session.user.name});
        }
    });
});
module.exports=router;