 const argv = require('./config/yargs').argv;
 const color = require('colors');
 const obtenerUbicacion = require('./routes/routes');
 const obtenerClima = require('./clima/clima');



 getClima = async(direccion) => {
     try {

         let datos = await obtenerUbicacion.getLocalizacion(direccion);
         let temp = await obtenerClima.getClima(datos.lat, datos.long);

         return `El clima de ${direccion} es °${temp}.`.green;

     } catch (err) {
         return `No se encontró informacion para ${direccion}`;
     }
 }

 getClima(argv.direccion)
     .then(reporte => {
         console.log(reporte);
     }).catch(error => console.log(error))