/* jshint -W097 */ 
/* jshint -W117 */ 
'use strict';

var Favorito = require ('../models/favorito_model');

function prueba(req, res) {
    
    var name = req.params.nombre || "Sin Nombre";
    
    res.status(200).send({
     
        data: [2,3,4],
    
        message: "Hola mundo con NodeJS y EXPRESS - "+name
    
    });
}

function getfavorito(req , res){
    
    var favoritoId = req.params.id;

    Favorito.findById(favoritoId, (err, favorito) =>{
        
        if (err){
        
            res.status(500).send({message: 'Error al devolver el marcador'});
        }

        if(!favorito){
        
            res.status(404).send({message: 'No hay marcador'});
        
        }else{

            res.status(200).send({favorito});
            
        }

    });
    
}

function getfavoritos(req , res) {
    
    Favorito.find({}).sort('-_id').exec(((err, favoritos) => {
        
        if(err){
       
            res.status(500).send({message: 'Error al devolver marcadores'});
      
        }

        if(!favoritos){
        
            res.status(404).send({message: 'No hay marcadores'});
        
        } else {

            res.status(200).send({favoritos});

        }
        
    })
    );
}

function savefavorito(req , res){
    
    var favorito = new Favorito();
    
    var params = req.body;
    
    favorito.title = params.titulo;
    
    favorito.description = params.descripcion;
    
    favorito.url = params.url;

    favorito.save((err, favoritoStored) => {
        
        if(err){

            res.status(500).send({message: ' Error al mandar favorito'});

        }else {

            res.status(200).send({ favorito: favoritoStored });

        }
                   
    });

}

function updatefavorito(req , res){
    
    var favoritoId = req.params.id;
    
    var update = req.body;
    
    Favorito.findByIdAndUpdate(favoritoId , update, ( err , favoritoUpdated) => {
    
        if (err){
    
            res.status(500).send({message: 'Error al actualizar el marador'});
    
        } else {
            console.log("algo salio bien!");
            res.status(200).send({ favorito: favoritoUpdated });

        }
        
        
    
    });
    
}

function deletefavorito(req , res){

    var favoritoId = req.params.id;
    
    Favorito.findById(favoritoId, ((err, favorito) => {
        
        if(err){

            res.status(500).send({message: 'Error al devolver marcadores'});
        }

        if(!favorito){
        
            res.status(404).send({message: 'No hay marcadores'});
        
        }else {

            favorito.remove( err => {
                if(err){

                    res.status(500).send({message: 'Error al borra el marcador'});

                }else{

                    res.status(200).send({message: 'Marcador borrado...'});

                }

            });
        }

    })

    );

}

module.exports ={
    prueba,
    getfavorito,
    getfavoritos,
    savefavorito,
    deletefavorito,
    updatefavorito
};