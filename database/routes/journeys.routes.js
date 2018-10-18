const express = require('express');
const router = express.Router();

const adminModel = require('../models/AdminModel');




router.get('/Admins/', async (req,res)=>{
    const TodosLosAdmins = await adminModel.find();
    res.json(TodosLosAdmins);
}
);

router.get('/Admins/:id', async (req,res)=>{
    const AdminsPorId = await adminModel.findById(req.params.id);
    res.json(AdminsPorId);
});

router.post('/Admins/', async (req,res)=>{
    const {
        UserName,
        Password,
        FirstName,
        LastName,
        Phone,
        Email
    } = req.body;
    const NuevoAdmin = new adminModel({
        UserName,
        Password,
        FirstName,
        LastName,
        Phone,
        Email
    });
    await NuevoAdmin.save();
    res.json({status:'Admin saved'});
});

router.put('/Admins/:id', async (req,res)=>{
    const {
        UserName,
        Password,
        FirstName,
        LastName,
        Phone,
        Email
    } = req.body;
    const ActualizarAdmin = {
        UserName,
        Password,
        FirstName,
        LastName,
        Phone,
        Email  
    };
    await adminModel.findByIdAndUpdate(req.params.id, ActualizarAdmin);
    res.json({status:'Admin updated'});
});

router.delete('/Admins/:id', async (req,res)=>{
    await adminModel.findByIdAndRemove(req.params.id);
    res.json({status:'Admin deleted'});
});


/////////////////////////////////


//////////////////////////////

module.exports = router;