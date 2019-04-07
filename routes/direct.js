var express=require("express");
var router=express.Router();
router.get('/direct',function(req,res){
   res.render('middle'); 
});
module.exports=router;