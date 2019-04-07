var express=require('express');
var mongoose=require('mongoose');
var bodyparser=require("body-parser");
var flash = require('connect-flash');
var session = require('express-session');
var passport=require('passport');
var app=express();
require('./config/passport.js')(passport);
mongoose.connect("mongodb://todo:sachin1998@ds047911.mlab.com:47911/todo",{useNewUrlParser:true});
app.set("view engine","ejs");
app.use(express.static('public'));
app.use(bodyparser.urlencoded({extended:true}));
app.use(function(req, res, next) {
  res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
  next();
});
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

app.use('/',require('./routes/index'));
app.use('/',require('./routes/direct'));
app.use('/users',require('./routes/users'));
app.use('/',require('./routes/login1'));
app.use('/',require('./routes/doctors'));
app.use('/',require('./routes/appoint'));
app.use('/',require('./routes/health'));
app.use('/',require('./routes/get'));
app.use('/',require('./routes/get1'));
app.use('/',require('./routes/get2'));
app.use('/',require('./routes/search'));
app.use('/',require('./routes/history'));
app.use('/',require('./routes/contact'));
app.use('/',require('./routes/view3'));
app.use('/',require('./routes/chat1'));
app.use('/',require('./routes/dashboard2'));
app.use('/',require('./routes/logout1'));
app.use('/',require('./routes/approve'));
app.use('/',require('./routes/medicine'));
app.use('/',require('./routes/medicine1'));
app.use('/',require('./routes/delete'));
app.use('/',require('./routes/chat2'));
app.use('/',require('./routes/bot'));
app.listen(3000,function(err){
	if(err){
		console.log(err);
    }
	else{
		console.log("Server has started at port 3000");
	}
});