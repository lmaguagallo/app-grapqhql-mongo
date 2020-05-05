/*
* Server import
*/
const app = require('./server')



/*
* Midelware
*/
const environment = process.env.NODE_ENV || 'development';
require('dotenv').config({
    path: `.env.${environment}`
}); //cargar variables de .env

/*
* Database import
*/
require('./database')

/*
* Settings
*/
const PORT = app.get('port');




app.listen(PORT, ()=>{
    console.log('GraphQL API listen in http://localhost:'+PORT);
    //console.log('GraphQL API listen in http://localhost:'+PORT+ endPoint);
    //console.log('GraphiQL listen in http://localhost:'+PORT+ i_endPoint);

})