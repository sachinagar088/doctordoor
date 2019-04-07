var express=require("express");
var router=express.Router();
var Doctor = require("../models/Doctor");
var Appoint= require("../models/Appointment");
router.get('/approve/:z',function(req,res){
    Appoint.findOneAndUpdate({_id:req.params.z},{$set:{status:"Approved"}},function(ere,user)
                            {
        if(ere)
            {
                console.log(ere);
                res.redirect("/dashboard2");
            }
        else{
            res.redirect("/view3");
        }
    })
});
module.exports=router;