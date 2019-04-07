var express=require('express');
var router = express.Router();
var Appoint=require('../models/Appointment');
router.get('/history',function(req,res){
   Appoint.find({patient:req.user.name},function(err,doc){
       res.render('history1',{user:req.user.name,doc:doc});    
   });

});
module.exports=router;