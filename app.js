const express = require ('express');

const router = require('./my_modules/routes');

const port = 3000;

const server = express();

server.set('view engine', 'ejs');

server.use(router);

server.use(express.static(__dirname + '/views'));

server.listen(port, () => {
    console.log(`Le serveur tourne sur http://localhost:${port}`);
});
