const express = require('express');
const router = express.Router();

const airportModel = require('../models/airportsModel');

router.get('/', async (req,res)=>{
    const TodosLosAeropuertos = await airportModel.find();
    res.json(TodosLosAeropuertos);
}//,{headers: {'Access-Control-Allow-Origin': '*'}} 
);

router.get('/:id', async (req,res)=>{
    const AeropuertoPorId = await airportModel.findById(req.params.id);
    res.json(AeropuertoPorId);
});

router.post('/', async (req,res)=>{
    const {Ap_Name, Ap_Country, Ap_State, Ap_City, Ap_Address} = req.body;
    const NuevoAeropuerto = new airportModel({Ap_Name, Ap_Country, Ap_State, Ap_City, Ap_Address});
    await NuevoAeropuerto.save();
    res.json({status:'Airport saved'});
});

router.put('/:id', async (req,res)=>{
    const {Ap_Name, Ap_Country, Ap_State, Ap_City, Ap_Address} = req.body;
    const ActualizarAeropuerto = {Ap_Name, Ap_Country, Ap_State, Ap_City, Ap_Address};
    await airportModel.findByIdAndUpdate(req.params.id, ActualizarAeropuerto);
    res.json({status:'Airport updated'});
});

router.delete('/:id', async (req,res)=>{
    await airportModel.findByIdAndRemove(req.params.id);
    res.json({status:'Airport deleted'});
});

module.exports = router;