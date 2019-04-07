var express=require("express");
var router=express.Router();
var Appoint= require("../models/Appointment");
router.get('/delete/:z',function(req,res){
    Appoint.findOneAndDelete({_id:req.params.z},function(err,d){
                             if(err)
                                 {
                                     console.log(err);
                                 }
                            res.redirect('/history');
                             });
});
module.exports=router;