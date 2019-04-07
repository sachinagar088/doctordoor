var mongoose=require('mongoose');
var MedicSchema=new mongoose.Schema({
    disease:{
        type:String,
        required:true
    },
    medicine:{
        type:String,
        required:true
    }
});
var Medic=mongoose.model('Medic',MedicSchema);
module.exports=Medic;
