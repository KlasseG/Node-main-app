const express= require('express');
//inicializaciones
require('./database');
const app = express();

const path= require('path');
const methodOverride= require('method-override');
const session= require('express-session');
const exphbs= require('express-handlebars');

const index = require('./routes/index');
const notes = require('./routes/notes');
const users = require('./routes/users');


//configuración
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'Partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
//Funciones pre server o middlewares
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'));
app.use(session({
    secret: 'Bren',
    resave: true,
    saveUninitialized: true
})); 
//Variables Globales

//Rutas o URLS
app.use(index);
app.use(notes);
app.use(users);
//Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
//Servidor
app.listen(app.get('port'), () =>{
    console.log('Servidor en el puerto', app.get('port'));
});