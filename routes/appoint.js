var express=require("express");
var router=express.Router();
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sachinagarwal2711@gmail.com',
    pass: 'sachin@1998'
  }
});
var Doctor = require("../models/Doctor");
var Appoint= require("../models/Appointment");
router.get('/appoint/:z',function(req,res){
    Doctor.findOne({_id:req.params.z},function(err,doc){
                   if(err)
                       {
                           console.log(err);
                       }
        else{
            Appoint.findOne({name:doc.name,patient:req.user.name},function(err1,doc1){
               if(doc1)
                   {
                       res.render('default');
                   }
                else{
                    res.render('appoint1',{user:req.user.name,doc:doc});
                    }
            });
            
            }
            });
});
router.post('/appoint',function(req,res){
    var {name,specialisation,address,patient,date1,status}=req.body;
    Doctor.findOne({name:name},function(err,doc){        
    var newAppoint = new Appoint({name,specialisation,address,patient,date1,status});
    newAppoint.save()
        .then(function(item){
        var mailOptions = {
                from: 'sachinagarwal2711@gmail.com',
                to: doc.email,
                subject: 'Welcome to Doctors Door health app!',
                text: 'You have received an appointment. Please respond as soon as possible.'
                
            };

            transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
            });
    });
		res.redirect("/history");
		})
		.catch(function(err){
        console.log(err);
});
});
module.exports=router;
