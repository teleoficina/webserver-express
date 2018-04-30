const express = require('express');
// utilizamos express
const app = express();

// acceder a una variable de entorno de heroku para saber el puerto asignado
// ...en el entorno local no existe "env.PORT" por lo que se pone como valor alternativo "3000"
const port = process.env.PORT || 3000;

// utilizar un middleware
app.use(express.static(__dirname + '/public'));

// configurar una solicitut get cuando el path=/
app.get('/hello', function(req, res) {
    res.send('Hello World')

});

app.get('/data', function(req, res) {
    // res.send('Hello World')
    let salida = {
        name: 'ppitus',
        age: 32,
        url: req.url
    };

    res.send(salida);
});

app.listen(3000, () => {
    console.log(`Listening on ${ port } port...`);
});