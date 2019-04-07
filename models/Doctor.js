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
    specialisation:{
        type:String,
        required:true
    },
    address:{
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
var Doctor=mongoose.model('Doctor',UserSchema);
module.exports=Doctor;
