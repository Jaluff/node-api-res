/* jshint -W097 */ 
/* jshint -W117 */ 
'use estrict';
var express = require('express');
var FavoritoController = require('../controllers/favorito_controller');
var api = express.Router();

api.get('/prueba/:nombre', FavoritoController.prueba) ;
api.get('/favorito/:id', FavoritoController.getfavorito) ;
api.get('/favoritos', FavoritoController.getfavoritos) ;
api.post('/favorito', FavoritoController.savefavorito) ;
api.put('/favorito/:id', FavoritoController.updatefavorito) ;
api.delete('/favorito/:id', FavoritoController.deletefavorito) ;

module.exports = api;