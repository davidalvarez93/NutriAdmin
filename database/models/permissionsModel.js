const mongoose = require('mongoose');
const {Schema} = mongoose;

let PermissionsSchema = new Schema({
    P_Numero:{type:Int32Array, requiered:true,},
    P_UserName:{type:String, requiered:true,},
    P_Date:{type:Date, requiered:true,},
    P_For_Airports:{type:Boolean, requiered:true,},
    P_For_Flights:{type:Boolean, required:true},
    P_For_Usernames : {type:Boolean, required:true}
});


module.exports=mongoose.model('Permissions',PermissionsSchema);

