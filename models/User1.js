var mongoose=require('mongoose');
var User1Schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    question:{
        type:String,
        required:true
    }
});
var User1=mongoose.model('User1',User1Schema);
module.exports=User1;
