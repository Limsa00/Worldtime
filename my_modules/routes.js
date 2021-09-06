const express = require('express');
const router = express.Router();

const capitalCities = require('./capitalCities');
var moment = require('moment-timezone');

moment.locale('fr');

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
            const now = moment();
            // console.log('now : ', now)
            const nowTz = now.tz(city.tz);
            // console.log('nowTz : ', nowTz);
            const formattedDate = nowTz.format('dddd Do MMMM YYYY, h:mm:ss a');
            res.send(`<h1>A ${city.name}, il est ${formattedDate}</h1>`);
            return
        }
    }

    res.status(404).send('Erreur');
})


module.exports = router;