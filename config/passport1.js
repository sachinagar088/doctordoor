var LocalStrategy = require('passport-local').Strategy;
var mongoose=require('mongoose');
var Doctor=require('../models/Doctor');
module.exports=function(passport){
passport.use(new LocalStrategy({usernameField:'email'}
,  function(email, password, done) {
    Doctor.findOne({ email:email }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));
passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
    Doctor.findById(id, function(err, user) {
    done(err, user);
  });
});   
}