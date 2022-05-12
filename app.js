var express = require('express') //Importamos express
var app = express(); //declaramos una app de express
var PORT = process.env.PORT || 3000; //declaramos el puerto del servidor
app.use('assets', express.static(__dirname + '/public')); // mapeo de la carpeta virtual
app.set('view engine', 'ejs'); //especificar template engine
//primera ruta, a nivel de raiz
app.get('/', function(req,res){
    res.render('index'); 
});
//ruta parametros -- Añadido, querys
app.get('/person/:id', function(req,res){
    res.render('person', {ID: req.params.id, Message: req.query.message, Times: req.query.times});
});
//ruta student render
app.get('/student', (req, res) => {
    res.render('index');
});
//ruta student POST
app.post('/studentjson', express.json({type: '*/*'}), (req, res) => {
    console.log('El objeto contiene: ' , (req.body));
    console.log('Nombre: ' , (req.body.firstname));
    console.log('Apellido: ' , (req.body.lastname));
});

app.listen(PORT); //levantar server y ponerlo a la espera.