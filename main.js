// buscardor input
// busquedacanciones class de canciones 


// start para el botonbuscador
// let canciones = ["Cancion 1", "Cancion 2", "Cancion 3", "Cancion 4", "Cancion 5", "Cancion 6", "Cancion 7"];

// let contendorBusqueda = document.getElementsByClassName("busquedacanciones");

// canciones.forEach(
//     can => {
//         contendorBusqueda.innerHTML += `<li class="busquedacanciones">${can}`;
//         console.log("esto escan" + can)
//     }

// );

// let inputBuscar = document.getElementById("botonBuscar");
// console.log(inputBuscar)

// inputBuscar.addEventListener(
//     "click",

//     function () {
//         let resultadoBusq = document.getElementById("buscardor").value;
//         //write expresion filter the songs arra by regex
//         let expresion = new RegExp(resultadoBusq, "i");

//         let cancionesFiltradas = canciones.filter(

//             can => expresion.test(can)
//         );


//         // aqui se llama a la nueva array y se cmbia el resultado en pantalla y en consolelog//
//         const desaparece = []

//         desaparece.push(cancionesFiltradas)
//         console.log(desaparece);

//         let resulatdoBusquedaRectangulo = document.getElementsByClassName("busquedacanciones");

//         for (let i = 0; i < resulatdoBusquedaRectangulo.length; i++) {

//             document.getElementsByTagName('ul')[0].innerHTML = desaparece

//         }
//     }

// );
// end para el botonbuscador





// clase de canciones 
class canciones {
    constructor(nombre, artista, album, anio, duracion, genero, caratula, urlCan) {
        this.nombre = nombre;
        this.artista = artista;
        this.album = album;
        this.anio = anio;
        this.duracion = duracion;
        this.genero = genero;
        this.caratula = caratula;
        this.urlCan = urlCan;
    }

    // start getter
    getCanNombreyArtista() {
        return '${this.nombre} - ${this.artista}';
    }

    getCanNombreyAlbum() {
        return '${this.nombre} - ${this.album}';
    }

    getCanNombreyAnio() {
        return '${this.nombre} - ${this.anio}';
    }

    getCanNombreyDuracion() {
        return '${this.nombre} - ${this.duracion}';
    }

    getCanNombreyGenero() {
        return '${this.nombre} - ${this.genero}';
    }
    getCanNombreyCaratula() {
        return '${this.nombre} - ${this.caratula}';
    }
    getCanNombreyURL() {
        return '${this.nombre} - ${this.urlCan}';
    }

}

// clase de playlist
class playlist {

    constructor(listaCanciones, orderEscuchar) {
        this.listaCanciones = listaCanciones;
        this.orderEscuchar = orderEscuchar;
    }

    getPlaylistCanciones() {
        return this.listaCanciones;
    }

    getPlaylistOrdenEscucha() {
        return this.orderEscuchar;
    }

    addSongtoPlaylist(cancion) {
        this.listaCanciones.push(cancion);
    }
    removeSongPlaylist(cancion) {
        this.listaCanciones = this.listaCanciones.filter(can => can !== cancion);
    }

}

// class favoritos
class favoritos {
    constructor(listaCanciones2, orderEscuchar2) {
        this.listaCanciones2 = listaCanciones2;
        this.orderEscuchar2 = orderEscuchar2;
    }

    getPlaylistCanciones() {
        return this.listaCanciones2;
    }

    getPlaylistOrdenEscucha() {
        return this.orderEscuchar2;
    }

    addSongtoPlaylist(cancion) {
        this.listaCanciones2.push(cancion);
    }
    removeSongPlaylist(cancion) {
        this.listaCanciones2 = this.listaCanciones2.filter(can => can !== cancion);
    }
}

// calse reproductor
class reproductor {
    catalogodeCanciones;
    currenSong;

    constructor() {
        this.catalogodeCanciones = [
            // nombre, artista, album, año, duracion, genero, caratula, urlCan
            new canciones("DameBeso", "KaliUchis", "Orquideas", 2024,  "3:34", "Pop","Car1", './asset/AUDIOS/Audio1.mp3'),
            new canciones(),
            
 
        ];
        console.log(this.catalogodeCanciones[0]) 

        this.mostrarCancion();
        this.currentSong = this.catalogodeCanciones[0]

    }

    mostrarCancion = function(){
        // reecorre el array de la cancion y me dice que cancion es en la descripcion 
    }

    // method
  
    play = function(cancion){
        //play html
    console.lo("play")
        // let audio = new Audio(this.currenSong.urlCan);
        cancion.play();  
    }
  
    stop = function(cancion){
        //stop html
        console.log();("stop")
        // let audio = new Audio(this.currenSong.urlCan);
        cancion.stop();  
    }

}
