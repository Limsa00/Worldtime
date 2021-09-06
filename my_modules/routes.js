const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.sendFile('index.html', {
        root: __dirname+'/../views'
    });
});

// router.get('/race/:name', (req, res) => {

//     const race = races[req.params.name];

//     if (typeof race === 'undefined') {
//         res.status(404).send('Erreur 404');
//         return;
//     }

//     res.render('race', {
//         pagetitle: `Infos de la race ${race.name}`,
//         race: race
//     });
// });

module.exports = router;