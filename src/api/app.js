const express = require('express');
const cors = require('cors');
const path = require('path');

const usersRouter = require('../routers/user');
const productsRouter = require('../routers/product');

/* Criação do app */
const app = express();

app.use(express.json());

app.use(cors());

app.use('/images', express.static(path.resolve(__dirname, "../../public/uploads")));

/* Rotas usando router para cada rota principal */
app.use('/users', usersRouter);
app.use('/products', productsRouter);

module.exports = app;