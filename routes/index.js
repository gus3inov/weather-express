var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Прогноз погоды в городе' });
});

router.post('/', (req, res, next) => {
  const city = req.body.city;
  const url = `api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${process.env.API_KEY}`

  request(url, (error, response, body)=>{
    if(error){
      res.render('error', {
        message: 'Error',
        error
      })
    }
  })
});

module.exports = router;
