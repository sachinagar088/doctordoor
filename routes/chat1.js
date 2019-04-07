var express=require("express");
var router=express.Router();
var Doctor = require("../models/Doctor");
router.get('/chat1/:z',function(req,res){
    Doctor.findOne({_id:req.params.z},function(err,doc){
                   if(err)
                       {
                           console.log(err);
                       }
        else{
                    res.render('appoint2',{user:req.user.name,doc:doc});
            
            }
            });
});
router.post('/appoint',function(req,res){
    var {name,specialisation,address,patient,date1,status}=req.body;
    var newAppoint = new Appoint({name,specialisation,address,patient,date1,status});
    newAppoint.save()
        .then(function(item){
		res.redirect("/history");
		})
		.catch(function(err){
        console.log(err);
});
});
module.exports=router;
