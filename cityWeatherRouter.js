const express = require('express');
const app = express();
const router = express.Router();
const parser = require('body-parser');
const parserJson = parser.json();

// [GET] openWeather API endpoint
router.get('/', (req,res)=>{
  res.status(200).send({
    process: "succeed!"
  })
});

// [POST] input city name
router.post('/', (req,res)=>{
  const cityWeatherUrl = `api.openweathermap.org/data/2.5/weather?q=${req.params.cityname}&appid=7fd64bea57746b38d50d97687525f21a`;
  http.get(cityWeatherUrl,function(err, req, res) {
        if(!err){
            const weather = JSON.parse(res.body);
            res.send({
                status: 201,
                data: weather,
                message: 'Succeed!'
            })
        }else {
            res.send({
                status: -1,
                message: 'Failed!'
            })
        }

    })


})


module.exports = router
