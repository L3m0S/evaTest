const routes = require('express').Router();
const multer = require('multer');
const configMulter = require('./config/multer');

routes.post('/posts', multer(configMulter).single('file'), (req, res) => {
    console.log(req.file);

    return res.json({ Status: 'ok' });
});

module.exports = routes;