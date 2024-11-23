const express = require('express');
const produtos = require('./produtosRoutes.js');

module.exports = app => {
    app.use(express.json());
    app.use('/produtos', produtos);
}