const mongoose = require('mongoose');
const {Schema} = mongoose;
//const Schema = mongoose.Schema; //igual que arriba pero revolcado

let AdminSchema = new Schema({
    UserName:{type:String, requiered:true,},
    Password:{type:String, requiered:true,},
    Per_Aero:{type:String, requiered:true,},
    Per_Vue:{type:String, requiered:true,},
    Per_Usua:{type:String, required:true}
});


module.exports=mongoose.model('Admins',AdminSchema);//collection Admin