const axios = require('axios');

let getLocalizacion = async(direccion) => {

    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://apis.datos.gob.ar/georef/api/provincias?nombre=${encodedUrl}`)

    let localizacion = resp.data.provincias[0].centroide;


    return {
        // ciudad: resp.data.provincias[0].parametros.nombre,
        lat: localizacion.lat,
        long: localizacion.lon
    }
}

const getClima = async(lat, long) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=8069c179951f84ebcbe86a87f2a9d117`)

    let temperatura = resp.data.main.temp;
    return temperatura;

}

module.exports = {
    getLocalizacion,
    getClima
}