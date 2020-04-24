'use strict'
const axios = require('axios');



const getClima = async(lat, long) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=8069c179951f84ebcbe86a87f2a9d117`)

    let temperatura = resp.data.main.temp;
    return temperatura;

}


module.exports = {
    getClima
}