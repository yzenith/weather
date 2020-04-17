const express = require('express');
const app = express();
const router = express.Router();
const parser = require('body-parser');
const parserJson = parser.json();
const request = require('request');

// [GET] openWeather API endpoint
router.get('/', (req,res)=>{

    // request openweather GET method
    let city = "dallas";
    let appid = "7fd64bea57746b38d50d97687525f21a";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`;
    return new Promise(function(resolve, reject){
      request.get(url, function (err, response, body) {
        if(err){
          reject(error);
        } else {
          // console.log(`Body is: ${body}`) it will return the json body
          resolve(
            res.status(200).json(body)
          );
        }
      })
    })
})


module.exports = router;
