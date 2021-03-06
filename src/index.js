const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

require('./database/index')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'))
app.use(require('./routes'));


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Servidor ouvindo na porta ${port}...`)
});