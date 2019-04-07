var express=require('express');
var session=require('express-session');
var router=express.Router();
router.get('/dashboard2',function(req,res){
    if(!req.session.user){
        res.redirect('/login1');
    }
   res.render('dashboard2.ejs',{doc:req.session.user.name}); 
});
module.exports=router;