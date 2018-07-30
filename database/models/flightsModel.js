const mongoose = require('mongoose');
const {Schema} = mongoose;
//const Schema = mongoose.Schema; //igual que arriba pero revolcado

let FlightsSchema = new Schema({
    Origen:{type:String, requiered:true,},
    Fecha_De_Salida:{type:String, requiered:true,},
    Hora_De_Salida:{type:String, requiered:true,},
    Destino:{type:String, requiered:true,},
    Fecha_De_Llegada:{type:String, required:true},
    Hora_De_Llegada:{type:String, required:true},
    Capacidad:{type:Number, required:true},
    Precio:{type:Number, required:true}
});

module.exports=mongoose.model('Flights', FlightsSchema);//collection airports