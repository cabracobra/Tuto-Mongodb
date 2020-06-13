const mongoose = require('mongoose');

//configuración mongoose. 
mongoose.connect('mongodb://localhost/db-prueba',{ // si no existe la db la crea (local)
    useCreateIndex: true, //config necesaria para que no de error
    useNewUrlParser: true,
    useFindAndModify: false
}).then(db => console.log('DB Conected')).catch(err=> console.error(err)); //msg suceful o error
