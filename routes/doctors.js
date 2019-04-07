var express=require('express');
var router=express.Router();
var passport=require('passport');

var Doctor=require('../models/Doctor');
router.post('/register1',function(req,res){
    var { name, email, specialisation, address, password, password2 } = req.body;
  let errors = [];

  if (!name || !email || !specialisation || !address || !password || !password2) {
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
      specialisation,
      address,
      password,
      password2
    });
  }else{
       Doctor.findOne({ email: email },function(user){
      if (user) {
        errors.push({ msg: 'Email already exists' });
        res.render('register', {
          errors,
          name,
          email,
          specialisation,
          address,
          password,
          password2
        });
      } else {
        var newUser = new Doctor({
          name,
          email,
          specialisation,
          address,
          password
        });
      
           newUser.save()
          .then(function(item){
               res.redirect('/users/login');
           })
          .catch(function(err){
               console.log(err);
           });
      }
});
}
});
module.exports=router;