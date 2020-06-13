const mongoose = require('mongoose'); //req mongoose
const {Schema} = mongoose; //clase esquema
//declaramos una nueva clase esquema y sus propiedades
const schema_nuevo_usuario = new Schema({
    nombre:{type: String, required: true},
    apellido: {type: String, required: true},
    date: {type: Date, default: Date.now}
});
//lo exportamos con el nombre newuser
module.exports = mongoose.model('newuser',schema_nuevo_usuario);
