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

module.exports = {
    getLocalizacion
}