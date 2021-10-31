const router = require('express').Router();
var fs = require("fs");
const data = require('../data/weather_data.json');
var selCity;

router.get('/', function (req, res) {  
        fs.readFile('./views/weather.html', (err, data) => {
        if(err){
            console.log(err);
            res.end();
        }
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
})
router.get('/weather', function (req, res) {
    //load data
    res.json(data);
});
router.post('/weather', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    selCity=[];
    var city = req.body;
    console.log(city)
    selCity.push(city);
    res.redirect('/');    
});



module.exports = router;