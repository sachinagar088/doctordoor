var express=require('express');
var router=express.Router();
var passport=require('passport');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sachinagarwal2711@gmail.com',
    pass: 'sachin@1998'
  }
});

var User=require('../models/User');
router.get('/login',function(req,res){
    res.render('login');
});
router.get('/register',function(req,res){
    res.render('register');
});
router.post('/register',function(req,res){
    var { name, email, password, password2 } = req.body;
  let errors = [];

  if (!name || !email || !password || !password2) {
    errors.push({ msg: 'Please enter all fields' });
  }

  if (password != password2) {
    errors.push({ msg: 'Passwords do not match' });
  }

  if (password.length < 6) {
    errors.push({ msg: 'Password must be at least 6 characters' });
  }

  if (errors.length > 0) {
    res.render('register', {
      errors,
      name,
      email,
      password,
      password2
    });
  }else{
       User.findOne({ email: email },function(user){
      if (user) {
        errors.push({ msg: 'Email already exists' });
        res.render('register', {
          errors,
          name,
          email,
          password,
          password2
        });
      } else {
        var newUser = new User({
          name,
          email,
          password
        });
      
           newUser.save()
          .then(function(item){
               
               //mail function
               
               var mailOptions = {
                from: 'sachinagarwal2711@gmail.com',
                to: email,
                subject: 'Welcome to Doctors Door health app!',
                text: 'THANK YOU for registering with us. Hope to serve you better.'
            };

            transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
            });
               
               //console.log("Chal Bhosdike");
               res.redirect('/users/login');
           })
          .catch(function(err){
               console.log(err);
           });
      }
});
  }
  });
router.post('/login',function(req,res,next){
    passport.authenticate('local',{
        successRedirect:'/dashboard',
        failureRedirect:'/users/login'
    })(req,res,next);
});
router.get('/logout',function(req,res){
	req.logout();
	res.redirect('/users/login');
});
module.exports=router;