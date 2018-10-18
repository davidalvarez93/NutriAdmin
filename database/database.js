//despues se utilizara en index.js
const mongoose = require('mongoose');

const URI= 'mongodb://admin:nutriologosapp1@ds135433.mlab.com:35433/nutriapp_db';

mongoose.connect(URI,{ useNewUrlParser: true })//(local :v)
.then(db=> console.log('DB is connected'))
.catch(err=> console.log(err));

module.exports = mongoose;
