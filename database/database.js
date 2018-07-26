//despues se utilizara en index.js
const mongoose = require('mongoose');

const URI= 'mongodb://admin:admin1@ds245901.mlab.com:45901/journeys_db';

mongoose.connect(URI,{ useNewUrlParser: true })//(local :v)
.then(db=> console.log('DB is connected'))
.catch(err=> console.log(err));

module.exports = mongoose;
