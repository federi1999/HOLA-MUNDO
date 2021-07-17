
const express = require('express');



class Server{


    constructor(){
        this.app = express();
        this.port = 8081;
    
        this.middelwares();

    }



    middelwares(){

        this.app.use(express.json());
        this.app.use(express.static('public'));
    }


    listen(){
        
        this.app.listen(this.port,()=>{
            console.log('Servidor corriendo en el puerto: ', this.port);

        });
    }
}

module.exports = Server;