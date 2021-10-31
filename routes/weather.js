const router = require('express').Router();
const data = require('../data/weather_data.json');
const fs = require("fs");

router.get('/', function (req, res) {  
    fs.readFile('./views/weather.html', (err, data) => {
        if(err){
            console.log(err);
            res.end();
        }
        res.end(data);
    });
})
router.get('/weather', function (req, res) {
    //load data
    res.json(data);
});
router.post('/weather', function(req, res) {
    var city = req.body.city_name;
    console.log(city)
    res.redirect('/');
});

module.exports = router;