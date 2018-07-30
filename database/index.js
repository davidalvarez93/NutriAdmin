const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { mongoose } = require('./database');


const app = express();

//settings
app.set('port',process.env.PORT || 3001);

//middlewares
//app.use({'Access-Control-Allow-Origin':'*'});
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'HEAD, GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
  });
//app.use(function(req, res, next) { res.header("Access-Control-Allow-Origin", "*"); res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); next(); });


app.use(morgan('dev'));
app.use(express.json());//cada vez que llega un dato verifica que sea un json 

//routes
app.use('/api/journeys',require('./routes/journeys.routes'));


//static files
app.use(express.static(path.join(__dirname,'public')));

//starting server


app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
});

