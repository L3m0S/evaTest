const routes = require('express').Router();
const multer = require('multer');
const configMulter = require('./config/multer');
const toJson = require('./conversor/toJson');
const PokemonController = require('./controllers/PokemonController')

routes.post('/posts', multer(configMulter).single('file'), async (req, res) => {
    try {
        console.log(req.file);

        const json = await toJson();
        //const pokemons = await PokemonController.store(json)
        return res.json(json[0].TypeI);
    }
    catch (err) {
        console.log(err)
    }
});

module.exports = routes;