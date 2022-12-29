const express = require('express');
const app = express();


app.use((req, res, next) => {
    console.log('Middleware a nivel de app');
    next();
});


app.get('/', (req, res, next) => {
    console.log('Middleware a nivel de ruta');
    next();
});

app.get('/', (req, res, next) => {
    res.send('Hello World');
} );

app.get('/usuarios', (req, res, next) => {
    res.send('Users');
});

app.get('/usuarios/:id', (req, res, next) => {
    res.send('usuarios: ' + req.params.id);
});


app.use('/static', express.static('static'));


app.listen(3000, function() {
    console.log('iniciando servidor')
});