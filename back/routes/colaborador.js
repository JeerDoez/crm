var express = require('express');
var colaboradorController = require('../controllers/colaboradorController');

var app = express.Router();

app.post('/registro_colaborador_admin',colaboradorController.registro_colaborador_admin);
app.post('/login_admin',colaboradorController.login_admin);

module.exports = app;
