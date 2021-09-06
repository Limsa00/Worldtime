const express = require('express');
const router = express.Router();

const capitalCities = require('./capitalCities');

router.get('/', (req, res) => {
    res.sendFile('index.html', {
        root: __dirname+'/../views'
    });
});

router.get('/city/:slug', (req,res) => {

    const cityName = req.params.slug.toLowerCase();

    for (let index = 0; index < capitalCities.length; index++) {
        const city = capitalCities[index];

        // console.log('cityName : ', cityName);
        // console.log('city.name.toLowerCase() : ', city.name.toLowerCase());
        
        if(cityName === city.name.toLowerCase()){
            res.type('html');
            res.send(`<h1>Heure de ${city.name}</h1>`)
            return
        }
    }

    res.status(404).send('Erreur');
})


module.exports = router;