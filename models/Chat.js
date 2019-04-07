var mongoose=require('mongoose');
var chatSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    patient:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    reply:{
        type:String,
        required:true
    }
});
var chatnow=mongoose.model('chatnow',chatSchema);
module.exports=chatnow;
