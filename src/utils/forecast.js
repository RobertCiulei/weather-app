const request = require ('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=8a87aa3a857865bb359e6b3543088f6a&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)
    request ({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        }else if(body.error) {
            callback('Unable to find location', undefined)
        }else {
            callback(undefined,  body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + " degrees")
        }
    })
}

module.exports = forecast