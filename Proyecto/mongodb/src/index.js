const express = require('express'); // invocamos express
const path = require('path'); // modulo de enrutado interno de node.
const exphbs = require('express-handlebars'); // Motor de plantillas html.
const methodOverride = require('method-override');  //añade funcinalidades al los formularios
const session = require('express-session'); //guarda sessiones usuarios

//ini
const app = express(); //lo inicializamos con app
require('./db'); //inicializacion de la base de datos (archivo db.js)

//Settings
app.set('port',process.env.PORT || 3000); //inicializa el puerto del pc o el 3000
const puerto = app.get('port');

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

  
//MiddleWares
app.use(express.urlencoded()); // para recibir datos de formularios. sin ellos el servidor no puede recibir formularios
app.use(methodOverride('_method'));
app.use(session({ //configuracion para identificar al usuario
    secret:'secreto', //Palabra secreta 
    resave: true,
    saveUninitialized:true
}))
//Global Variables

//Routes
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));

//Static Files
app.use(express.static(path.join(__dirname,'public'))); //config para archivos estaticos, le establece el path.

//Server listening
app.listen(puerto,() =>{
console.log('Server ON en puerto',puerto);
});