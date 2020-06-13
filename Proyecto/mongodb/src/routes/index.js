const router = require('express').Router(); //constructor de el enrutador de express
const usuario = require('../models/Usuario');
router.get('/', async (req,res) => 
    { 
    const lista_usuarios = await usuario.find().then(documentos=> //obtiene todos los datos de la base de datos (newuser import como usuario)
    {
        const datos =  // se crea una subvariable porque handlebars no se le pueden pasar datos directamente
        {
        listado: documentos.map(documento => //se almacena lista_usuarios (variable con todos los datos de la db) en documentos
            { //se mapea documentos para obtener de cada documento un nombre y apellido (propiedades de lista_usuarios)
                return{
                    nombre:documento.nombre,
                    apellido:documento.apellido
                }
            })
        }
    res.render('index', {lista_usuarios:datos.listado}); //al iniciar en la pagina principal de la app usa la funcion se le pasa el objeto obtenido de la base de datos
    });
    });

router.get('/about', (req,res)=>
    { 
        res.render('about');
    }) 
router.post('/usuario/newuser', async(req,res)=>
    {
        const {nombre,apellido}= req.body;
        if (!nombre || !apellido)
        console.log('error');
        else
        {
            const nuevo_usuario = new usuario({nombre,apellido});
            console.log(req.body);
            await nuevo_usuario.save();
            res.redirect('/');
        }
    });
module.exports = router; // para que exporte la configuración.