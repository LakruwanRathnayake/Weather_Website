const axios = require('axios'); // legacy way

const getGeo=(location)=>{
    return new Promise((resolve,reject)=>{

        const url='http://api.openweathermap.org/geo/1.0/direct?q='+location+'&limit=5&appid=aa135f1fc0279f02752b9072dc957983';

    axios.get(url)
  .then(function (response) {
    // handle success
    resolve({
        name:response.data[0].name,
        lat:response.data[0].lat,
        lon:response.data[0].lon
    })
    //console.log(response.data[0].name+" is in "+response.data[0].lat+" "+response.data[0].lon);
  })
  .catch(function (error) {
    // handle error
    reject({error:'Unable to find the location'});
    //console.log("Unable to find the location");
  });

    })
}


module.exports =getGeo
