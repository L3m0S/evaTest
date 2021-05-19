const routes = require('express').Router();
const multer = require('multer');
const configMulter = require('./config/multer');
const toJson = require('./conversor/toJson');

routes.post('/posts', multer(configMulter).single('file'), async (req, res) => {
    try {
        console.log(req.file);

        const json = await toJson();
        return res.json(json);
    }
    catch (err) {
        console.log(err)
    }
});

module.exports = routes;