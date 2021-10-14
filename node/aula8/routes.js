const express = require ('express');
const { resourceLimits } = require('worker_threads');
const route = express.Router();
const homeController = require ('./homeController/controllers');
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);
module.exports = route;