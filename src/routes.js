const routes = require('express').Router();
const multer = require('multer');
const configMulter = require('./config/multer');
const toJson = require('./conversor/toJson');
const PokemonController = require('./controllers/PokemonController');
const Pokemon = require('./models/Pokemon');


routes.post('/post/pokemons', multer(configMulter).single('file'), async (req, res) => {
    try {
        console.log(req.file);

        const json = await toJson();
        const pokemons = await PokemonController.store(json)
    
        return res.json(json[0]);
    }
    catch (err) {
        console.log(err)
        return res.status(400).send(err)
    }
});


module.exports = routes;