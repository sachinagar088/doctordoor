var mongoose=require('mongoose');
var AppointSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    specialisation:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    patient:{
        type:String,
        required:true
    },
    date1:{
        type:String,
        required:true
    },
    status:
    {
      type:String,
      required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});
var Appoint=mongoose.model('Appoint',AppointSchema);
module.exports=Appoint;
