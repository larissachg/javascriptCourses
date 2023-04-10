const reproductor = {
    reproducir: function(id){  //En un objeto son propiedades pero como tienen funciones dentro se llaman metodos de propiedades
        console.log(`Reproduciendo cancion con el id ${id}`);
    },
    pausar: function(){
        console.log('pausando...');
    },
    borrar: function(id){
        console.log(`Borrando cancion ${id}`);
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la playlist ${nombre}`);
    }
};

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('Romanticas');
reproductor.crearPlaylist('Regueton');