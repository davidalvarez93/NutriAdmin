const express = require('express');
const router = express.Router();

const airportModel = require('../models/airportsModel');
const flightModel = require('../models/flightsModel');

router.get('/Apts/', async (req,res)=>{
    const TodosLosAeropuertos = await airportModel.find();
    res.json(TodosLosAeropuertos);
}
);

router.get('/Apts/:id', async (req,res)=>{
    const AeropuertoPorId = await airportModel.findById(req.params.id);
    res.json(AeropuertoPorId);
});

router.post('/Apts/', async (req,res)=>{
    const {Ap_Name, Ap_Country, Ap_State, Ap_City, Ap_Address} = req.body;
    const NuevoAeropuerto = new airportModel({Ap_Name, Ap_Country, Ap_State, Ap_City, Ap_Address});
    await NuevoAeropuerto.save();
    res.json({status:'Airport saved'});
});

router.put('/Apts/:id', async (req,res)=>{
    const {Ap_Name, Ap_Country, Ap_State, Ap_City, Ap_Address} = req.body;
    const ActualizarAeropuerto = {Ap_Name, Ap_Country, Ap_State, Ap_City, Ap_Address};
    await airportModel.findByIdAndUpdate(req.params.id, ActualizarAeropuerto);
    res.json({status:'Airport updated'});
});

router.delete('/Apts/:id', async (req,res)=>{
    await airportModel.findByIdAndRemove(req.params.id);
    res.json({status:'Airport deleted'});
});


//////////////////////////////////////////////////////////////////////////////////



router.get('/Flgts/', async (req,res)=>{
    const TodosLosVuelos = await flightModel.find();
    res.json(TodosLosVuelos);
}
);

router.get('/Flgts/:id', async (req,res)=>{
    const VuelosPorId = await flightModel.findById(req.params.id);
    res.json(VuelosPorId);
});

router.post('/Flgts/', async (req,res)=>{
    const {
        Origen, Fecha_De_Salida, 
        Hora_De_Salida, Destino, Fecha_De_Llegada, 
        Hora_De_Llegada, Capacidad, Precio
    } = req.body;
    const NuevoVuelo = new flightModel({
        Origen, Fecha_De_Salida, 
        Hora_De_Salida, Destino, Fecha_De_Llegada, 
        Hora_De_Llegada, Capacidad, Precio
    });
    await NuevoVuelo.save();
    res.json({status:'Flight saved'});
});

router.put('/Flgts/:id', async (req,res)=>{
    const {
        Origen, Fecha_De_Salida, 
        Hora_De_Salida, Destino, Fecha_De_Llegada, 
        Hora_De_Llegada, Capacidad, Precio
    } = req.body;
    const ActualizarVuelo = {
        Origen, Fecha_De_Salida, 
        Hora_De_Salida, Destino, Fecha_De_Llegada, 
        Hora_De_Llegada, Capacidad, Precio  
    };
    await flightModel.findByIdAndUpdate(req.params.id, ActualizarVuelo);
    res.json({status:'Flight updated'});
});

router.delete('/Flgts/:id', async (req,res)=>{
    await flightModel.findByIdAndRemove(req.params.id);
    res.json({status:'Flight deleted'});
});

module.exports = router;