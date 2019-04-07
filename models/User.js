var mongoose=require('mongoose');
var UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});
UserSchema.methods.validPassword = function( pwd ) {
    return ( this.password === pwd );
};
var User=mongoose.model('User',UserSchema);
module.exports=User;
