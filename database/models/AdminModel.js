const mongoose = require('mongoose');
const {Schema} = mongoose;
//const Schema = mongoose.Schema; //igual que arriba pero revolcado

let AdminSchema = new Schema({
    UserName:{type:String, requiered:true,},
    Password:{type:String, requiered:true,},
    //Per_Aero:{type:boolean,},
    //Per_Vue:{type:boolean,},
    //Per_Usua:{type:boolean}
});


module.exports=mongoose.model('Admins',AdminSchema);//collection Admin