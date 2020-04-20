const express = require('express');
const app = express();
const router = express.Router();
const parser = require('body-parser');
const parserJson = parser.json();
const request = require('request');
const helmet = require('helmet');

let appid = "7fd64bea57746b38d50d97687525f21a";
let type = "accurate";
let lang = "en";
let cnt = 7;
let units = "imperial";

// [GET] openWeather API endpoint
router.get('/:city?', async (req,res)=>{

    // request openweather GET method
    let city = req.params.city || "dallas";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&type=${type}&lang=${lang}&cnt=${cnt}&units=${units}`;
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

/*
router.get('/:city', async (req,res)=>{

    // request openweather GET method
    let city = req.params.city;
    let appid = "7fd64bea57746b38d50d97687525f21a";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}&type=${type}&lang=${lang}&cnt=${cnt}&units=${units}`;
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
*/

module.exports = router;
