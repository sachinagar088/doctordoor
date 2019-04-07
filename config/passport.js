var LocalStrategy = require('passport-local').Strategy;
var mongoose=require('mongoose');
var User=require('../models/User');
module.exports=function(passport){
passport.use(new LocalStrategy({usernameField:'email'}
,  function(email, password, done) {
    User.findOne({ email:email }, function (err, user) {
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
  User.findById(id, function(err, user) {
    done(err, user);
  });
});   
}