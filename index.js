/* jshint -W097 */ 
/* jshint -W117 */ 
'use strict';
var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.port || 3678;

mongoose.connect('mongodb://localhost:27017/cursoFavoritos', { useNewUrlParser: true }, (err, res) => {
    if(err){
        throw err;
    } else {
        console.log('mongodb corre actualmente bien.!');
        app.listen( port, () => { 
            console.log(`ApiRest favoritos en http://localhost:${port}`);
        });
    }    


});
    