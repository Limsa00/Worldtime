const express = require('express');
const router = express.Router();

const capitalCities = require('./capitalCities');

const date = require('../my_modules/date');

router.get('/', (req, res) => {
    res.sendFile('index.html', {
        root: __dirname+'/../views'
    });
});

router.get('/city/:slug', (req,res) => {

    const cityName = req.params.slug.toLowerCase();

    for (let index = 0; index < capitalCities.length; index++) {
        const city = capitalCities[index];
      
        if(cityName === city.name.toLowerCase()){
            res.type('html');
            res.send(`<h1>A ${city.name}, il est ${date.getCurrentDateByTz(city.tz)}</h1>`);
            return
        }
    }

    res.status(404).send('Erreur');
})


module.exports = router;