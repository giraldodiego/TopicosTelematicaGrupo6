const mongoose = require('mongoose');

//const URI ='mongodb://localhost/mern-post'
const URI = process.env.MONGO_URI;

//sudo fuser -k 3000/tcp para error 

mongoose.connect(URI)
  .then(db => console.log('DB conectada'))
  .catch(error => console.error(error));

module.exports = mongoose;