/*
* Servidor
*/
const express = require('express');


//inicializacion del servidor
const app =  express();

/*
* Settings
*/
app.set('port', process.env.PORT || 5000); //asignar puerto


app.get('/', (req, res) => {
    res.send('Hello')
})


/*
* Exportar el servidor
*/
module.exports = app;