const mongoose = require('mongoose');
const {Schema} = mongoose;
//const Schema = mongoose.Schema; //igual que arriba pero revolcado

let AdminSchema = new Schema({
    UserName:{type:String, requiered:true,},
    Password:{type:String, requiered:true,},
    FirstName:{type:String, required:true,},
    LastName:{type:String, required:true,},
    Phone:{type:String, required:true,},
    Email:{type:String, required:true,},
});


module.exports=mongoose.model('Admins',AdminSchema);//collection Admin