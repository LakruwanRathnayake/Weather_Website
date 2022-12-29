const axios = require('axios'); // legacy way

const getWeather =(lat,lon)=>{
    return new Promise((resolve,reject)=>{
        const url ='https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units=metric&appid=aa135f1fc0279f02752b9072dc957983';
 // Make a request for a user with a given ID
 axios.get(url)
  .then(function (response) {
    // handle success
    resolve({weather:'Currently '+response.data.weather[0].description+' and temparature '+response.data.main.temp+'C'});
    // console.log("Currently "+response.data.weather[0].description+" and temparature "+response.data.main.temp+"C");
  })
  .catch(function (error) {
    reject({error:'Unable to find the location, Please try another location'});
    //console.log("Unable to find the location, Please try another location");
  });
 

    })
}

module.exports=getWeather
