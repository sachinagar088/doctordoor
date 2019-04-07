var express=require("express");
var session=require("express-session");
var router=express.Router();
router.get('/logout1',function(req,res){
    req.session.destroy();
    res.redirect('/login1');
});
module.exports=router;